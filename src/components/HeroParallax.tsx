"use client";

import { useRef } from "react";

export default function HeroParallax({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt-x", `${px * -5}deg`);
    node.style.setProperty("--tilt-y", `${py * 5}deg`);
    node.style.setProperty("--shift-x", `${px * 12}px`);
    node.style.setProperty("--shift-y", `${py * 12}px`);
  }

  function handleLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
    node.style.setProperty("--shift-x", "0px");
    node.style.setProperty("--shift-y", "0px");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`[transform:perspective(1200px)_rotateX(var(--tilt-y,0deg))_rotateY(var(--tilt-x,0deg))] transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}