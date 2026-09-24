import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

export const WHATSAPP_NUMBER = "92322268568";
export const WHATSAPP_DISPLAY = "+92 322 2685688";

export function getWhatsAppUrl(
  message: string = "Hello Nadir! I am interested in Digizier services (Website / AI Agents / Marketing). Can we discuss my project?"
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
