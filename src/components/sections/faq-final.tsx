import { Plus } from "lucide-react";
import Image from "next/image";
import { faqs, textAt } from "@/content";
import { Blocks, Eyebrow } from "../editorial";

export function FAQ() {
  return (
    <section id="duvidas" className="section light faq">
      <div className="container faq-grid">
        <div className="faq-title">
          <Eyebrow number="10">Perguntas frequentes</Eyebrow>
          <h2>{textAt(10, 0)}</h2>
          <Blocks section={10} from={36} />
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="faq-item" key={faq.question} name="faq">
              <summary>
                <span className="faq-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{faq.question}</h3>
                <Plus size={22} strokeWidth={1.3} aria-hidden="true" />
              </summary>
              <Blocks blocks={faq.answers} />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section id="agendar" className="section dark final-cta">
      <div className="container">
        <Image
          src="/brand/monogram.svg"
          alt=""
          width={75}
          height={85}
          className="final-monogram"
        />
        <Eyebrow number="11">O primeiro passo é uma conversa</Eyebrow>
        <h2>
          {textAt(11, 0)} <span>{textAt(11, 1)}</span>
        </h2>
        <div className="final-intro">
          <Blocks section={11} from={2} to={4} />
        </div>
        <Blocks section={11} from={12} />
      </div>
    </section>
  );
}
