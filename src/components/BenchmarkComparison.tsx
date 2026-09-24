"use client";

import React, { useState } from "react";
import { Zap, ShieldCheck, Cpu, DollarSign, Gauge, Check, X, Sparkles } from "lucide-react";

interface BenchmarkMetric {
  title: string;
  digizierValue: string;
  digizierScore: number; // 0 - 100
  genericValue: string;
  genericScore: number;
  unit: string;
  explanation: string;
}

const metrics: BenchmarkMetric[] = [
  {
    title: "Edge TTFB & Initial Page Load",
    digizierValue: "38ms",
    digizierScore: 98,
    genericValue: "780ms",
    genericScore: 25,
    unit: "Latency",
    explanation: "Static Edge export on Cloudflare/Vercel with 0 serverless cold start.",
  },
  {
    title: "Autonomous Agentic Pipelines",
    digizierValue: "Native Multi-Agent",
    digizierScore: 100,
    genericValue: "Limited Zapier / Webhooks",
    genericScore: 30,
    unit: "Automation Depth",
    explanation: "Tailored Python/Node LLM agent workflows with real-time feedback loops.",
  },
  {
    title: "Infrastructure Operating Cost",
    digizierValue: "$0 / month",
    digizierScore: 100,
    genericValue: "$120 - $350 / month",
    genericScore: 15,
    unit: "Server Cost",
    explanation: "Zero-load free-tier architecture with static export + direct BaaS queries.",
  },
  {
    title: "Google Core Web Vitals Score",
    digizierValue: "100 / 100",
    digizierScore: 100,
    genericValue: "48 - 65 / 100",
    genericScore: 40,
    unit: "Lighthouse",
    explanation: "Bespoke clean DOM, zero third-party plugin bloat, unoptimized image bypass.",
  },
];

export default function BenchmarkComparison() {
  const [activeMetric, setActiveMetric] = useState(0);

  return (
    <section id="comparison" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-soft-cyan/30 bg-soft-cyan/10 text-soft-cyan text-xs font-mono mb-4">
            <Gauge className="w-3.5 h-3.5" />
            UNFAIR ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Custom Code & Agentic AI?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Compare our engineered zero-load architecture against generic CMS templates and sluggish no-code builders.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Metric Selector */}
          <div className="lg:col-span-5 space-y-3">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                onClick={() => setActiveMetric(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeMetric === idx
                    ? "bg-surface-100/90 border-soft-cyan/40 shadow-soft-glow-cyan translate-x-1"
                    : "glass-panel border-white/5 hover:border-white/10 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-bold text-white">{m.title}</h4>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {m.unit}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-1">{m.explanation}</p>
              </div>
            ))}
          </div>

          {/* Right Column: 3D Visual Metric Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-3d-glass relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono text-soft-cyan uppercase tracking-wider">
                    Performance Benchmark
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {metrics[activeMetric].title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-soft-cyan/10 border border-soft-cyan/30 flex items-center justify-center text-soft-cyan">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              {/* Digizier Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-soft-cyan" />
                    Digizier Custom Architecture
                  </span>
                  <span className="font-mono font-bold text-soft-cyan">
                    {metrics[activeMetric].digizierValue}
                  </span>
                </div>
                <div className="h-4 w-full bg-surface-300 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-soft-violet via-soft-cyan to-soft-emerald transition-all duration-700 ease-out shadow-soft-glow-cyan"
                    style={{ width: `${metrics[activeMetric].digizierScore}%` }}
                  />
                </div>
                <span className="text-[11px] text-slate-400 mt-1.5 block">
                  {metrics[activeMetric].explanation}
                </span>
              </div>

              {/* Generic Builder Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-400 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-400" />
                    Standard WordPress / No-Code Templates
                  </span>
                  <span className="font-mono font-medium text-slate-400">
                    {metrics[activeMetric].genericValue}
                  </span>
                </div>
                <div className="h-3 w-full bg-surface-300 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-slate-600 transition-all duration-700 ease-out"
                    style={{ width: `${metrics[activeMetric].genericScore}%` }}
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1.5 block">
                  Bloated DOM, runtime plugin waterfalls, and expensive recurring server resources.
                </span>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-soft-emerald">
                  <Check className="w-4 h-4" /> 100% Zero-Load Free-Tier Guaranteed
                </span>
                <span className="font-mono text-[10px]">Cloudflare + Vercel + Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
