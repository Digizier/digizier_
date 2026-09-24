"use client";

import React, { useState } from "react";
import { Zap, Gauge, Check, X, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface BenchmarkMetric {
  title: string;
  digizierValue: string;
  digizierScore: number;
  genericValue: string;
  genericScore: number;
  unit: string;
  explanation: string;
}

const metrics: BenchmarkMetric[] = [
  {
    title: "Mobile Loading Speed on 4G / Fiber",
    digizierValue: "38ms (Instant)",
    digizierScore: 98,
    genericValue: "1,200ms (Slow)",
    genericScore: 25,
    unit: "Latency",
    explanation: "Static Edge export delivers pages instantly across all Pakistani cities and globally.",
  },
  {
    title: "Recurring Monthly Server Cost",
    digizierValue: "Rs. 0 / Month",
    digizierScore: 100,
    genericValue: "Rs. 15,000 - 45,000 / mo",
    genericScore: 15,
    unit: "Cost",
    explanation: "Zero-load free-tier architecture runs on Cloudflare Edge with 0 hosting bill.",
  },
  {
    title: "WhatsApp & Automated Order Sync",
    digizierValue: "Native Instant Sync",
    digizierScore: 100,
    genericValue: "Unreliable Zapier/Plugins",
    genericScore: 30,
    unit: "Integration",
    explanation: "Direct webhooks to WhatsApp Business API, Google Sheets, and your courier team.",
  },
  {
    title: "Google Core Web Vitals Score",
    digizierValue: "100 / 100 Mobile",
    digizierScore: 100,
    genericValue: "42 - 60 / 100",
    genericScore: 40,
    unit: "Lighthouse",
    explanation: "Zero template bloat, zero plugin conflicts, pristine clean custom DOM.",
  },
];

export default function BenchmarkComparison() {
  const [activeMetric, setActiveMetric] = useState(0);

  const whatsappInquire = getWhatsAppUrl(
    "Hello Nadir! I want to upgrade my slow website to Digizier's high-speed zero-load architecture. Can we talk?"
  );

  return (
    <section id="comparison" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono mb-3">
            <Gauge className="w-3.5 h-3.5" />
            THE DIGIZIER ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Technology Built Around Your Business
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Compare our engineered custom systems against sluggish WordPress templates and expensive recurring builders.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Metric Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                onClick={() => setActiveMetric(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeMetric === idx
                    ? "bg-surface-100/90 border-sky-400/50 shadow-md shadow-sky-500/10"
                    : "glass-panel-subtle border-white/5 hover:border-white/10 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">{m.title}</h4>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {m.unit}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1">{m.explanation}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Comparison */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                    Performance Metric
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {metrics[activeMetric].title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              {/* Digizier Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Digizier Custom Architecture
                  </span>
                  <span className="font-mono font-bold text-emerald-400">
                    {metrics[activeMetric].digizierValue}
                  </span>
                </div>
                <div className="h-3.5 w-full bg-surface-300 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 transition-all duration-700 ease-out"
                    style={{ width: `${metrics[activeMetric].digizierScore}%` }}
                  />
                </div>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  {metrics[activeMetric].explanation}
                </span>
              </div>

              {/* Generic Builder Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                  <span className="font-semibold text-slate-400 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-400" />
                    Standard WordPress / Slow Templates
                  </span>
                  <span className="font-mono font-medium text-slate-400">
                    {metrics[activeMetric].genericValue}
                  </span>
                </div>
                <div className="h-2.5 w-full bg-surface-300 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-slate-600 transition-all duration-700 ease-out"
                    style={{ width: `${metrics[activeMetric].genericScore}%` }}
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Heavy plugins, slow Pakistani mobile loading, and monthly hosting bills.
                </span>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Lifetime Rs. 0 Server Hosting on Cloudflare Edge
                </span>
                <a
                  href={whatsappInquire}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400" />
                  Upgrade on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
