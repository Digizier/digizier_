"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ExternalLink } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = getWhatsAppUrl(
    "Hi Nadir! I am contacting you from Digizier website to discuss a project."
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#080c14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo with Digizier Branding */}
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-orange-500/40 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Digizier Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                DIGIZIER
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                Websites • AI Agents • Marketing
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            <Link
              href="#services"
              prefetch={false}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="#showcase-video"
              prefetch={false}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Video Showcase
            </Link>
            <Link
              href="#workflow"
              prefetch={false}
              className="hover:text-white transition-colors cursor-pointer"
            >
              AI Automation
            </Link>
            <Link
              href="#comparison"
              prefetch={false}
              className="hover:text-white transition-colors cursor-pointer"
            >
              The Edge
            </Link>
            <Link
              href="#estimator"
              prefetch={false}
              className="hover:text-white transition-colors cursor-pointer"
            >
              PKR Estimator
            </Link>
          </nav>

          {/* Desktop Right CTA: Direct to WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.fiverr.com/digizier"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-3 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Fiverr
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/25 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-400" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl glass-panel border border-white/10 flex flex-col gap-3 text-sm animate-in fade-in zoom-in-95 duration-150">
            <Link
              href="#services"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-slate-200 hover:bg-white/5 font-medium"
            >
              Services (Web, AI & Marketing)
            </Link>
            <Link
              href="#showcase-video"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-slate-200 hover:bg-white/5 font-medium"
            >
              Video Showcase
            </Link>
            <Link
              href="#workflow"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-slate-200 hover:bg-white/5 font-medium"
            >
              AI Automation Flow
            </Link>
            <Link
              href="#comparison"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-slate-200 hover:bg-white/5 font-medium"
            >
              Why Choose Digizier
            </Link>
            <Link
              href="#estimator"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-slate-200 hover:bg-white/5 font-medium"
            >
              Project Cost Estimator (PKR)
            </Link>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-xs font-bold text-white shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Chat on WhatsApp (+92 322 2685688)
              </a>

              <a
                href="https://www.linkedin.com/in/habib-nadir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl glass-pill text-xs font-medium text-sky-400"
              >
                Connect on LinkedIn (Nadir Habib) ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
