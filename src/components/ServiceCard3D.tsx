"use client";

import React, { useRef, useState } from "react";
import { LucideIcon, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface ServiceCard3DProps {
  title: string;
  badge: string;
  accentColor: "orange" | "violet" | "cyan" | "emerald";
  icon: LucideIcon;
  description: string;
  features: string[];
  techTags: string[];
}

export default function ServiceCard3D({
  title,
  badge,
  accentColor,
  icon: Icon,
  description,
  features,
  techTags,
}: ServiceCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50, opacity: 0 });

  const colorStyles = {
    orange: {
      badge: "bg-orange-500/10 text-orange-400 border-orange-500/30",
      glow: "hover:shadow-orange-500/10",
      iconBg: "from-orange-500/20 to-amber-500/10 text-orange-400 border-orange-500/30",
      sheen: "rgba(249, 115, 22, 0.15)",
      bullet: "text-orange-400",
      tag: "bg-orange-500/5 text-orange-300 border-orange-500/20",
    },
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
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      glow: "hover:shadow-emerald-500/10",
      iconBg: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
      sheen: "rgba(52, 211, 153, 0.15)",
      bullet: "text-emerald-400",
      tag: "bg-emerald-500/5 text-emerald-300 border-emerald-500/20",
    },
  }[accentColor];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

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

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello Nadir! I am interested in Digizier's service: ${title}. Can you share more details and pricing?`
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
      className={`relative group rounded-3xl p-6 sm:p-7 glass-panel border border-white/10 ${colorStyles.glow} flex flex-col justify-between overflow-hidden transform-style-3d`}
    >
      {/* Dynamic Specular Sheen Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: sheenPos.opacity,
          background: `radial-gradient(circle 320px at ${sheenPos.x}% ${sheenPos.y}%, ${colorStyles.sheen}, transparent 80%)`,
        }}
      />

      <div>
        {/* Header Info */}
        <div className="flex items-start justify-between mb-5 translate-z-10">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorStyles.iconBg} border p-2.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <span
            className={`text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded-full border ${colorStyles.badge}`}
          >
            {badge}
          </span>
        </div>

        {/* Title & Copy */}
        <div className="mb-4 translate-z-10">
          <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-slate-100">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{description}</p>
        </div>

        {/* Feature Checkpoints */}
        <ul className="space-y-2 mb-5 text-xs text-slate-300 translate-z-10">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${colorStyles.bullet}`} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Tags */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 mb-5 translate-z-10">
          {techTags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${colorStyles.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action: Direct WhatsApp Inquire */}
      <div className="pt-2 translate-z-10">
        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
          Inquire on WhatsApp
          <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 opacity-70" />
        </a>
      </div>
    </div>
  );
}
