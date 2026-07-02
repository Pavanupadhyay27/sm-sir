"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  // Actual mouse position
  const pos   = useRef({ x: -200, y: -200 });
  // Lagging ring position (lerped)
  const ring  = useRef({ x: -200, y: -200 });
  // Trail position (slower lerp)
  const trail = useRef({ x: -200, y: -200 });

  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden,   setHidden]   = useState(false);

  // Detect touch/mobile — no custom cursor needed there
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // matchMedia for fine pointer (mouse). Coarse = touch/stylus.
    const mq = window.matchMedia("(pointer: fine)");
    setIsTouch(!mq.matches);

    const onChange = (e: MediaQueryListEvent) => setIsTouch(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isTouch) {
      // Restore default cursor on touch devices
      document.documentElement.style.cursor = "";
      return;
    }

    // Hide default cursor globally
    document.documentElement.style.cursor = "none";

    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Ring follows mouse — fast and snappy
      ring.current.x  = lerp(ring.current.x,  pos.current.x, 0.22);
      ring.current.y  = lerp(ring.current.y,  pos.current.y, 0.22);
      // Aura trails slightly behind
      trail.current.x = lerp(trail.current.x, pos.current.x, 0.10);
      trail.current.y = lerp(trail.current.y, pos.current.y, 0.10);

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform =
          `translate(${trail.current.x}px, ${trail.current.y}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);

    const onMouseDown = () => setClicking(true);
    const onMouseUp   = () => setClicking(false);

    // Detect hoverable elements
    const addHoverListeners = () => {
      const els = document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
      );
      els.forEach(el => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    addHoverListeners();
    // Re-scan on DOM mutations (for dynamically rendered elements)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup",   onMouseUp);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup",   onMouseUp);
    };
  }, [isTouch]);

  // On touch screens render nothing — native cursor/finger is used
  if (isTouch) return null;

  const baseTransition = "width 0.25s ease, height 0.25s ease, opacity 0.25s ease, background-color 0.25s ease, border-color 0.25s ease";

  return (
    <>
      {/* ── Outer trailing aura ── */}
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          top:    0,
          left:   0,
          width:  hovered ? 64 : 48,
          height: hovered ? 64 : 48,
          marginLeft: hovered ? -32 : -24,
          marginTop:  hovered ? -32 : -24,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, rgba(16,185,129,0) 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: hidden ? 0 : 1,
          transition: "width 0.35s ease, height 0.35s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />

      {/* ── Mid ring (lagging) ── */}
      <div
        ref={ringRef}
        style={{
          position:  "fixed",
          top:  0,
          left: 0,
          width:  hovered  ? 42 : clicking ? 20 : 32,
          height: hovered  ? 42 : clicking ? 20 : 32,
          marginLeft: hovered  ? -21 : clicking ? -10 : -16,
          marginTop:  hovered  ? -21 : clicking ? -10 : -16,
          borderRadius: "50%",
          border: hovered
            ? "1.5px solid rgba(16,185,129,0.85)"
            : "1.5px solid rgba(16,185,129,0.50)",
          backgroundColor: hovered ? "rgba(16,185,129,0.08)" : "transparent",
          boxShadow: hovered
            ? "0 0 18px rgba(16,185,129,0.25), inset 0 0 8px rgba(16,185,129,0.10)"
            : "none",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: hidden ? 0 : 1,
          transition: baseTransition + ", box-shadow 0.25s ease",
          willChange: "transform",
        }}
      />

      {/* ── Center precise dot ── */}
      <div
        ref={dotRef}
        style={{
          position:     "fixed",
          top:    0,
          left:   0,
          width:  hovered  ? 6  : clicking ? 3 : 5,
          height: hovered  ? 6  : clicking ? 3 : 5,
          marginLeft: hovered  ? -3  : clicking ? -1.5 : -2.5,
          marginTop:  hovered  ? -3  : clicking ? -1.5 : -2.5,
          borderRadius: "50%",
          backgroundColor: hovered
            ? "rgba(16,185,129,1)"
            : "rgba(16,185,129,0.9)",
          boxShadow: "0 0 8px rgba(16,185,129,0.8)",
          pointerEvents: "none",
          zIndex: 10000,
          opacity: hidden ? 0 : 1,
          transition: baseTransition,
          willChange: "transform",
        }}
      />
    </>
  );
}
