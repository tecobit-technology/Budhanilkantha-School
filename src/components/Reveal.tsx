"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  /** Element or component to render. Defaults to `div`. */
  as?: ElementType;
  direction?: RevealDirection;
  /** Milliseconds to wait after the element enters the viewport. */
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * Fades and slides content into view the first time it scrolls near the
 * viewport.
 *
 * The hidden state lives in CSS and is gated behind the `js-reveal` class on
 * `<html>`, which an inline script in the root layout sets before paint. That
 * keeps the content readable with JavaScript disabled and avoids a flash of
 * already-visible content while the bundle loads.
 */
export default function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 700,
  className,
  style,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      node.dataset.revealed = "true";
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`,
          "--reveal-duration": `${duration}ms`,
        } as CSSProperties
      }
      data-reveal={direction}
    >
      {children}
    </Tag>
  );
}

/**
 * Reveals each direct child in turn, which reads better than one flat fade
 * for card grids and list rows.
 */
export function RevealGroup({
  as: Tag = "div",
  direction = "up",
  step = 90,
  duration = 700,
  className,
  style,
  children,
}: Omit<RevealProps, "delay"> & { step?: number }) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <Tag className={className} style={style}>
      {items.map((child, i) => (
        <Reveal
          key={i}
          direction={direction}
          delay={i * step}
          duration={duration}
        >
          {child}
        </Reveal>
      ))}
    </Tag>
  );
}
