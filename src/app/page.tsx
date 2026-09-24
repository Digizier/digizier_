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
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import {
  Code2,
  Bot,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Laptop,
} from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/utils";

export default function Home() {
  const generalWhatsAppUrl = getWhatsAppUrl(
    "Hello Nadir! I'm interested in Digizier services (Website / WhatsApp AI / Digital Marketing). Can we discuss my project?"
  );

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden ambient-glow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left z-10">
              {/* Founder & Verified Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-orange-500/30 text-xs font-mono text-slate-200 shadow-sm">
                <div className="relative w-5 h-5 rounded-full overflow-hidden ring-1 ring-orange-500/50 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Digizier"
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <span>Nadir Habib • AI & Web Systems Architect</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                We Build{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  Websites, AI Agents & Marketing
                </span>{" "}
                That Grow Your Business.
              </h1>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Digizier helps Pakistani and international brands build lightning-fast e-commerce stores, 24/7 WhatsApp AI chatbots, and high-ROI digital marketing funnels that operate around the clock.
              </p>

              {/* Action Buttons: Direct to WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Chat on WhatsApp ({WHATSAPP_DISPLAY})
                </a>

                <a
                  href="#estimator"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Calculate Cost in PKR ↓
                </a>
              </div>

              {/* Trust Metric Badges */}
              <div className="pt-4 grid grid-cols-3 gap-2.5 border-t border-white/10 max-w-md mx-auto lg:mx-0 text-left">
                <div className="p-2.5 rounded-xl bg-surface-200/50 border border-white/5">
                  <span className="text-xs font-mono text-emerald-400 block font-bold">100 / 100</span>
                  <span className="text-[10px] text-slate-400">Mobile Speed</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-200/50 border border-white/5">
                  <span className="text-xs font-mono text-sky-400 block font-bold">Rs. 0 / mo</span>
                  <span className="text-[10px] text-slate-400">Server Hosting</span>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-200/50 border border-white/5">
                  <span className="text-xs font-mono text-orange-400 block font-bold">24 / 7</span>
                  <span className="text-[10px] text-slate-400">WhatsApp AI Uptime</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive WebGL Hero Canvas */}
            <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] flex items-center justify-center">
              <div className="w-full h-full rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative">
                {/* 3D Canvas */}
                <Hero3DCanvas />

                {/* Overlaid Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-semibold">AI Systems Active</span>
                  </div>
                  <span className="text-orange-400">WebGL • 0% CPU Idle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic 3D Video Showcase */}
      <VideoShowcase3D />

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-soft-violet/30 bg-soft-violet/10 text-soft-violet text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              SOLUTIONS THAT GROW BUSINESSES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Comprehensive Digital Services
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              From custom websites and automated WhatsApp bots to ROI-driven digital marketing, we create practical solutions designed around your revenue goals.
            </p>
          </div>

          {/* Responsive 3-Column Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1: Custom Websites & E-Commerce */}
            <ServiceCard3D
              title="Custom Websites & E-Commerce"
              badge="Fast & High Converting"
              accentColor="cyan"
              icon={Code2}
              description="Fast, mobile-responsive online stores and business websites with full custom admin dashboards, Cash on Delivery (COD), EasyPaisa, JazzCash, and bank transfer support."
              features={[
                "Comprehensive Admin Panel & Order Tracking",
                "Product Catalog, Filters & Coupon Engines",
                "Instant Page Load (0ms Cold Start on 4G)",
                "Local & International Payment Integrations",
              ]}
              techTags={["Next.js", "E-Commerce", "Admin Panel", "COD & Gateways", "SEO"]}
            />

            {/* Service 2: AI Agents & WhatsApp Automation */}
            <ServiceCard3D
              title="AI Agents & WhatsApp Automation"
              badge="24/7 Customer Sales"
              accentColor="violet"
              icon={Bot}
              description="AI-powered WhatsApp assistants that speak English and Roman Urdu, handle customer questions, take orders automatically, and qualify incoming leads 24/7."
              features={[
                "24/7 WhatsApp AI Customer Support Bot",
                "Automated Catalog Browsing & Order Booking",
                "Instant Lead Qualification & Notifications",
                "Smooth Human Agent Handoff when needed",
              ]}
              techTags={["WhatsApp API", "AI Chatbots", "LangChain", "Urdu/English", "CRM"]}
            />

            {/* Service 3: Performance Digital Marketing & Ads */}
            <ServiceCard3D
              title="Performance Digital Marketing & Ads"
              badge="ROI Driven Growth"
              accentColor="emerald"
              icon={TrendingUp}
              description="High-converting Meta (Facebook & Instagram) and Google ad campaigns designed to reach buyers across Pakistan and overseas with maximum return on ad spend."
              features={[
                "Meta (Facebook & Instagram) Ads Management",
                "Google Search & Conversion API (CAPI) Setup",
                "Direct-to-WhatsApp Click Ads with High ROAS",
                "Ad Creatives & Landing Page Optimization",
              ]}
              techTags={["Meta Ads", "Google Ads", "WhatsApp Ads", "ROAS Scaling", "CRO"]}
            />

            {/* Service 4: Business Workflow Automation */}
            <ServiceCard3D
              title="Business Workflow Automation (n8n)"
              badge="Zero Manual Work"
              accentColor="orange"
              icon={Cpu}
              description="Connect your website, social media leads, and customer databases into automated pipelines. Eliminate manual data entry and save hours every day."
              features={[
                "n8n & Custom Webhook Automations",
                "Facebook/WhatsApp Lead → Google Sheets Sync",
                "Automated Customer Confirmation Messages",
                "Order Status Alerts to Packing & Courier Teams",
              ]}
              techTags={["n8n Workflows", "Google Sheets", "Webhooks", "CRM Sync", "APIs"]}
            />

            {/* Service 5: Custom Dashboards & Web Software */}
            <ServiceCard3D
              title="Custom Dashboards & Business Tools"
              badge="Tailored Systems"
              accentColor="cyan"
              icon={Laptop}
              description="Bespoke internal software, customer portals, clinic appointment booking, and retail inventory management built to match your exact business workflow."
              features={[
                "Role-Based Access for Staff & Admins",
                "Real-Time Sales & Revenue Analytics",
                "Appointment & Table Reservation Engines",
                "Secure PostgreSQL Database Architecture",
              ]}
              techTags={["SaaS Systems", "PostgreSQL", "Supabase", "Analytics", "Portals"]}
            />

            {/* Service 6: Custom Requirements Card */}
            <div className="rounded-3xl p-6 sm:p-7 glass-panel border border-orange-500/25 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 p-2.5 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
                  Custom Strategy
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-3 mb-2">
                  Have a Unique Business Need?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Whether you run a fashion brand, pharmacy, clinic, restaurant, or real-estate agency, we architect a tailored digital solution for your workflow.
                </p>
              </div>

              <div className="pt-5 border-t border-white/5">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  Discuss Custom Plan on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Automation Flow */}
      <AgenticWorkflowSim />

      {/* Performance Benchmark Matrix */}
      <BenchmarkComparison />

      {/* PKR Cost Estimator with direct WhatsApp submission */}
      <CostEstimator />

      {/* Direct Strategy Brief / WhatsApp CTA Section */}
      <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl glass-panel border border-white/10 p-7 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 p-[1px] mx-auto mb-5 shadow-lg shadow-orange-500/20">
              <div className="w-full h-full bg-[#080c14] rounded-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Digizier"
                  width={36}
                  height={36}
                  className="w-8 h-8 object-cover rounded-full"
                  unoptimized
                />
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Ready to Build Your Next Digital Solution?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-7">
              Tell us about your business goals. Nadir Habib will personally discuss your project and help you plan a website, AI agent, or marketing system that fits your budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Message Nadir on WhatsApp ({WHATSAPP_DISPLAY})
              </a>

              <a
                href="https://www.fiverr.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Order via Fiverr
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
