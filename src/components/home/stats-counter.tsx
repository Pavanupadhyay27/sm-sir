"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  value: string;
  label: string;
}

export default function StatsCounter({ value, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const isPlus = value.includes("+");

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * targetNumber);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [targetNumber]);

  return (
    <div className="glass p-6 rounded-2xl flex flex-col justify-center items-center text-center transition-transform hover:scale-[1.02] duration-300 relative overflow-hidden group">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-emerald/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary-emerald to-accent-gold bg-clip-text text-transparent">
        {count}
        {isPlus && "+"}
      </span>
      <span className="text-xs text-custom-muted font-medium mt-2 tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}
