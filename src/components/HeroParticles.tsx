"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  alpha: number;
  hue: "volt" | "terminal";
};

const COLORS = { volt: "27,95,255", terminal: "228,35,47" };

export default function HeroParticles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    function spawn(randomY: boolean): Particle {
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : height + 8,
        r: Math.random() * 1.5 + 0.6,
        vy: Math.random() * 0.3 + 0.12,
        vx: (Math.random() - 0.5) * 0.12,
        alpha: Math.random() * 0.45 + 0.2,
        hue: Math.random() > 0.9 ? "terminal" : "volt",
      };
    }

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.round((width * height) / 16000), 85);
      particles = Array.from({ length: count }, () => spawn(true));
    }

    function frame() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.vy;
        p.x += p.vx;
        if (p.y < -8) Object.assign(p, spawn(false));
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${COLORS[p.hue]}, ${p.alpha})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    function staticFrame() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${COLORS[p.hue]}, ${p.alpha})`;
        ctx!.fill();
      }
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      staticFrame();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={`hero-particles ${className}`} aria-hidden="true" />;
}