"use client";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl, type ContactContext } from "@/config/site";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function ContactLink({
  children,
  context = "general",
  location,
  className = "",
  arrow = true,
  label,
}: {
  children: ReactNode;
  context?: ContactContext;
  location: string;
  className?: string;
  arrow?: boolean;
  label?: string;
}) {
  function track() {
    const detail = {
      event: "whatsapp_click",
      cta_location: location,
      treatment: context,
    };
    window.dispatchEvent(new CustomEvent("cole:contact", { detail }));
    if (window.gtag)
      window.gtag("event", "whatsapp_click", {
        cta_location: location,
        treatment: context,
      });
    else window.dataLayer?.push(detail);
    window.fbq?.("trackCustom", "WhatsAppClick", {
      location,
      treatment: context,
    });
  }
  return (
    <a
      href={whatsappUrl(context)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      className={`button ${className}`}
      aria-label={label}
      data-cta={location}
    >
      <span>{children}</span>
      {arrow && <ArrowUpRight size={19} strokeWidth={1.5} aria-hidden="true" />}
    </a>
  );
}
