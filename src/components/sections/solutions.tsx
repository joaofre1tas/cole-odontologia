import { copy, textAt } from "@/content";
import { Blocks, Eyebrow, Rich } from "../editorial";
import { SmileComparison } from "../smile-comparison";

const treatments = [
  {
    at: 4,
    image: "estetica",
    name: "Estética Dental",
  },
  {
    at: 7,
    image: "implantes",
    name: "Implantes Dentários",
  },
  {
    at: 10,
    image: "reabilitacao",
    name: "Reabilitação Oral",
  },
];
export function Solutions() {
  return (
    <section id="solucoes" className="section light solutions">
      <div className="container">
        <div className="section-top">
          <Eyebrow number="01">Principais soluções</Eyebrow>
        </div>
        <div className="section-heading split-heading">
          <h2>{textAt(1, 0)}</h2>
          <Blocks section={1} from={1} to={4} />
        </div>
        <div className="treatment-list">
          {treatments.map((item, i) => (
            <article className="treatment-row" key={item.name}>
              <SmileComparison name={item.name} image={item.image} />
              <div className="treatment-info">
                <span className="small-number">0{i + 1}</span>
                <h3>{item.name}</h3>
                <p>{textAt(1, item.at + 1)}</p>
              </div>
              <ul className="tags">
                {copy[1].blocks[item.at + 2].items?.map((tag) => (
                  <li key={tag}>
                    <Rich text={tag} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="section-end solutions-cta">
          <p>O primeiro passo é entender o seu sorriso.</p>
          <Blocks section={1} from={13} />
        </div>
      </div>
    </section>
  );
}
