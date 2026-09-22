import { copy, textAt } from "@/content";
import { Blocks, Eyebrow, Photo, Rich } from "../editorial";

export function About() {
  return (
    <section id="sobre" className="section dark about">
      <div className="container">
        <Eyebrow number="05">Sobre o Dr. Rafael Cole</Eyebrow>
        <div className="about-grid">
          <div className="about-portrait">
            <Photo
              src="dr-rafael-retrato.jpg"
              alt="Retrato do Dr. Rafael Cole na Cole Odontologia"
            />
          </div>
          <div className="about-copy">
            <h2>
              Precisão nos detalhes.
              <br />
              <span className="gold">Visão do todo.</span>
            </h2>
            <Blocks section={5} from={1} to={6} />
            <div className="about-questions">
              {copy[5].blocks.slice(6, 10).map((block, i) => (
                <p key={i}>
                  <Rich text={block.text!} />
                </p>
              ))}
            </div>
            <Blocks section={5} from={10} to={13} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="processo" className="section dark process">
      <div className="container">
        <Eyebrow number="07">Como funciona o processo</Eyebrow>
        <div className="section-heading split-heading">
          <h2>{textAt(6, 0)}</h2>
          <Blocks section={6} from={1} to={3} />
        </div>
        <div className="process-grid">
          <div className="process-photo">
            <Photo
              src="dr-rafael-planejamento.jpg"
              alt="Dr. Rafael Cole em seu espaço de planejamento"
            />
            <div className="photo-footnote">
              <span className="fine-line" /> Cada etapa tem um propósito.
            </div>
          </div>
          <ol className="process-steps">
            {[3, 5, 7, 9, 11].map((index, i) => (
              <li key={index}>
                <span className="step-number">0{i + 1}</span>
                <div>
                  <h3>{textAt(6, index).slice(4)}</h3>
                  <p>{textAt(6, index + 1)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="process-ending">
          <Blocks section={6} from={13} />
        </div>
      </div>
    </section>
  );
}
