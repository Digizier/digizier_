"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import VideoShowcase3D from "@/components/VideoShowcase3D";
import ServiceCard3D from "@/components/ServiceCard3D";
import AgenticWorkflowSim from "@/components/AgenticWorkflowSim";
import BenchmarkComparison from "@/components/BenchmarkComparison";
import CostEstimator from "@/components/CostEstimator";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import Footer from "@/components/Footer";
import {
  Code2,
  Bot,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<{
    service: string;
    budget: string;
    details?: string;
  }>({
    service: "Complete Ecosystem (Web + AI + Marketing)",
    budget: "$3,000 - $6,000",
  });

  const handleOpenEstimatorModal = (details?: {
    service: string;
    complexity: string;
    addons: string[];
    price: number;
    timeline: string;
  }) => {
    if (details) {
      setModalPrefill({
        service: details.service,
        budget: `$${details.price.toLocaleString()} USD (~${details.timeline})`,
        details: `Selected Scope: ${details.complexity}. Add-ons: ${details.addons.join(", ")}.`,
      });
    }
    setModalOpen(true);
  };

  const handleSelectServiceCard = (serviceTitle: string) => {
    setModalPrefill({
      service: serviceTitle,
      budget: "$2,500 - $5,000",
      details: `Inquiring about ${serviceTitle} architecture and deployment.`,
    });
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <Navigation onOpenEstimator={() => setModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 lg:pb-32 overflow-hidden ambient-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
              {/* Founder & Verified Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-orange-500/30 text-xs font-mono text-slate-200 shadow-soft-glow-violet">
                <div className="relative w-5 h-5 rounded-full overflow-hidden ring-1 ring-orange-500/50">
                  <Image
                    src="/logo.png"
                    alt="Digizier"
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <span>Nadir Habib • Founder & Automation Architect</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                We Engineer{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  Websites & AI Agents
                </span>{" "}
                That Sell & Operate 24/7.
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Digizier builds custom-coded web platforms, autonomous AI agent pipelines, and
                automated business systems that scale your revenue with zero sluggish templates and
                zero unnecessary infrastructure cost.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 fill-white" />
                  Request Project Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#showcase-video"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Watch Cinematic Video
                </a>
              </div>

              {/* Trust Metric Pills */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="p-3 rounded-xl bg-surface-200/50 border border-white/5">
                  <span className="text-xs font-mono text-emerald-400 block font-bold">100 / 100</span>
                  <span className="text-[11px] text-slate-400">Core Web Vitals</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/50 border border-white/5">
                  <span className="text-xs font-mono text-soft-cyan block font-bold">0ms CPU</span>
                  <span className="text-[11px] text-slate-400">Zero-Load Static</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/50 border border-white/5">
                  <span className="text-xs font-mono text-orange-400 block font-bold">24 / 7</span>
                  <span className="text-[11px] text-slate-400">AI Agent Uptime</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive WebGL Hero Canvas */}
            <div className="lg:col-span-5 relative w-full h-[460px] sm:h-[540px] flex items-center justify-center">
              <div className="w-full h-full rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-3d-glass relative">
                {/* 3D Canvas */}
                <Hero3DCanvas />

                {/* Overlaid Floating Glass Stats Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-semibold">Autonomous Core Online</span>
                  </div>
                  <span className="text-orange-400">WebGL • Three.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic 3D Video Showcase */}
      <VideoShowcase3D />

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-soft-violet/30 bg-soft-violet/10 text-soft-violet text-xs font-mono mb-4">
              <Layers className="w-3.5 h-3.5" />
              SOLUTIONS FOR HIGH-GROWTH BUSINESSES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Architected for Real Business Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Every system is engineered from clean code and intelligent automation to eliminate
              manual friction, accelerate sales, and dominate your niche.
            </p>
          </div>

          {/* 3D Interactive Spatial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <ServiceCard3D
              title="Custom-Coded Web & E-Commerce"
              badge="High Performance"
              accentColor="cyan"
              icon={Code2}
              description="Bespoke web applications, online stores with custom admin dashboards, zero template bloat, sub-second load speeds, and seamless payment checkout."
              features={[
                "Comprehensive Admin Panel & Order Tracking",
                "Product Catalog, Filters & Coupon Engines",
                "0ms Serverless Cold Starts on Edge CDN",
                "Mobile-First Responsive Engineering",
              ]}
              techTags={["Next.js", "Supabase", "Tailwind CSS", "TypeScript", "Edge CDN"]}
              onSelect={() => handleSelectServiceCard("Custom-Coded Web & E-Commerce Development")}
            />

            {/* Service 2 */}
            <ServiceCard3D
              title="Autonomous AI Agents & WhatsApp Bots"
              badge="24/7 Operations"
              accentColor="violet"
              icon={Bot}
              description="Custom autonomous AI agents that handle customer inquiries, qualify leads, schedule appointments, and close transactions around the clock."
              features={[
                "Intelligent WhatsApp & Website Chat Agents",
                "Voice AI & Interactive Phone Agents",
                "RAG Knowledge Bases & CRM Memory",
                "Autonomous Multi-Agent Workflows",
              ]}
              techTags={["LangChain", "OpenAI", "Gemini", "WhatsApp Cloud API", "RAG"]}
              onSelect={() => handleSelectServiceCard("Autonomous AI Agents & WhatsApp Ecosystems")}
            />

            {/* Service 3 */}
            <ServiceCard3D
              title="Workflow & Business Automation"
              badge="Zero Manual Work"
              accentColor="emerald"
              icon={Cpu}
              description="Connect your disparate business tools into a seamless, unified pipeline. Turn repetitive human tasks into automated sub-second background flows."
              features={[
                "n8n & Custom API Automation Pipelines",
                "Lead Capture → AI Enrichment → CRM Dispatch",
                "Automated Invoicing & Fulfillment Alerts",
                "Database Sync with Real-Time Webhooks",
              ]}
              techTags={["n8n", "Webhooks", "PostgreSQL", "Google APIs", "CRM Sync"]}
              onSelect={() => handleSelectServiceCard("Workflow & Business Automation")}
            />

            {/* Service 4 */}
            <ServiceCard3D
              title="Vibe Coding & Rapid Engineering"
              badge="5x Velocity"
              accentColor="violet"
              icon={Sparkles}
              description="Using modern AI-augmented senior engineering to build production-grade web applications, internal tools, and MVPs in record time without compromising code quality."
              features={[
                "Production-Ready Architecture from Day 1",
                "Bespoke UI/UX Without Generic Templates",
                "Bulletproof Database RLS & Security",
                "Rapid Turnaround for Fast-Moving Founders",
              ]}
              techTags={["Vibe Coding", "Rapid MVP", "Clean Code", "Modern Stack"]}
              onSelect={() => handleSelectServiceCard("Vibe Coding & Rapid Prototyping")}
            />

            {/* Service 5 */}
            <ServiceCard3D
              title="Performance Marketing & Funnels"
              badge="ROI Driven"
              accentColor="emerald"
              icon={TrendingUp}
              description="High-converting landing pages paired with data-driven Meta and Google advertising funnels, conversion-rate optimization (CRO), and automated retargeting."
              features={[
                "Custom High-Converting Sales Funnels",
                "Automated Lead Triage & WhatsApp Follow-ups",
                "Conversion API (CAPI) & Pixel Optimization",
                "End-to-End Attribution & Sales Tracking",
              ]}
              techTags={["Meta Ads", "Google Ads", "Funnel CRO", "Retargeting"]}
              onSelect={() => handleSelectServiceCard("Performance Marketing & Funnel Optimization")}
            />

            {/* Service 6 / Custom Request */}
            <div
              onClick={() => setModalOpen(true)}
              className="rounded-3xl p-8 glass-panel border border-orange-500/20 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 p-3 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8" />
                </div>
                <span className="text-[11px] font-mono tracking-wide uppercase px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
                  Custom Architecture
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-4 mb-3">
                  Have a Unique Requirement?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Whether you need a custom multi-tenant SaaS, healthcare clinic booking system, or
                  specialized retail POS, our team will architect a tailored solution.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                <span>Book a Technical Discovery Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Agentic Workflow Simulation */}
      <AgenticWorkflowSim />

      {/* Performance Benchmark Matrix */}
      <BenchmarkComparison />

      {/* Transparent Project Cost Estimator */}
      <CostEstimator onOpenModalWithEstimate={handleOpenEstimatorModal} />

      {/* Direct Strategy Brief / Contact CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden shadow-3d-glass">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 p-[1px] mx-auto mb-6 shadow-xl shadow-orange-500/20">
              <div className="w-full h-full bg-[#080c14] rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Digizier"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-cover rounded-full"
                  unoptimized
                />
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to Upgrade Your Business Systems?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Discuss your project directly with Nadir Habib. Get an upfront engineering roadmap,
              verified architecture, and rapid deployment schedule.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                Schedule Strategy Session
              </button>

              <a
                href="https://www.linkedin.com/in/habib-nadir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>

              <a
                href="https://www.fiverr.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Order on Fiverr
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Lead Capture & Strategy Booking Modal */}
      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefillData={modalPrefill}
      />
    </div>
  );
}
