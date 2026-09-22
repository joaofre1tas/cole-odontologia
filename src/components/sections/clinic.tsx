import { ArrowUpRight, MapPin } from "lucide-react";
import { copy, textAt } from "@/content";
import { site } from "@/config/site";
import { Blocks, Eyebrow, Rich } from "../editorial";

export function Clinic() {
  return (
    <section id="clinica" className="section dark clinic">
      <div className="container">
        <Eyebrow number="09">Cole Odontologia</Eyebrow>
        <div className="section-heading split-heading">
          <h2>{textAt(9, 0)}</h2>
          <div className="prose">
            <p>Na Cole Odontologia, conforto, clareza e atenção aos detalhes fazem parte do cuidado, da chegada ao tratamento.</p>
          </div>
        </div>
        <div className="clinic-gallery">
          <div className="clinic-placeholder clinic-main-photo" role="img" aria-label="Placeholder para foto principal do consultório">
            <span>Foto principal do consultório</span><small>Inserir imagem aqui</small>
          </div>
          <div className="clinic-placeholder clinic-secondary-photo" role="img" aria-label="Placeholder para segunda foto do consultório">
            <span>Detalhe do ambiente</span><small>Inserir imagem aqui</small>
          </div>
        </div>
        <div className="clinic-values">
          {copy[9].blocks.slice(9, 14).map((block, i) => (
            <div key={i}>
              <span>0{i + 1}</span>
              <p>
                <Rich text={block.text!} />
              </p>
            </div>
          ))}
        </div>
        <div className="clinic-location">
          <div>
            <MapPin size={28} strokeWidth={1} className="gold" />
            <h2>{textAt(9, 14)}</h2>
            <Blocks section={9} from={15} to={16} />
            <a
              className="text-link"
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar <ArrowUpRight size={17} />
            </a>
            <Blocks section={9} from={16} />
          </div>
          <div className="map">
            <iframe
              title="Localização da Cole Odontologia em Santa Cruz do Sul"
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              Abrir localização no Google Maps <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
