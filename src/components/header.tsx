"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { ContactLink } from "./contact-link";

const links = [
  ["#solucoes", "Tratamentos"],
  ["#sobre", "Sobre"],
  ["#depoimentos", "Depoimentos"],
  ["#clinica", "A clínica"],
] as const;

type Pill = { x: number; width: number; visible: boolean; instant: boolean };

export function Header() {
  const header = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState<Pill>({
    x: 0,
    width: 0,
    visible: false,
    instant: true,
  });
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 100);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);
  function hover(event: MouseEvent<HTMLAnchorElement>) {
    const link = event.currentTarget;
    setPill((current) => ({
      x: link.offsetLeft,
      width: link.offsetWidth,
      visible: true,
      // Na primeira passada o destaque surge no link; depois ele desliza entre eles.
      instant: !current.visible,
    }));
  }
  return (
    <header
      ref={header}
      className="header"
      data-scrolled={scrolled || undefined}
      data-open={open || undefined}
    >
      <div className="nav-bar">
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
            preload
          />
        </a>
        <nav
          className="desktop-nav"
          aria-label="Navegação principal"
          onMouseLeave={() => setPill((current) => ({ ...current, visible: false }))}
        >
          <div className="desktop-nav-links">
            <span
              className="nav-pill"
              aria-hidden="true"
              data-visible={pill.visible || undefined}
              data-instant={pill.instant || undefined}
              style={{
                width: pill.width,
                transform: `translate3d(${pill.x}px, -50%, 0)`,
              }}
            />
            {links.map(([href, label]) => (
              <a key={href} href={href} onMouseEnter={hover}>
                {label}
              </a>
            ))}
          </div>
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
          <Menu size={23} strokeWidth={1.5} className="menu-icon-open" />
          <X size={23} strokeWidth={1.5} className="menu-icon-close" />
        </button>
        <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação móvel">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <ContactLink location="mobile-menu" className="mobile-nav-cta">
            Agendar avaliação
          </ContactLink>
        </nav>
      </div>
    </header>
  );
}
