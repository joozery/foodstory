"use client";
import { useRef, useEffect, useCallback, Children, ReactNode } from "react";
import gsap from "gsap";

export interface CardProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = "", style }: CardProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

interface CardSwapProps {
  children: ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  className?: string;
  onSwap?: (frontIndex: number) => void;
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = true,
  className = "",
  onSwap,
}: CardSwapProps) {
  const cards = Children.toArray(children);
  const n = cards.length;

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const order = useRef<number[]>(Array.from({ length: n }, (_, i) => i));
  const paused = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const place = useCallback(
    (anim: boolean) => {
      order.current.forEach((cardIdx, pos) => {
        const el = refs.current[cardIdx];
        if (!el) return;
        const props = {
          x: pos * cardDistance * 0.4,
          y: pos * verticalDistance * 0.12,
          rotation: pos * (cardDistance * 0.06),
          scale: 1 - pos * 0.05,
          zIndex: n - pos,
          opacity: pos >= 3 ? 0 : 1,
        };
        if (anim) {
          gsap.to(el, { ...props, duration: 0.65, ease: "power3.out" });
        } else {
          gsap.set(el, props);
        }
      });
    },
    [n, cardDistance, verticalDistance]
  );

  useEffect(() => {
    place(false);
  }, [place]);

  const next = useCallback(() => {
    if (paused.current) return;
    const [front, ...rest] = order.current;
    order.current = [...rest, front];
    place(true);
    onSwap?.(order.current[0]);
  }, [place, onSwap]);

  useEffect(() => {
    const tick = () => {
      next();
      timer.current = setTimeout(tick, delay);
    };
    timer.current = setTimeout(tick, delay);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [next, delay]);

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => { if (pauseOnHover) paused.current = true; }}
      onMouseLeave={() => { if (pauseOnHover) paused.current = false; }}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: "transform" }}
        >
          {card}
        </div>
      ))}
    </div>
  );
}
