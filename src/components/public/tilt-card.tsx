"use client";

import { useRef, useCallback, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation degrees (default 10) */
  intensity?: number;
  /** Disable tilt (e.g., on explicit mobile/reduced-motion request) */
  disabled?: boolean;
  /** Extra wrapper class */
  wrapperClassName?: string;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  disabled = false,
  wrapperClassName = "",
}: TiltCardProps) {
  const cardRef    = useRef<HTMLDivElement>(null);
  const specRef    = useRef<HTMLDivElement>(null);
  const rafId      = useRef<number>(0);
  const isHovering = useRef(false);

  // Respect prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const applyTilt = useCallback(
    (rx: number, ry: number, mx: number, my: number, specOpacity: number) => {
      const el   = cardRef.current;
      const spec = specRef.current;
      if (!el) return;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
      el.style.setProperty("--sc", "1.025");
      if (spec) {
        spec.style.setProperty("--mx",           `${mx}%`);
        spec.style.setProperty("--my",           `${my}%`);
        spec.style.setProperty("--spec-opacity", `${specOpacity}`);
      }
    },
    []
  );

  const resetTilt = useCallback(() => {
    const el   = cardRef.current;
    const spec = specRef.current;
    if (!el) return;
    el.classList.add("card-3d-reset");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--sc", "1");
    if (spec) spec.style.setProperty("--spec-opacity", "0");
    setTimeout(() => el.classList.remove("card-3d-reset"), 650);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || prefersReduced) return;
      const currentTarget = e.currentTarget;
      const clientX = e.clientX;
      const clientY = e.clientY;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (!currentTarget) return;
        const rect = currentTarget.getBoundingClientRect();
        const x    = (clientX - rect.left) / rect.width;   // 0→1
        const y    = (clientY - rect.top)  / rect.height;  // 0→1
        const rx   = -(y - 0.5) * intensity * 2;
        const ry   =  (x - 0.5) * intensity * 2;
        applyTilt(rx, ry, x * 100, y * 100, 0.55);
      });
    },
    [disabled, prefersReduced, intensity, applyTilt]
  );

  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    cancelAnimationFrame(rafId.current);
    resetTilt();
  }, [resetTilt]);

  if (disabled || prefersReduced) {
    return <div className={`${wrapperClassName} ${className}`}>{children}</div>;
  }

  return (
    <div className={`card-3d-wrapper ${wrapperClassName}`}>
      <div ref={cardRef} className={`card-3d ${className}`} style={{ position: "relative" }}>
        {children}
      </div>
    </div>
  );
}
