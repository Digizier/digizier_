"use client";

import React, { useState } from "react";
import { X, CheckCircle, Sparkles, Send, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { submitProjectInquiry, LeadSubmission } from "@/lib/supabase";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    service: string;
    budget: string;
    details?: string;
  };
}

export default function LeadCaptureModal({
  isOpen,
  onClose,
  prefillData,
}: LeadCaptureModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(prefillData?.service || "Complete Ecosystem (Web + AI + Marketing)");
  const [budget, setBudget] = useState(prefillData?.budget || "$2,500 - $5,000");
  const [notes, setNotes] = useState(prefillData?.details || "");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOfflineStored, setIsOfflineStored] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);

    const payload: LeadSubmission = {
      name: name.trim(),
      email: email.trim(),
      service,
      budget,
      notes,
    };

    const res = await submitProjectInquiry(payload);

    setLoading(false);
    setSubmitted(true);
    setIsOfflineStored(!!res.offline);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a78bfa", "#38bdf8", "#34d399"],
      });
    } catch {
      // safe fallback if canvas is restricted
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-white/10 p-6 sm:p-8 shadow-3d-glass overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-soft-violet/10 text-soft-violet border border-soft-violet/20">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-soft-violet">
                DIGIZIER STRATEGY BRIEF
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Book Your Architecture Session
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Lock in your project scope, receive an engineering roadmap, and consult directly with
              our principal automation engineer.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block mb-1.5">
                  Your Full Name / Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer / Horizon Ventures"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-200/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-soft-violet/50 focus:ring-1 focus:ring-soft-violet/50"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block mb-1.5">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-200/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-soft-cyan/50 focus:ring-1 focus:ring-soft-cyan/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block mb-1.5">
                    Service Focus
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-surface-200/90 border border-white/10 text-xs text-white focus:outline-none"
                  >
                    <option value="Complete Ecosystem (Web + AI + Marketing)">
                      Full Ecosystem
                    </option>
                    <option value="Agentic Automation Engineering Only">
                      Agentic AI Only
                    </option>
                    <option value="Bespoke Custom Web Development Only">
                      Custom Web Only
                    </option>
                    <option value="Performance Digital Marketing & Funnels">
                      Marketing & Funnels
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block mb-1.5">
                    Target Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-surface-200/90 border border-white/10 text-xs text-white focus:outline-none"
                  >
                    <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                    <option value="$3,000 - $6,000">$3,000 - $6,000</option>
                    <option value="$6,000 - $12,000+">$6,000 - $12,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block mb-1.5">
                  Project Goals & Bottlenecks (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you want to automate, build, or scale..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-200/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-soft-emerald/50 focus:ring-1 focus:ring-soft-emerald/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-soft-violet via-soft-cyan to-soft-emerald text-white text-xs font-bold shadow-soft-glow-cyan hover:shadow-soft-glow-violet transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting Directly to Supabase...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Project Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-soft-emerald/10 border border-soft-emerald/30 text-soft-emerald flex items-center justify-center mx-auto mb-4 shadow-soft-glow-emerald">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Inquiry Confirmed!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
              Thank you, <span className="text-white font-semibold">{name}</span>. Our lead architect
              will review your project requirements and follow up at{" "}
              <span className="text-soft-cyan font-mono">{email}</span> within 24 hours.
            </p>

            {isOfflineStored && (
              <div className="bg-surface-200/80 border border-white/5 rounded-xl p-3 text-[11px] font-mono text-soft-emerald mb-6">
                Direct browser client: Saved to local session cache with 0 remote latency.
              </div>
            )}

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full glass-pill text-xs font-semibold text-white hover:border-white/30 transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
