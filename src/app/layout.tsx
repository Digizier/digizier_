import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digizier: Websites, AI Agents & Performance Marketing",
  description:
    "We build custom-coded websites, autonomous AI agents, and high-performance digital systems that help businesses sell, operate, and grow online.",
  keywords: [
    "Digizier",
    "Nadir Habib",
    "AI Agents",
    "WhatsApp Automation",
    "Custom Website Development",
    "E-commerce Pakistan",
    "Digital Marketing",
    "n8n Workflows",
  ],
  authors: [{ name: "Nadir Habib", url: "https://www.linkedin.com/in/habib-nadir/" }],
  creator: "Nadir Habib (Digizier)",
  metadataBase: new URL("https://digizier.com"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" }
    ],
    apple: "/logo.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Digizier: Websites, AI Agents & Performance Marketing",
    description:
      "Helping businesses scale with custom-coded high-velocity web platforms, autonomous AI agents, and automated operations.",
    url: "https://digizier.com",
    siteName: "Digizier",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Digizier Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digizier: Websites, AI Agents & Performance Marketing",
    description:
      "We build custom-coded websites, autonomous AI agents, and high-performance digital systems that help businesses scale.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="stylesheet" href="/scrollcraft.css" />
        <script src="/scrollcraft.js" defer></script>
      </head>
      <body className="bg-[#08090b] text-[#f4f2ef] antialiased min-h-screen selection:bg-orange-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
