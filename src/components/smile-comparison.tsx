"use client";

import Image from "next/image";
import { useId, useState, type CSSProperties } from "react";
import { MoveHorizontal } from "lucide-react";

export function SmileComparison({ name, image }: { name: string; image: string }) {
  const [position, setPosition] = useState(50);
  const captionId = useId();

  return (
    <figure className="treatment-photo smile-comparison">
      <div
        className="comparison-frame"
        style={{ "--reveal": `${position}%` } as CSSProperties}
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;
          const bounds = event.currentTarget.getBoundingClientRect();
          setPosition(Math.round(Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))));
        }}
      >
        <Image src={`/images/solutions/${image}-depois-v2.webp`} alt={`${name}: simulação ilustrativa depois`} fill sizes="(max-width: 767px) 90vw, 30vw" draggable={false} />
        <div className="comparison-before">
          <Image src={`/images/solutions/${image}-antes-v2.webp`} alt={`${name}: simulação ilustrativa antes`} fill sizes="(max-width: 767px) 90vw, 30vw" draggable={false} />
        </div>
        <span className="comparison-label comparison-label-before" aria-hidden="true">Antes</span>
        <span className="comparison-label comparison-label-after" aria-hidden="true">Depois</span>
        <div className="comparison-divider" aria-hidden="true"><span><MoveHorizontal size={18} strokeWidth={1.5} /></span></div>
        <input className="comparison-range" type="range" min={0} max={100} value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label={`Comparar antes e depois: ${name}`} aria-describedby={captionId} aria-valuetext={`${position}% antes e ${100 - position}% depois`} />
      </div>
      <figcaption id={captionId}>Simulação ilustrativa · imagens geradas por IA</figcaption>
    </figure>
  );
}
