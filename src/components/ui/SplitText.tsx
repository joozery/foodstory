"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
}

function getUnits(text: string, splitType: "chars" | "words"): string[] {
  if (splitType === "words") return text.split(/(\s+)/);

  // Use Intl.Segmenter for grapheme-aware splitting (handles Thai supra/sub consonants)
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const seg = new (Intl as unknown as { Segmenter: new (locale?: string, options?: { granularity: string }) => { segment: (text: string) => Iterable<{ segment: string }> } }).Segmenter(
      undefined,
      { granularity: "grapheme" }
    );
    return [...seg.segment(text)].map((s) => s.segment);
  }

  return Array.from(text);
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign,
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const units = getUnits(text, splitType);

    el.innerHTML = "";
    const spans: HTMLSpanElement[] = units.map((unit) => {
      const span = document.createElement("span");
      span.style.cssText = "display:inline-block; white-space:pre;";
      span.textContent = unit;
      el.appendChild(span);
      return span;
    });

    gsap.set(spans, from);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(spans, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: onLetterAnimationComplete,
        });
        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, splitType]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline",
        whiteSpace: "nowrap",
        ...(textAlign ? { textAlign } : {}),
      }}
    />
  );
}
