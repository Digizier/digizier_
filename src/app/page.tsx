"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
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
  ArrowRight,
  TrendingUp,
  MessageCircle,
  ExternalLink,
  Laptop,
  CheckCircle,
} from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/utils";

export default function Home() {
  useEffect(() => {
    const initScrollCraft = () => {
      if (typeof window !== "undefined" && (window as any).ScrollCraft) {
        try {
          (window as any).ScrollCraft.mount(document.body);
        } catch (err) {
          console.warn("ScrollCraft initialization notice:", err);
        }
      }
    };

    if (typeof window !== "undefined") {
      if ((window as any).ScrollCraft) {
        initScrollCraft();
      } else {
        window.addEventListener("load", initScrollCraft);
        return () => window.removeEventListener("load", initScrollCraft);
      }
    }
  }, []);

  const generalWhatsAppUrl = getWhatsAppUrl(
    "Hello Nadir! I am contacting you from the Digizier website to discuss a project."
  );

  return (
    <div className="relative min-h-screen bg-[#08090b] text-[#f4f2ef]">
      {/* Scrollcraft Global Progress Bar & Atmosphere Grain */}
      <span data-sc-progress></span>
      <div className="sc-grain" aria-hidden="true"></div>

      {/* Persistent Navigation */}
      <Navigation />

      <main id="top">
        {/* =========================================================================
            ACT 1 · RECOGNITION (Device: scrub)
            Dimensional Hero with background video scrub, contrast scrim, and greet copy
            ========================================================================= */}
        <section
          data-sc-act="scrub"
          data-sc-span="2.4"
          data-sc-dwell="0.32"
          data-sc-drift="#08090b"
          className="relative"
        >
          <div data-sc-stage className="sc-stage">
            <img
              className="sc-stage__poster"
              src="/video-poster.jpg"
              alt="Digizier Web & AI Architecture"
            />
            <video
              data-sc-scrub
              data-sc-src="/digizier-promo.mp4"
              muted
              playsInline
            ></video>
            <div className="sc-scrim sc-scrim--lead" aria-hidden="true"></div>

            {/* Greet Copy: 0 0.78 0 means visible immediately upon page load */}
            <div className="sc-copy sc-copy--lead" data-sc-cue="0 0.78 0">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-orange-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Nadir Habib (Founder) · Web & AI Systems Architect
              </div>

              <h1
                className="sc-display sc-display--xl font-semibold tracking-tight text-white leading-tight"
                data-sc-kinetic="lines"
              >
                Websites, AI agents & marketing that sell.
              </h1>

              <p className="sc-body mt-4 text-zinc-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Custom Next.js web applications, 24/7 WhatsApp AI sales agents, and high-ROAS marketing funnels for Pakistani and global businesses.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-transform active:scale-95 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Chat on WhatsApp ({WHATSAPP_DISPLAY})
                </a>

                <a
                  href="#estimator"
                  className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 text-zinc-200 text-sm font-medium transition-colors backdrop-blur-md"
                >
                  Calculate Cost in PKR ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ACT 2 · TENSION (Device: pin)
            Progressive argument: The cost of generic templates vs. custom architecture
            ========================================================================= */}
        <section
          data-sc-act="pin"
          data-sc-span="3.4"
          data-sc-drift="#101217"
          className="relative"
        >
          <div
            data-sc-stage
            className="sc-stage flex flex-col justify-center items-center px-6 text-center max-w-4xl mx-auto"
          >
            <p
              className="text-xl sm:text-3xl lg:text-4xl text-zinc-400 font-light max-w-3xl leading-relaxed"
              data-sc-cue="0 0.32 0"
            >
              Slow WordPress themes and generic templates lose half your mobile customers before the first product even renders.
            </p>

            <p
              className="text-xl sm:text-3xl lg:text-4xl text-zinc-300 font-light max-w-3xl leading-relaxed mt-6"
              data-sc-cue="0.26 0.60"
            >
              Ad spend pours into broken checkouts, while customer inquiries on WhatsApp sit unanswered for hours.
            </p>

            <p
              className="text-xl sm:text-3xl lg:text-4xl text-zinc-200 font-light max-w-3xl leading-relaxed mt-6"
              data-sc-cue="0.54 0.88"
            >
              You pay heavy recurring monthly server bills for bloated software that collapses under real traffic spikes.
            </p>

            <p
              className="text-2xl sm:text-4xl lg:text-5xl text-orange-400 font-semibold max-w-3xl leading-tight mt-8"
              data-sc-cue="0.82"
            >
              Digizier replaces brittle tools with custom code, instant zero-cost hosting, and autonomous 24/7 AI agents.
            </p>
          </div>
        </section>

        {/* =========================================================================
            ACT 3 · TURN & LIVE DEMONSTRATION (Device: flow + reveal)
            Interactive WhatsApp AI Automation Simulator & Flow
            ========================================================================= */}
        <section
          id="workflow"
          className="sc-section py-20 relative"
          data-sc-act="flow"
          data-sc-drift="#0b0c0f"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6" data-sc-in data-sc-stagger="70">
            <AgenticWorkflowSim />
          </div>
        </section>

        {/* =========================================================================
            ACT 4 · CAPABILITIES (Device: pan)
            Horizontal Rail across 5 core disciplines with 3D tilt
            ========================================================================= */}
        <section
          id="services"
          data-sc-act="pan"
          data-sc-span="3.8"
          data-sc-drift="#0a0b0d"
          className="relative"
        >
          <div data-sc-stage className="sc-stage flex items-center overflow-hidden">
            <div
              className="flex gap-6 sm:gap-8 px-6 sm:px-16 items-center min-w-max"
              data-sc-pan="0.12"
            >
              {/* Rail Lead Header */}
              <div className="w-[280px] sm:w-[360px] flex-shrink-0 sc-stack pr-4 sm:pr-8">
                <span className="sc-label text-orange-400 font-mono text-xs uppercase tracking-wider">
                  Engineered Capabilities
                </span>
                <h2 className="sc-display sc-display--md text-white mt-2 font-semibold">
                  What we build.
                </h2>
                <p className="sc-body mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Every solution is custom coded for revenue, instant mobile loading, and automated 24/7 business operations.
                </p>
                <div className="pt-4">
                  <a
                    href={generalWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Discuss on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Service 1: Custom Websites & E-Commerce */}
              <article
                className="w-[310px] sm:w-[370px] flex-shrink-0 rounded-2xl p-6 sm:p-7 bg-[#101217] border border-white/10 shadow-xl flex flex-col justify-between"
                data-sc-tilt="6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 uppercase">
                      Fast & High Converting
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Custom Websites & E-Commerce
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    High-speed online stores and business web platforms with full custom admin dashboards, Cash on Delivery (COD), EasyPaisa, and JazzCash.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      Comprehensive Admin Panel & Order Tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      Product Catalog, Filters & Coupon Engines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      Instant Page Load (0ms Cold Start on 4G)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                      Local & International Payment Integrations
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl("Hello Nadir! I am interested in building a Custom E-Commerce Website with Digizier.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Inquire on WhatsApp
                </a>
              </article>

              {/* Service 2: AI Agents & WhatsApp Automation */}
              <article
                className="w-[310px] sm:w-[370px] flex-shrink-0 rounded-2xl p-6 sm:p-7 bg-[#101217] border border-white/10 shadow-xl flex flex-col justify-between"
                data-sc-tilt="6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 uppercase">
                      24/7 Sales Engine
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    AI Agents & WhatsApp Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    AI-powered WhatsApp assistants that speak English and Roman Urdu, handle customer inquiries, take orders automatically, and qualify incoming leads around the clock.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      24/7 WhatsApp AI Customer Support Bot
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      Automated Catalog Browsing & Order Booking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      Instant Lead Qualification & Notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      Smooth Human Agent Handoff when needed
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl("Hello Nadir! I am interested in WhatsApp AI Agents & Customer Bots with Digizier.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Inquire on WhatsApp
                </a>
              </article>

              {/* Service 3: Performance Digital Marketing & Ads */}
              <article
                className="w-[310px] sm:w-[370px] flex-shrink-0 rounded-2xl p-6 sm:p-7 bg-[#101217] border border-white/10 shadow-xl flex flex-col justify-between"
                data-sc-tilt="6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 uppercase">
                      High ROAS Funnels
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Performance Digital Marketing
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    High-converting Meta (Facebook & Instagram) and Google ad campaigns designed to reach buyers across Pakistan and internationally with maximum return on ad spend.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      Meta (Facebook & Instagram) Ads Management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      Google Search & Conversion API (CAPI) Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      Direct-to-WhatsApp Click Ads with High ROAS
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      Ad Creatives & Landing Page Optimization
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl("Hello Nadir! I am interested in Performance Digital Marketing & Ads Scaling with Digizier.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Inquire on WhatsApp
                </a>
              </article>

              {/* Service 4: Business Workflow Automation (n8n) */}
              <article
                className="w-[310px] sm:w-[370px] flex-shrink-0 rounded-2xl p-6 sm:p-7 bg-[#101217] border border-white/10 shadow-xl flex flex-col justify-between"
                data-sc-tilt="6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 uppercase">
                      Zero Manual Work
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Workflow Automation (n8n)
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    Connect your website, social media leads, and customer databases into automated pipelines. Eliminate manual data entry and save hours every day.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      n8n & Custom Webhook Automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      Facebook/WhatsApp Lead → Google Sheets Sync
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      Automated Customer Confirmation Messages
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      Order Status Alerts to Packing & Courier Teams
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl("Hello Nadir! I am interested in Business Workflow Automation (n8n) with Digizier.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Inquire on WhatsApp
                </a>
              </article>

              {/* Service 5: Custom Dashboards & Web Software */}
              <article
                className="w-[310px] sm:w-[370px] flex-shrink-0 rounded-2xl p-6 sm:p-7 bg-[#101217] border border-white/10 shadow-xl flex flex-col justify-between"
                data-sc-tilt="6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 uppercase">
                      Tailored Systems
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Custom Portals & Dashboards
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    Bespoke internal software, customer portals, clinic appointment booking, and retail inventory management built to match your exact business workflow.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      Role-Based Access for Staff & Admins
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      Real-Time Sales & Revenue Analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      Appointment & Table Reservation Engines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      Secure PostgreSQL Database Architecture
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppUrl("Hello Nadir! I am interested in Custom Dashboards & Web Software with Digizier.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Inquire on WhatsApp
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================================
            ACT 5 · THE EDGE BENCHMARK (Device: flow)
            Speed, cost, and architecture matrix
            ========================================================================= */}
        <section
          id="comparison"
          className="sc-section py-20 relative"
          data-sc-act="flow"
          data-sc-drift="#090a0d"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6" data-sc-in>
            <BenchmarkComparison />
          </div>
        </section>

        {/* =========================================================================
            ACT 6 · TRANSPARENT PKR PRICING ESTIMATOR (Device: flow)
            PKR calculator with direct WhatsApp scope compilation
            ========================================================================= */}
        <section
          id="estimator"
          className="sc-section py-20 relative"
          data-sc-act="flow"
          data-sc-drift="#0c0d11"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6" data-sc-in>
            <CostEstimator />
          </div>
        </section>

        {/* =========================================================================
            ACT 7 · COMMITMENT CLOSE & FOOTER (Device: pin + pointer)
            Last element on the page, short span, footer inside stage
            ========================================================================= */}
        <section
          id="contact"
          data-sc-act="pin"
          data-sc-span="1.25"
          data-sc-drift="#08090b"
          className="relative"
        >
          <div
            data-sc-stage
            className="sc-stage flex flex-col justify-between"
            data-sc-spotlight
          >
            <div className="my-auto max-w-3xl mx-auto px-6 text-center pt-16">
              <div className="relative w-14 h-14 rounded-full ring-2 ring-orange-500/50 p-1 mx-auto mb-6 shadow-xl shadow-orange-500/15 overflow-hidden">
                <Image
                  src="/logo.png"
                  width={56}
                  height={56}
                  alt="Digizier"
                  className="w-full h-full object-cover rounded-full"
                  unoptimized
                />
              </div>

              <h2
                className="sc-display sc-display--lg text-white font-semibold"
                data-sc-cue="0.06"
                data-sc-kinetic="lines"
              >
                Ready to build your digital system?
              </h2>

              <p
                className="sc-body mt-4 text-zinc-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
                data-sc-cue="0.06"
              >
                Nadir Habib personally discusses your requirements. We engineer websites, 24/7 AI agents, and marketing systems built around your revenue goals.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-sc-magnet="0.26"
                  data-sc-cue="0.06"
                  data-sc-rise="0"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Chat with Nadir on WhatsApp ({WHATSAPP_DISPLAY})
                </a>

                <a
                  className="px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                  href="https://www.fiverr.com/digizier"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-sc-cue="0.06"
                  data-sc-rise="0"
                >
                  Order via Fiverr Verified ↗
                </a>
              </div>
            </div>

            {/* Seamless stage-grounded Footer */}
            <Footer />
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />
    </div>
  );
}
