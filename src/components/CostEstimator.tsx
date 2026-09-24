"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Sparkles, Clock, Shield, MessageCircle } from "lucide-react";
import { formatPKR, getWhatsAppUrl } from "@/lib/utils";

const serviceTiers = [
  {
    id: "full-stack",
    title: "Complete Ecosystem (Web + AI + Marketing)",
    basePrice: 165000,
    baseDays: 18,
    desc: "Custom high-speed website, WhatsApp AI chatbot, automated n8n CRM flows, and Meta/Google ad funnels.",
  },
  {
    id: "ecommerce-web",
    title: "Custom E-Commerce / Business Website",
    basePrice: 65000,
    baseDays: 10,
    desc: "Complete storefront, custom admin panel, COD/Bank transfer checkout, 0ms load lag, SEO optimized.",
  },
  {
    id: "ai-whatsapp",
    title: "AI Agents & WhatsApp Business Automation",
    basePrice: 48000,
    baseDays: 7,
    desc: "24/7 intelligent customer support bot in Urdu & English, auto-qualification, catalog sharing, and lead alerts.",
  },
  {
    id: "marketing-funnels",
    title: "Performance Digital Marketing & Ads Scaling",
    basePrice: 38000,
    baseDays: 7,
    desc: "High-converting Meta (FB & Instagram) & Google ad campaigns, targeted Pakistani/global audience, and CAPI setup.",
  },
];

const complexityMultipliers = [
  { id: "starter", label: "Starter / MVP", mult: 1.0, daysAdd: 0 },
  { id: "growth", label: "Growth (+35% Scope)", mult: 1.35, daysAdd: 5 },
  { id: "enterprise", label: "Enterprise Custom", mult: 1.7, daysAdd: 10 },
];

const availableAddons = [
  { id: "cod-payments", label: "COD, EasyPaisa, JazzCash & Bank Checkout", price: 18000, days: 2 },
  { id: "sheets-crm", label: "Automated Google Sheets & CRM Lead Sync", price: 15000, days: 2 },
  { id: "3d-visuals", label: "3D Interactive WebGL Visuals & Animations", price: 25000, days: 3 },
  { id: "speed-seo", label: "Pakistani Local SEO & 100/100 Speed Boost", price: 18000, days: 2 },
];

export default function CostEstimator() {
  const [selectedService, setSelectedService] = useState(serviceTiers[0].id);
  const [selectedComplexity, setSelectedComplexity] = useState(complexityMultipliers[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["cod-payments", "sheets-crm"]);

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

  const selectedAddonLabels = selectedAddons
    .map((id) => availableAddons.find((a) => a.id === id)?.label)
    .filter(Boolean)
    .join(", ");

  const whatsappMessage = `*Digizier Project Estimate Request (PKR)*
-----------------------------------
*Service:* ${currentTier.title}
*Scope:* ${currentComp.label}
*Add-ons:* ${selectedAddonLabels || "None"}
*Estimated Budget:* ${formatPKR(finalPrice)}
*Estimated Timeline:* ~${finalDays} Business Days
-----------------------------------
Hello Nadir, I generated this project estimate on your website and would like to proceed with consultation.`;

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section id="estimator" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-3">
            <Calculator className="w-3.5 h-3.5" />
            TRANSPARENT PKR ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Calculate Your Project Scope
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tailored for Pakistani businesses and international brands. Select your requirements to get an upfront PKR estimate and book directly on WhatsApp.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Select Service */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                1. Select Core Service Track
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceTiers.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedService(tier.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedService === tier.id
                        ? "bg-surface-100 border-orange-500/60 shadow-lg shadow-orange-500/10"
                        : "glass-panel-subtle border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white">{tier.title}</span>
                      {selectedService === tier.id && (
                        <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Complexity Multiplier */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {complexityMultipliers.map((comp) => (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => setSelectedComplexity(comp.id)}
                    className={`py-2.5 px-2 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                      selectedComplexity === comp.id
                        ? "bg-surface-100 border-emerald-400 text-white shadow-md shadow-emerald-500/10"
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
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                3. Business Add-Ons (Pakistan & Global Ready)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? "bg-surface-100/90 border-emerald-500/50 text-white"
                          : "glass-panel-subtle border-white/5 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : "border-slate-600"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addon.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">
                        +{formatPKR(addon.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Summary Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider">
                    Instant Valuation (PKR)
                  </span>
                  <h3 className="text-lg font-bold text-white">Project Scope Summary</h3>
                </div>
                <Sparkles className="w-5 h-5 text-orange-400" />
              </div>

              {/* Price Display in PKR */}
              <div className="mb-5 bg-surface-200/90 p-5 rounded-2xl border border-white/5">
                <span className="text-xs text-slate-400 block mb-1">Estimated Investment</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                    {formatPKR(finalPrice)}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Approximate estimate • Exact quote confirmed via WhatsApp
                </span>
              </div>

              {/* Timeline & Assurances */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-sky-400" />
                    Target Timeline
                  </span>
                  <span className="font-mono font-bold text-white">
                    ~{finalDays} Working Days
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    Infrastructure
                  </span>
                  <span className="font-mono text-emerald-400 font-semibold">
                    Rs. 0 / mo (Zero-Load Free Tier)
                  </span>
                </div>
              </div>

              {/* Action Button: Direct to WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Discuss This Scope on WhatsApp
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <p className="text-[10px] text-center text-slate-400 mt-3">
                Direct chat with Nadir Habib • Fast reply within a few hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
