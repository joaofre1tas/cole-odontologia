"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { ContactLink } from "./contact-link";

export function FloatingContact() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  if (!visible) return null;
  return (
    <ContactLink
      location="floating"
      className="floating-contact"
      arrow={false}
      label="Agendar avaliação pelo WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={1.5} />
      <span>Agendar avaliação</span>
    </ContactLink>
  );
}
