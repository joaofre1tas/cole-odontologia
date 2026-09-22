import { copy, textAt } from "@/content";
import { Blocks, Eyebrow, Photo, Rich } from "../editorial";

export function Aesthetics() {
  return (
    <section id="estetica" className="section dark aesthetics">
      <div className="container">
        <Eyebrow number="02">Estética dental, lentes e facetas</Eyebrow>
        <div className="aesthetic-layout">
          <div className="aesthetic-copy">
            <h2>{textAt(2, 0)}</h2>
            <Blocks section={2} from={1} to={3} />
            <div className="rhythm-list">
              {copy[2].blocks.slice(3, 8).map((block, i) => (
                <p key={i}>
                  <span>0{i + 1}</span>
                  {block.text}
                </p>
              ))}
            </div>
            <Blocks section={2} from={8} to={10} />
          </div>
          <div className="aesthetic-visual">
            <Photo
              src="planejamento-estetico.webp"
              alt="Composição ilustrativa de peças cerâmicas para planejamento estético"
            />
            <span className="image-caption">
              Estética que respeita a individualidade.
            </span>
            <div className="aesthetic-detail">
              <span className="fine-line" />
              <Blocks section={2} from={10} to={14} />
            </div>
          </div>
        </div>
        <div className="statement">
          <Blocks section={2} from={14} context="aesthetics" />
        </div>
      </div>
    </section>
  );
}

export function Implants() {
  return (
    <section id="implantes" className="section light implants">
      <div className="container">
        <Eyebrow number="03">Implantes dentários</Eyebrow>
        <div className="implant-grid">
          <div className="implant-main">
            <h2>{textAt(3, 0)}</h2>
            <Blocks section={3} from={1} to={2} />
            <div className="large-rhythm">
              <Blocks section={3} from={2} to={5} />
            </div>
            <Blocks section={3} from={5} to={9} />
          </div>
          <div className="implant-side">
            <Photo
              src="dr-rafael-atendimento.jpg"
              alt="Dr. Rafael Cole trabalhando com instrumentos de precisão"
              className="implant-photo"
            />
            <div className="planning-card">
              <Blocks section={3} from={9} to={11} />
            </div>
          </div>
        </div>
        <div className="implant-ending">
          <Blocks section={3} from={11} context="implants" />
        </div>
      </div>
    </section>
  );
}

export function Rehabilitation() {
  return (
    <section id="reabilitacao" className="section light rehabilitation">
      <div className="container">
        <div className="rehab-intro">
          <Eyebrow number="04">Reabilitação oral</Eyebrow>
          <h2>{textAt(4, 0)}</h2>
        </div>
        <div className="rehab-body">
          <div>
            <Blocks section={4} from={1} to={4} />
            <Photo
              src="dr-rafael-precisao.jpg"
              alt="Dr. Rafael Cole segurando um modelo para estudo do sorriso"
              className="rehab-photo"
            />
          </div>
          <div className="rehab-objectives">
            <Blocks section={4} from={4} to={5} />
            <ol>
              {copy[4].blocks.slice(5, 10).map((block, i) => (
                <li key={i}>
                  <span>0{i + 1}</span>
                  <Rich text={block.text!} />
                </li>
              ))}
            </ol>
            <Blocks section={4} from={10} context="rehabilitation" />
          </div>
        </div>
      </div>
    </section>
  );
}
