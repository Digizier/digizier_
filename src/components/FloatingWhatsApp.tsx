"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(
    "Hi Nadir! I'm visiting Digizier.com and would like to consult about a Website / AI Automation / Marketing project."
  );

  return (
    <aside aria-label="WhatsApp Contact Button" className="fixed bottom-5 right-5 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nadir Habib on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline-block tracking-wide">WhatsApp Us</span>
      </a>
    </aside>
  );
}
