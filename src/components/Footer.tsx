import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Zap, Globe, ExternalLink, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060910] text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Founder */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-orange-500/30">
                <Image
                  src="/logo.png"
                  alt="Digizier Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">DIGIZIER</span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Founded by <span className="text-white font-medium">Nadir Habib</span>. We architect
              high-performance custom web applications, autonomous AI agent pipelines, and automated
              digital systems that empower modern businesses to operate and sell 24/7.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/habib-nadir/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-sky-400 hover:border-sky-400/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                LinkedIn: Nadir Habib
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href="https://www.fiverr.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Fiverr Verified
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              EDGE STATUS: 100% OPERATIONAL • 0ms IDLE CPU
            </div>
          </div>

          {/* Col 2: Services for ICP */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  Custom Web & E-Commerce Stores
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  Autonomous AI Agents & WhatsApp Bots
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  End-to-End n8n Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  Vibe Coding & Rapid Prototyping
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  Performance Marketing & Funnels
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Free-Tier Architectural Standard */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Architecture Standard
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                Zero-Load Static Export
              </li>
              <li className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-soft-violet" />
                0ms Serverless Cold Starts
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                Cloudflare Pages Global CDN
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                Direct Supabase RLS Client
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Digizier. All rights reserved. Built by Nadir Habib.</p>
          <div className="flex items-center gap-6">
            <span>Enterprise Security</span>
            <span>Zero-Load Framework</span>
            <Link href="#estimator" prefetch={false} className="text-slate-400 hover:text-white">
              Instant Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
