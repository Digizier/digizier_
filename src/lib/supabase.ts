import { createClient } from "@supabase/supabase-js";

/**
 * Bulletproof Environment & API Sanitization
 * Compliant with Universal Cloudflare + Vercel Zero-Load Runtime Contract
 */
export const isValidHttpUrl = (url?: string): boolean => {
  if (!url) return false;
  const cleaned = url.trim().replace(/^["']|["']$/g, "");
  return cleaned.startsWith("http://") || cleaned.startsWith("https://");
};

export const getValidApiUrl = (
  envUrl?: string,
  fallbackUrl: string = "https://placeholder-zero-load.supabase.co"
): string => {
  if (isValidHttpUrl(envUrl)) {
    return envUrl!.trim().replace(/^["']|["']$/g, "");
  }
  return fallbackUrl;
};

const supabaseUrl = getValidApiUrl(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  "https://placeholder-zero-load.supabase.co"
);

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim().replace(/^["']|["']$/g, "") ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.placeholder-zero-load-key";

// Browser-persistent singleton client instance to prevent connection leaks
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/**
 * Lead capture submission directly from browser with offline localStorage fallback
 */
export interface LeadSubmission {
  name: string;
  email: string;
  service: string;
  budget: string;
  notes?: string;
  created_at?: string;
}

export async function submitProjectInquiry(lead: LeadSubmission): Promise<{ success: boolean; offline?: boolean; error?: string }> {
  try {
    if (isValidHttpUrl(process.env.NEXT_PUBLIC_SUPABASE_URL)) {
      const { error } = await supabase.from("inquiries").insert([
        {
          name: lead.name,
          email: lead.email,
          service: lead.service,
          budget: lead.budget,
          notes: lead.notes || "",
          created_at: new Date().toISOString(),
        },
      ]);
      if (error) {
        console.warn("Supabase remote error, falling back to local storage:", error.message);
        saveInquiryLocally(lead);
        return { success: true, offline: true };
      }
      return { success: true };
    } else {
      // Local demo mode: save to client localStorage with 0 remote network overhead
      saveInquiryLocally(lead);
      return { success: true, offline: true };
    }
  } catch (err: any) {
    console.error("Submission failed, stored offline:", err);
    saveInquiryLocally(lead);
    return { success: true, offline: true };
  }
}

function saveInquiryLocally(lead: LeadSubmission) {
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("digizier_inquiries") || "[]");
      existing.push({ ...lead, timestamp: new Date().toISOString() });
      localStorage.setItem("digizier_inquiries", JSON.stringify(existing));
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }
}
