"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Sparkles, Clock, Shield } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface CostEstimatorProps {
  onOpenModalWithEstimate: (details: {
    service: string;
    complexity: string;
    addons: string[];
    price: number;
    timeline: string;
  }) => void;
}

const serviceTiers = [
  {
    id: "full-stack",
    title: "Complete Ecosystem (Web + AI + Marketing)",
    basePrice: 2800,
    baseDays: 21,
    desc: "Bespoke custom web app + autonomous AI agent workflows + high-converting marketing funnels.",
  },
  {
    id: "agentic-only",
    title: "Agentic Automation Engineering Only",
    basePrice: 1600,
    baseDays: 14,
    desc: "Autonomous multi-agent pipelines, LangChain/CrewAI integrations, CRM automation.",
  },
  {
    id: "web-only",
    title: "Bespoke Custom Web Development Only",
    basePrice: 1400,
    baseDays: 12,
    desc: "Next.js 15+ App Router, zero-load static export, 100/100 Lighthouse score, custom design.",
  },
  {
    id: "marketing-only",
    title: "Performance Digital Marketing & Funnels",
    basePrice: 1200,
    baseDays: 10,
    desc: "Data-driven Meta & Google Ads campaigns, automated email flows, conversion rate optimization.",
  },
];

const complexityMultipliers = [
  { id: "starter", label: "MVP / Fast Launch", mult: 1.0, daysAdd: 0 },
  { id: "growth", label: "Growth Scale (+30% Scope)", mult: 1.4, daysAdd: 7 },
  { id: "enterprise", label: "Enterprise Bespoke (+80% Scope)", mult: 1.8, daysAdd: 14 },
];

const availableAddons = [
  { id: "3d-canvas", label: "Interactive 3D WebGL / Three.js Visuals", price: 450, days: 3 },
  { id: "supabase-auth", label: "Supabase Database & Secure Auth RLS", price: 350, days: 2 },
  { id: "slack-bot", label: "Real-Time Slack/WhatsApp Agent Dispatcher", price: 500, days: 4 },
  { id: "seo-funnel", label: "Advanced Technical SEO & Schema Automation", price: 300, days: 2 },
];

export default function CostEstimator({ onOpenModalWithEstimate }: CostEstimatorProps) {
  const [selectedService, setSelectedService] = useState(serviceTiers[0].id);
  const [selectedComplexity, setSelectedComplexity] = useState(complexityMultipliers[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["3d-canvas", "supabase-auth"]);

  const currentTier = serviceTiers.find((t) => t.id === selectedService) || serviceTiers[0];
  const currentComp = complexityMultipliers.find((c) => c.id === selectedComplexity) || complexityMultipliers[0];

  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = availableAddons.find((a) => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);

  const addonsDays = selectedAddons.reduce((acc, addonId) => {
    const item = availableAddons.find((a) => a.id === addonId);
    return acc + (item ? item.days : 0);
  }, 0);

  const finalPrice = Math.round(currentTier.basePrice * currentComp.mult + addonsTotal);
  const finalDays = currentTier.baseDays + currentComp.daysAdd + addonsDays;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleProceed = () => {
    onOpenModalWithEstimate({
      service: currentTier.title,
      complexity: currentComp.label,
      addons: selectedAddons.map((id) => availableAddons.find((a) => a.id === id)?.label || id),
      price: finalPrice,
      timeline: `${finalDays} business days`,
    });
  };

  return (
    <section id="estimator" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-soft-emerald/30 bg-soft-emerald/10 text-soft-emerald text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            TRANSPARENT ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive Project Cost Estimator
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Configure your technical scope and get an upfront budget & timeline estimate instantly.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Service */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                1. Select Core Service Track
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceTiers.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedService(tier.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedService === tier.id
                        ? "bg-surface-100 border-soft-violet/50 shadow-soft-glow-violet"
                        : "glass-panel-subtle border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white">{tier.title}</span>
                      {selectedService === tier.id && (
                        <Check className="w-4 h-4 text-soft-violet flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Complexity Multiplier */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {complexityMultipliers.map((comp) => (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => setSelectedComplexity(comp.id)}
                    className={`py-3 px-2 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                      selectedComplexity === comp.id
                        ? "bg-surface-100 border-soft-cyan text-white shadow-soft-glow-cyan"
                        : "glass-panel-subtle border-white/5 text-slate-400 hover:text-white"
                    }`}
                  >
                    {comp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                3. Technical Add-Ons & Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? "bg-surface-100/90 border-soft-emerald/40 text-white"
                          : "glass-panel-subtle border-white/5 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? "bg-soft-emerald border-soft-emerald text-black"
                              : "border-slate-600"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addon.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-soft-emerald">
                        +{formatCurrency(addon.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Summary Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-3d-glass relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-soft-violet uppercase tracking-wider">
                    Instant Calculation
                  </span>
                  <h3 className="text-xl font-bold text-white">Project Scope Summary</h3>
                </div>
                <Sparkles className="w-5 h-5 text-soft-violet" />
              </div>

              {/* Price Calculation */}
              <div className="mb-6 bg-surface-200/80 p-5 rounded-2xl border border-white/5">
                <span className="text-xs text-slate-400 block mb-1">Estimated Investment</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-soft-violet via-soft-cyan to-soft-emerald bg-clip-text text-transparent">
                    {formatCurrency(finalPrice)}
                  </span>
                  <span className="text-xs text-slate-400 font-normal">USD</span>
                </div>
              </div>

              {/* Timeline & Guarantees */}
              <div className="space-y-3 mb-8 text-xs text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-soft-cyan" />
                    Target Timeline
                  </span>
                  <span className="font-mono font-bold text-white">
                    ~{finalDays} Business Days
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Shield className="w-4 h-4 text-soft-emerald" />
                    Hosting & Cloud
                  </span>
                  <span className="font-mono text-soft-emerald font-semibold">
                    $0 / mo (Zero-Load Free Tier)
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleProceed}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-soft-violet via-soft-cyan to-soft-emerald text-white text-sm font-bold shadow-soft-glow-cyan hover:shadow-soft-glow-violet transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                Lock In Estimate & Book Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-slate-500 mt-4">
                No credit card required. Includes 30-day post-launch support and warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
