import { ArrowUpRight } from "lucide-react";
import { copy, textAt } from "@/content";
import { site } from "@/config/site";
import { Blocks, Eyebrow, Rich } from "../editorial";
import { ReviewCarousel } from "../review-carousel";

export function Reviews() {
  return (
    <section id="depoimentos" className="section light reviews">
      <div className="container">
        <Eyebrow number="06">Experiências reais</Eyebrow>
        <div className="section-heading split-heading">
          <h2>{textAt(7, 0)}</h2>
          <Blocks section={7} from={1} to={4} />
        </div>
        <ReviewCarousel />
        {site.googleReviews && (
          <a
            className="text-link"
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver avaliações no Google <ArrowUpRight size={16} />
          </a>
        )}
        <div className="review-ending">
          <Blocks section={7} from={22} />
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  const items = copy[8].blocks[3].items!.map((item, i) => (
    <li key={i}>
      <span className="audience-index">0{i + 1}</span>
      <Rich text={item} />
    </li>
  ));
  return (
    <section id="para-voce" className="section light audience">
      <div className="container">
        <div className="audience-grid">
          <div className="audience-title">
            <Eyebrow number="08">Para quem essa abordagem faz sentido</Eyebrow>
            <h2>{textAt(8, 0)}</h2>
            <Blocks section={8} from={1} to={3} />
          </div>
          <div className="audience-marquee">
            <div className="audience-viewport">
              <div className="audience-track">
                <ul className="audience-list">{items}</ul>
                <ul className="audience-list" aria-hidden="true">
                  {items}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="audience-ending">
          <Blocks section={8} from={4} />
        </div>
      </div>
    </section>
  );
}
