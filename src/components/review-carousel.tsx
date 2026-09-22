"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { reviews } from "@/content";

export function ReviewCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollBy({
      left: direction * (card.offsetWidth + 24),
      behavior: reduce ? "instant" : "smooth",
    });
  }
  return (
    <div
      className="review-carousel"
      role="region"
      aria-label="Avaliações de pacientes"
    >
      <div
        className="review-track"
        ref={track}
        tabIndex={0}
        aria-label="Depoimentos, deslize para ver mais"
        onScroll={() => {
          const el = track.current!;
          const width = (el.firstElementChild as HTMLElement)?.offsetWidth || 1;
          setPosition(Math.round(el.scrollLeft / (width + 24)));
          setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
        }}
      >
        {reviews.map((review, i) => (
          <figure
            className="review"
            key={review.name}
            aria-label={`Avaliação ${i + 1} de ${reviews.length}`}
          >
            <div className="review-top">
              <span className="stars" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="currentColor"
                    strokeWidth={0}
                    aria-hidden="true"
                  />
                ))}
              </span>
              <span className="review-source">Google</span>
            </div>
            <blockquote>{review.quote}</blockquote>
            <figcaption>
              <span className="review-avatar" aria-hidden="true">
                {review.name
                  .split(" ")
                  .map((x) => x[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel-controls">
        <p aria-live="polite">
          {String(position + 1).padStart(2, "0")}{" "}
          <span>/ {String(reviews.length).padStart(2, "0")}</span>
        </p>
        <div>
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={position === 0}
            aria-label="Avaliação anterior"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={atEnd}
            aria-label="Próxima avaliação"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
