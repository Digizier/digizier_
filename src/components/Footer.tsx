import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, MessageCircle, ExternalLink, Globe } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/utils";

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl(
    "Hello Nadir! I am contacting you from Digizier website to discuss a project."
  );

  return (
    <footer className="border-t border-white/5 bg-[#060910] text-slate-400 py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-white/5">
          {/* Col 1: Brand & Founder */}
          <div className="space-y-3.5 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-orange-500/40">
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

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Founded by <span className="text-white font-medium">Nadir Habib</span>. We build custom-coded websites, WhatsApp AI chatbots, and performance marketing funnels designed to help businesses operate and sell 24/7.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shadow-emerald-500/20"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>

              <a
                href="https://www.linkedin.com/in/habib-nadir/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-sky-400 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://www.fiverr.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-400 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                Fiverr Verified
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
              Services Offered
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  Custom E-Commerce & Websites
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  WhatsApp AI Agents & Bots
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  n8n Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  Digital Marketing & Ads (Meta & Google)
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false} className="hover:text-white transition-colors">
                  Custom Software & Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Direct WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <Globe className="w-4 h-4 text-sky-400 flex-shrink-0" />
                Available across Pakistan & Worldwide
              </li>
              <li className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                PKR & International Payment Support
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Digizier. Built by Nadir Habib. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#services" prefetch={false} className="hover:text-white">
              Services
            </Link>
            <Link href="#estimator" prefetch={false} className="hover:text-white">
              PKR Calculator
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
