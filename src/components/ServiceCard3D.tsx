"use client";

import React, { useRef, useState } from "react";
import { LucideIcon, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceCard3DProps {
  title: string;
  badge: string;
  accentColor: "violet" | "cyan" | "emerald";
  icon: LucideIcon;
  description: string;
  features: string[];
  techTags: string[];
  onSelect: () => void;
}

export default function ServiceCard3D({
  title,
  badge,
  accentColor,
  icon: Icon,
  description,
  features,
  techTags,
  onSelect,
}: ServiceCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50, opacity: 0 });

  const colorStyles = {
    violet: {
      badge: "bg-soft-violet/10 text-soft-violet border-soft-violet/30",
      glow: "hover:shadow-soft-glow-violet",
      iconBg: "from-soft-violet/20 to-purple-500/10 text-soft-violet border-soft-violet/30",
      sheen: "rgba(167, 139, 250, 0.15)",
      bullet: "text-soft-violet",
      tag: "bg-soft-violet/5 text-soft-violet border-soft-violet/20",
    },
    cyan: {
      badge: "bg-soft-cyan/10 text-soft-cyan border-soft-cyan/30",
      glow: "hover:shadow-soft-glow-cyan",
      iconBg: "from-soft-cyan/20 to-sky-500/10 text-soft-cyan border-soft-cyan/30",
      sheen: "rgba(56, 189, 248, 0.15)",
      bullet: "text-soft-cyan",
      tag: "bg-soft-cyan/5 text-soft-cyan border-soft-cyan/20",
    },
    emerald: {
      badge: "bg-soft-emerald/10 text-soft-emerald border-soft-emerald/30",
      glow: "hover:shadow-soft-glow-emerald",
      iconBg: "from-soft-emerald/20 to-teal-500/10 text-soft-emerald border-soft-emerald/30",
      sheen: "rgba(52, 211, 153, 0.15)",
      bullet: "text-soft-emerald",
      tag: "bg-soft-emerald/5 text-soft-emerald border-soft-emerald/20",
    },
  }[accentColor];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
    setSheenPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSheenPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
      className={`relative group rounded-3xl p-8 glass-panel border border-white/10 ${colorStyles.glow} cursor-pointer overflow-hidden transform-style-3d`}
    >
      {/* Dynamic Specular Sheen Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: sheenPos.opacity,
          background: `radial-gradient(circle 350px at ${sheenPos.x}% ${sheenPos.y}%, ${colorStyles.sheen}, transparent 80%)`,
        }}
      />

      {/* Header Info */}
      <div className="flex items-start justify-between mb-6 translate-z-10">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorStyles.iconBg} border p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <span
          className={`text-[11px] font-mono tracking-wide uppercase px-3 py-1 rounded-full border ${colorStyles.badge}`}
        >
          {badge}
        </span>
      </div>

      {/* Title & Copy */}
      <div className="mb-6 translate-z-10">
        <h3 className="text-2xl font-bold text-white tracking-tight mb-3 flex items-center justify-between group-hover:text-slate-100">
          {title}
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
      </div>

      {/* Feature Checkpoints */}
      <ul className="space-y-2.5 mb-6 text-xs text-slate-200 translate-z-10">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${colorStyles.bullet}`} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack Tags */}
      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 translate-z-10">
        {techTags.map((tag, idx) => (
          <span
            key={idx}
            className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${colorStyles.tag}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
