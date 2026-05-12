"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000 };
    const gridSize = 24;
    const radius = 150;
    const warpStrength = 8;
    let animationFrameId: number;

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= height; y += 5) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let offset = 0;

          if (dist < radius) {
            const force = (radius - dist) / radius;
            offset = Math.sin(Date.now() * 0.005 + y * 0.1) * force * warpStrength;
          }

          if (y === 0) ctx.moveTo(x + offset, y);
          else ctx.lineTo(x + offset, y);
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let offset = 0;

          if (dist < radius) {
            const force = (radius - dist) / radius;
            offset = Math.cos(Date.now() * 0.005 + x * 0.1) * force * warpStrength;
          }

          if (x === 0) ctx.moveTo(x, y + offset);
          else ctx.lineTo(x, y + offset);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
