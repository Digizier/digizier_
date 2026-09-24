"use client";

import React, { useState } from "react";
import { MessageSquare, Bot, Database, CheckCircle, ArrowRight, Play, RefreshCw, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface WorkflowStep {
  title: string;
  category: string;
  description: string;
  badge: string;
}

const workflows = [
  {
    id: "whatsapp-sales",
    title: "WhatsApp 24/7 AI Sales & Order Assistant",
    tag: "For E-Commerce & Retail",
    steps: [
      {
        title: "1. Customer Message",
        category: "WhatsApp",
        description: "Customer asks about a product, sizes, or Cash on Delivery options.",
        badge: "Instant Inbound",
      },
      {
        title: "2. Digizier AI Agent",
        category: "AI Engine",
        description: "Understands Urdu & English queries, checks live inventory & prices.",
        badge: "0.4s Processing",
      },
      {
        title: "3. Automated Order Booking",
        category: "Database / CRM",
        description: "Captures customer address, phone & phone OTP, saves into Admin Panel.",
        badge: "Auto Sync",
      },
      {
        title: "4. Confirmation & Alert",
        category: "Fulfillment",
        description: "Sends order tracking link to buyer & notifies your dispatch team.",
        badge: "Zero Human Delay",
      },
    ],
    sampleOutput: {
      inbound_channel: "WhatsApp Business (+92)",
      customer_intent: "Order Placement (COD)",
      ai_response_time: "480ms",
      recorded_details: {
        city: "Karachi / Lahore / Islamabad",
        product_sku: "D-894",
        payment_method: "Cash on Delivery",
      },
      result: "Order #8421 saved to Admin DB & dispatch slip generated automatically.",
    },
  },
  {
    id: "lead-funnel",
    title: "Meta / Google Ads Lead Qualification to WhatsApp",
    tag: "For Services, Clinics & Real Estate",
    steps: [
      {
        title: "1. Ad Click / Form",
        category: "Digital Ads",
        description: "User submits interest on Facebook/Instagram ad or Google search.",
        badge: "Lead Generated",
      },
      {
        title: "2. Instant WhatsApp Ping",
        category: "Automation",
        description: "System immediately messages prospect on WhatsApp within 30 seconds.",
        badge: "98% Open Rate",
      },
      {
        title: "3. AI Qualification",
        category: "AI Agent",
        description: "Asks budget, service requirement, and preferred consultation date.",
        badge: "Smart Triage",
      },
      {
        title: "4. Meeting Booked",
        category: "Calendar / CRM",
        description: "Locks appointment into Google Calendar and sends reminder alerts.",
        badge: "High Conversion",
      },
    ],
    sampleOutput: {
      source: "Meta Ads (High-Ticket Campaign)",
      speed_to_lead: "18 seconds",
      lead_score: "Hot Prospect (95/100)",
      appointment_status: "Scheduled for Tomorrow 4:00 PM PKT",
      crm_action: "Pushed to WhatsApp + Google Sheets with instant notification",
    },
  },
];

export default function AgenticWorkflowSim() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(3);
  const [isSimulating, setIsSimulating] = useState(false);

  const currentWf = workflows[activeIdx];

  const handleSimulate = () => {
    setIsSimulating(true);
    setActiveStep(0);

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < currentWf.steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsSimulating(false);
          return currentWf.steps.length - 1;
        }
      });
    }, 600);
  };

  const whatsappConsultUrl = getWhatsAppUrl(
    `Hello Nadir! I saw your ${currentWf.title} workflow on Digizier. Can we set up a similar automation for my business?`
  );

  return (
    <section id="workflow" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-soft-violet/30 bg-soft-violet/10 text-soft-violet text-xs font-mono mb-3">
            <Bot className="w-3.5 h-3.5" />
            AUTOMATE THE WORK. FOCUS ON GROWTH.
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            How Our AI & WhatsApp Systems Work
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We connect AI agents, business tools, and WhatsApp pipelines so customer inquiries are handled instantly and orders are processed automatically.
          </p>
        </div>

        {/* Workflow Box */}
        <div className="glass-panel rounded-3xl border border-white/10 p-5 sm:p-8 shadow-2xl relative">
          {/* Workflow Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {workflows.map((wf, idx) => (
                <button
                  key={wf.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setActiveStep(wf.steps.length - 1);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeIdx === idx
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "glass-pill text-slate-400 hover:text-white"
                  }`}
                >
                  {wf.title}
                </button>
              ))}
            </div>

            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Running Flow...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Simulate Live Flow
                </>
              )}
            </button>
          </div>

          {/* 4 Steps Container */}
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {currentWf.steps.map((st, idx) => {
              const isDone = idx <= activeStep;
              const isCurrent = idx === activeStep && isSimulating;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between ${
                    isDone
                      ? "bg-surface-100/90 border-white/20 shadow-md"
                      : "bg-surface-300/30 border-white/5 opacity-50"
                  } ${isCurrent ? "ring-2 ring-emerald-400" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        {st.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                        {st.badge}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center justify-between">
                      {st.title}
                      {isDone && !isCurrent && (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      )}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Telemetry Output Box */}
          <div className="rounded-2xl bg-[#05070d] border border-white/10 p-4 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-slate-400">
              <span className="text-slate-200 text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Automation Telemetry
              </span>
              <span className="text-[10px] text-emerald-400">ACTIVE PIPELINE</span>
            </div>
            <pre className="text-slate-300 text-[11px] overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {JSON.stringify(currentWf.sampleOutput, null, 2)}
            </pre>
          </div>

          {/* Quick Consultation Callout */}
          <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-400 text-center sm:text-left">
              Want a custom WhatsApp AI assistant for your Pakistani or international store?
            </span>
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
              Build This For My Business on WhatsApp
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
