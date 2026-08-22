"use client";
import { useRef, useEffect, useState } from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
  className?: string;
}

const REPEATS = 8;

export default function CurvedLoop({
  marqueeText = "Welcome ✦",
  speed = 2,
  curveAmount = 300,
  direction = "left",
  interactive = false,
  className = "",
}: CurvedLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const rafRef = useRef<number>(0);
  const raf2Ref = useRef<number>(0);
  const offsetRef = useRef(10);

  const [width, setWidth] = useState(0);
  const [curve, setCurve] = useState(curveAmount);

  /* measure container width */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    setWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  /* start marquee after SVG is painted */
  useEffect(() => {
    if (!width) return;
    cancelAnimationFrame(rafRef.current);
    cancelAnimationFrame(raf2Ref.current);

    /* double rAF = wait for browser layout of SVG */
    rafRef.current = requestAnimationFrame(() => {
      raf2Ref.current = requestAnimationFrame(() => {
        const pathEl = pathRef.current;
        const textEl = textPathRef.current;
        if (!pathEl || !textEl) return;

        const pathLen = pathEl.getTotalLength();
        const textLen = textEl.getComputedTextLength();
        if (!pathLen || !textLen) return;

        const pct = ((textLen / REPEATS) / pathLen) * 100;
        /* start positive so text is visible immediately */
        offsetRef.current = pct;

        const step = pct / (60 * (18 / Math.max(0.1, speed)));

        const tick = () => {
          if (direction === "left") {
            offsetRef.current -= step;
            if (offsetRef.current <= 0) offsetRef.current += pct;
          } else {
            offsetRef.current += step;
            if (offsetRef.current >= pct * 2) offsetRef.current -= pct;
          }
          textEl.setAttribute("startOffset", `${offsetRef.current}%`);
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      });
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(raf2Ref.current);
    };
  }, [width, curve, speed, direction]);

  /* interactive */
  useEffect(() => {
    if (!interactive) return;
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      setCurve(curveAmount * (1 - ((e.clientY - top) / height) * 2));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [interactive, curveAmount]);

  const svgH = Math.abs(curve) + 160;
  const topY = 80;
  const pathD = width
    ? `M 0,${topY} Q ${width / 2},${topY + Math.abs(curve)} ${width},${topY}`
    : "";
  const fullText = `${marqueeText} `.repeat(REPEATS);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{ height: `${svgH}px` }}
      suppressHydrationWarning
    >
      {width > 0 && (
        <svg width={width} height={svgH} aria-hidden="true">
          <defs>
            <path ref={pathRef} id={`cl-${width}`} d={pathD} />
          </defs>
          <text
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 800,
              letterSpacing: "0.03em",
              fontFamily: "inherit",
            }}
            className={className}
          >
            <textPath
              ref={textPathRef}
              href={`#cl-${width}`}
              startOffset="10%"
            >
              {fullText}
            </textPath>
          </text>
        </svg>
      )}
    </div>
  );
}
