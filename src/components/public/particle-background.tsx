"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;
    const mouse = { x: -9999, y: -9999, radius: 160 };

    // Detect mobile for reduced grid density
    const isMobile = () => window.innerWidth < 768;

    const isDark = () =>
      document.documentElement.classList.contains("dark");

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      time += 0.0035;

      // Use smaller grid on mobile for better performance
      const mobile = isMobile();
      const cols = mobile ? 20 : 38;
      const rows = mobile ? 14 : 26;

      const spacingX = width  / (cols - 1);
      const spacingY = height / (rows - 1);

      // Moderate pitch for deep 3D perspective
      const pitch = 0.85;
      const cosP  = Math.cos(pitch);
      const sinP  = Math.sin(pitch);

      // Focal length — higher = less distortion at edges
      const fov = height * 1.2;

      // Pre-allocate vertex buffer
      const vx = new Float32Array(cols * rows);
      const vy = new Float32Array(cols * rows);
      const vn = new Float32Array(cols * rows); // normalized depth

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;

          // Grid position in 3D world space (center-origin)
          const gx = c * spacingX - width  / 2;
          const gy = r * spacingY - height / 2;

          const nx = c / (cols - 1); // 0→1
          const ny = r / (rows - 1); // 0→1

          // Multi-octave wave for organic terrain feel
          const gz =
            Math.sin(nx * 8.0  + time * 1.4) * Math.cos(ny * 6.0  - time * 1.1) * 22 +
            Math.sin(nx * 16.0 - time * 2.4) * Math.sin(ny * 12.0 + time * 2.0) * 8  +
            Math.cos(nx * 28.0 + time * 3.2) * Math.cos(ny * 22.0 - time * 2.8) * 3;

          // Mouse / touch ripple & tearing
          const approxSx = gx + width / 2;
          const approxSy = gy * cosP + gz * sinP + height * 0.5;
          const mdx   = mouse.x - approxSx;
          const mdy   = mouse.y - approxSy;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          let finalGz = gz;

          let offsetX = 0;
          let offsetY = 0;

          if (mdist < mouse.radius) {
            const t = 1 - mdist / mouse.radius;
            finalGz += t * t * t * 52 * Math.sin(time * 7 + mdist * 0.08);

            // Tearing Recoil: vertices within 75px snap and push elastically away from cursor
            const tearRadius = 75;
            if (mdist < tearRadius) {
              const tearStrength = 1 - mdist / tearRadius; // 0 at edge, 1 at center
              const angle = Math.atan2(approxSy - mouse.y, approxSx - mouse.x);
              // Push vertices outward to visually rip the mesh open
              offsetX += Math.cos(angle) * tearStrength * 35;
              offsetY += Math.sin(angle) * tearStrength * 25;
            }
          }

          // Pitch rotation around X axis
          const worldY = gy * cosP - finalGz * sinP;
          const worldZ = gy * sinP + finalGz * cosP;

          // Perspective projection
          const camZ  = worldZ + fov;
          const scale = fov / Math.max(camZ, 1);
          vx[idx] = (gx + offsetX) * scale + width  / 2;
          vy[idx] = (worldY + offsetY) * scale + height * 0.56;

          // Smooth depth factor: 1=near, 0=far
          const rawN = 1 - (camZ - fov * 0.5) / (fov * 2.8);
          vn[idx] = Math.max(0, Math.min(1, rawN));
        }
      }

      const dk = isDark();
      const baseR = dk ? 16  : 4;
      const baseG = dk ? 185 : 120;
      const baseB = dk ? 129 : 87;
      const alphaScale = dk ? 0.42 : 0.26;

      // Draw line helper
      const drawLine = (i: number, j: number) => {
        // Midpoint of line segment
        const midX = (vx[i] + vx[j]) * 0.5;
        const midY = (vy[i] + vy[j]) * 0.5;
        const dx = mouse.x - midX;
        const dy = mouse.y - midY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Snap/Tearing rules
        const snapRadius = 40;     // completely cut
        const tensionRadius = 70;  // warning glow/flicker

        if (dist < snapRadius) {
          return; // Snap! Connection is broken
        }

        const nzAvg = (vn[i] + vn[j]) * 0.5;
        const alpha = nzAvg * nzAvg * nzAvg * alphaScale;
        if (alpha < 0.003) return;

        let strokeStyle = `rgba(${baseR},${baseG},${baseB},${alpha.toFixed(3)})`;

        if (dist < tensionRadius) {
          // Tension factor: 0 at tension boundary, 1 at snap boundary
          const tension = (tensionRadius - dist) / (tensionRadius - snapRadius);
          const flicker = Math.random() > 0.2 ? 1 : 0.3; // stress flicker

          // Interpolate color from base green to hot gold (#d97706)
          const targetR = 217;
          const targetG = 119;
          const targetB = 6;

          const r = Math.round(baseR + (targetR - baseR) * tension);
          const g = Math.round(baseG + (targetG - baseG) * tension);
          const b = Math.round(baseB + (targetB - baseB) * tension);

          strokeStyle = `rgba(${r},${g},${b},${(alpha * flicker * (1 - tension * 0.35)).toFixed(3)})`;
        }

        ctx.beginPath();
        ctx.moveTo(vx[i], vy[i]);
        ctx.lineTo(vx[j], vy[j]);
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 0.4 + nzAvg * 0.6;
        ctx.stroke();
      };

      // Horizontal segments
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 1; c++) {
          drawLine(r * cols + c, r * cols + c + 1);
        }
      }

      // Vertical segments
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows - 1; r++) {
          drawLine(r * cols + c, (r + 1) * cols + c);
        }
      }

      // Intersection glow dots on near vertices
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const n   = vn[idx];
          if (n < 0.55) continue; // only near vertices
          const dotAlpha = (n - 0.55) * (n - 0.55) * (dk ? 1.2 : 0.7);
          if (dotAlpha < 0.012) continue;
          ctx.beginPath();
          ctx.arc(vx[idx], vy[idx], 0.6 + n * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${baseR},${baseG},${baseB},${Math.min(dotAlpha, 0.55).toFixed(3)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // ── Mouse support ──────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // ── Touch support ──────────────────────────────────────────────
    const handleTouchMove = (e: TouchEvent) => {
      // Use the first active touch point to drive the ripple
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = () => {
      // Gradually fade ripple away instead of a hard reset
      // (we keep the last position; the ripple naturally decays
      //  because the point moves away from the grid as animation runs)
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize",      handleResize);
    window.addEventListener("mousemove",   handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove",   handleTouchMove, { passive: true });
    window.addEventListener("touchend",    handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize",      handleResize);
      window.removeEventListener("mousemove",   handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove",   handleTouchMove);
      window.removeEventListener("touchend",    handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
