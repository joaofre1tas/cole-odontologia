"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ContactLink } from "./contact-link";

const links = [
  ["#solucoes", "Tratamentos"],
  ["#sobre", "Dr. Rafael"],
  ["#clinica", "A clínica"],
] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="header-inner container">
        <a
          className="logo"
          href="#inicio"
          aria-label="Dr. Rafael Cole, início"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-light.svg"
            width={226}
            height={49}
            alt="Rafael Cole · Cirurgião-Dentista"
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <ContactLink location="header" className="button-header">
          Agendar avaliação
        </ContactLink>
        <button
          id="menu-toggle"
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Navegação móvel"
        hidden={!open}
      >
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#duvidas" onClick={() => setOpen(false)}>
          Perguntas frequentes
        </a>
      </nav>
    </header>
  );
}
