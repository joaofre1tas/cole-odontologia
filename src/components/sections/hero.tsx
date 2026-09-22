import { ArrowDown, MapPin } from "lucide-react";
import { textAt } from "@/content";
import { ContactLink } from "../contact-link";
import { Eyebrow, Rich } from "../editorial";
import { HeroMedia } from "../hero-media";

export function Hero() {
  return (
    <section className="hero dark" id="inicio" aria-labelledby="hero-heading">
      <HeroMedia />
      <div className="hero-shade" />
      <div className="container hero-content">
        <Eyebrow>
          Cole Odontologia <span className="eyebrow-divider" /> Santa Cruz do
          Sul/RS
        </Eyebrow>
        <h1 id="hero-heading">
          Seu sorriso pode ser tão <span>único</span> quanto a sua identidade.
        </h1>
        <p className="hero-intro">{textAt(0, 2)}</p>
        <ContactLink location="hero">{textAt(0, 6)}</ContactLink>
        <p className="hero-note">{textAt(0, 7)}</p>
      </div>
      <div className="hero-bottom container">
        <a className="discover" href="#solucoes">
          <span className="circle">
            <ArrowDown size={17} strokeWidth={1.3} />
          </span>
          <span>
            Conheça uma odontologia
            <br />
            pensada para você
          </span>
        </a>
        <div className="hero-signature">
          <strong>Dr. Rafael Cole</strong>
          <span>Cirurgião-Dentista · CRO/RS 30198</span>
          <span>
            <MapPin size={12} /> Santa Cruz do Sul/RS
          </span>
        </div>
      </div>
      <div className="hero-caption">
        <span className="fine-line" /> Planejamento. Precisão. Naturalidade.
      </div>
      <div className="hero-summary container">
        <p>
          <Rich text={textAt(0, 3)} />
        </p>
        <span aria-hidden="true">01 / 12</span>
      </div>
    </section>
  );
}
