"use client";

import React, { useState } from "react";
import { Bot, Code2, TrendingUp, Zap, ArrowRight, Check, Play, RefreshCw, Terminal } from "lucide-react";

interface WorkflowStep {
  id: string;
  label: string;
  pillar: "Agentic AI" | "Custom Code" | "Marketing";
  action: string;
  latency: string;
  status: "idle" | "running" | "completed";
}

const scenarios = [
  {
    id: "lead-engine",
    title: "Autonomous B2B Lead Enrichment & AI Outreach",
    category: "Agentic + Marketing",
    steps: [
      {
        id: "s1",
        label: "Next.js Custom Form",
        pillar: "Custom Code" as const,
        action: "Client submits contact form (0 serverless cold start)",
        latency: "14ms",
      },
      {
        id: "s2",
        label: "Prospect Researcher Agent",
        pillar: "Agentic AI" as const,
        action: "Extracts company size, tech stack, and LinkedIn profile",
        latency: "420ms",
      },
      {
        id: "s3",
        label: "Conversion Score Model",
        pillar: "Marketing" as const,
        action: "Calculates intent score (94/100) & pushes to CRM",
        latency: "85ms",
      },
      {
        id: "s4",
        label: "Personalized Outreach Agent",
        pillar: "Agentic AI" as const,
        action: "Generates custom video brief and tailored proposal email",
        latency: "310ms",
      },
    ],
    sampleOutput: {
      lead_id: "lead_8832a9",
      intent_score: 94,
      enriched_data: {
        company: "Apex Logistics",
        current_tech: ["WordPress (Slow)", "Manual Email"],
        recommended_system: "Digizier Next.js + Autonomous Dispatcher",
      },
      automated_action: "Personalized proposal sent via SES + Slack alert triggered",
    },
  },
  {
    id: "ecommerce-agent",
    title: "Real-Time E-Commerce Dynamic Pricing & Cart Recovery",
    category: "Web + Automation",
    steps: [
      {
        id: "s1",
        label: "Edge Browser Event",
        pillar: "Custom Code" as const,
        action: "User hovers high-ticket product with exit-intent",
        latency: "8ms",
      },
      {
        id: "s2",
        label: "Inventory Arbitrage Agent",
        pillar: "Agentic AI" as const,
        action: "Checks margin limits and supplier stock levels",
        latency: "180ms",
      },
      {
        id: "s3",
        label: "Dynamic Offer Generator",
        pillar: "Marketing" as const,
        action: "Computes single-use 8% dynamic coupon threshold",
        latency: "45ms",
      },
      {
        id: "s4",
        label: "Micro-Modal Injection",
        pillar: "Custom Code" as const,
        action: "Injects frictionless 1-click checkout state",
        latency: "12ms",
      },
    ],
    sampleOutput: {
      session_id: "sess_4190c",
      cart_value: "$480.00",
      arbitrage_check: "Margin verified (>35%)",
      dynamic_voucher: "SAVE8-AI-991",
      checkout_conversion: "Immediate sale completed in 4.2 seconds",
    },
  },
];

export default function AgenticWorkflowSim() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(3); // default full view

  const scenario = scenarios[activeScenarioIdx];

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStep(0);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < scenario.steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsRunning(false);
          return scenario.steps.length - 1;
        }
      });
    }, 700);
  };

  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-soft-violet/30 bg-soft-violet/10 text-soft-violet text-xs font-mono mb-4">
            <Bot className="w-3.5 h-3.5" />
            AUTONOMOUS ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Live Agentic Workflow Engine
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how our custom-coded web frontends, multi-agent AI loops, and marketing funnels
            collaborate in sub-second pipelines.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="glass-panel rounded-3xl border border-white/10 p-6 lg:p-10 shadow-3d-glass relative">
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {scenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActiveScenarioIdx(idx);
                    setCurrentStep(scenario.steps.length - 1);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeScenarioIdx === idx
                      ? "bg-gradient-to-r from-soft-violet/30 to-soft-cyan/30 text-white border border-soft-violet/50 shadow-soft-glow-violet"
                      : "glass-pill text-slate-300 hover:text-white"
                  }`}
                >
                  {sc.title}
                </button>
              ))}
            </div>

            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-soft-violet via-soft-cyan to-soft-emerald text-white text-xs font-bold hover:shadow-soft-glow-cyan transition-all cursor-pointer disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Executing Agents...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  Simulate Live Flow
                </>
              )}
            </button>
          </div>

          {/* Workflow Steps Grid */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {scenario.steps.map((step, idx) => {
              const isPastOrCurrent = idx <= currentStep;
              const isCurrent = idx === currentStep && isRunning;

              const pillarColor = {
                "Agentic AI": "text-soft-violet border-soft-violet/30 bg-soft-violet/10",
                "Custom Code": "text-soft-cyan border-soft-cyan/30 bg-soft-cyan/10",
                Marketing: "text-soft-emerald border-soft-emerald/30 bg-soft-emerald/10",
              }[step.pillar];

              return (
                <div
                  key={step.id}
                  className={`relative rounded-2xl p-5 border transition-all duration-300 ${
                    isPastOrCurrent
                      ? "bg-surface-100/90 border-white/20 shadow-lg scale-[1.02]"
                      : "bg-surface-300/40 border-white/5 opacity-50"
                  } ${isCurrent ? "ring-2 ring-soft-cyan shadow-soft-glow-cyan" : ""}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${pillarColor}`}
                    >
                      {step.pillar}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{step.latency}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
                    {step.label}
                    {isPastOrCurrent && !isCurrent && (
                      <Check className="w-4 h-4 text-soft-emerald ml-auto" />
                    )}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.action}</p>

                  {idx < scenario.steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Terminal / Live Output Inspector */}
          <div className="rounded-2xl bg-[#05070d] border border-white/10 p-5 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-soft-emerald" />
                <span className="text-slate-200 font-bold">Autonomous Execution Output</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-soft-emerald animate-ping" />
                <span className="text-[11px] text-soft-emerald">REAL-TIME TELEMETRY</span>
              </div>
            </div>

            <pre className="text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {JSON.stringify(scenario.sampleOutput, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
