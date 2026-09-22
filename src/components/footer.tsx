import Image from "next/image";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { site, whatsappUrl } from "@/config/site";
import { Blocks } from "./editorial";
import { textAt } from "@/content";

export function Footer() {
  return (
    <footer className="footer light">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Dr. Rafael Cole, voltar ao início">
              <Image
                src="/brand/logo-dark.svg"
                alt="Rafael Cole · Cirurgião-Dentista"
                width={245}
                height={53}
              />
            </a>
            <Blocks section={12} from={0} to={3} />
          </div>
          <div>
            <h3>Conheça</h3>
            <a href="#solucoes">Tratamentos</a>
            <a href="#sobre">Dr. Rafael Cole</a>
            <a href="#processo">Como funciona</a>
            <a href="#duvidas">Perguntas frequentes</a>
          </div>
          <div>
            <h3>Contato</h3>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp: {site.displayPhone}
              <ArrowUpRight size={15} />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram: @rafael.cole
              <ArrowUpRight size={15} />
            </a>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              Como chegar
              <ArrowUpRight size={15} />
            </a>
            <p className="footer-specialties">{textAt(12, 4)}</p>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          RAFAEL COLE
        </div>
        <div className="footer-bottom">
          <p>{textAt(12, 6)}</p>
          <a href="#inicio">
            Voltar ao início <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
