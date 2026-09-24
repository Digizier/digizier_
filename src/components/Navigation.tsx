"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

interface NavigationProps {
  onOpenEstimator: () => void;
}

export default function Navigation({ onOpenEstimator }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#080c14]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with User's Official Branding */}
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform ring-1 ring-orange-500/30">
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
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                DIGIZIER
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                Websites • AI Agents • Automation
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
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
              Overview Video
            </Link>
            <Link
              href="#workflow"
              prefetch={false}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Agentic Flow
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
              Cost Estimator
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.fiverr.com/digizier"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Fiverr Verified
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={onOpenEstimator}
              className="glass-pill px-4 py-2 rounded-full text-xs font-semibold text-slate-200 hover:text-white hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              Instant Quote
            </button>

            <a
              href="#contact"
              className="relative group px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 hover:opacity-95 transition-all shadow-md shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 rounded-2xl glass-panel border border-white/10 flex flex-col gap-3 text-sm">
            <Link
              href="#services"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Services
            </Link>
            <Link
              href="#showcase-video"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Overview Video
            </Link>
            <Link
              href="#workflow"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Agentic Flow
            </Link>
            <Link
              href="#comparison"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              The Edge
            </Link>
            <Link
              href="#estimator"
              prefetch={false}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Cost Estimator
            </Link>
            <div className="pt-3 flex flex-col gap-2 border-t border-white/10">
              <a
                href="https://www.fiverr.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl glass-pill text-xs font-medium text-emerald-400"
              >
                Fiverr Profile ↗
              </a>
              <a
                href="https://www.linkedin.com/in/habib-nadir/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl glass-pill text-xs font-medium text-sky-400"
              >
                LinkedIn: Nadir Habib ↗
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-xs font-bold text-white shadow-lg"
              >
                Instant Project Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
