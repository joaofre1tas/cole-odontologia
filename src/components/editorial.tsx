import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { copy, type Block } from "@/content";
import { type ContactContext } from "@/config/site";
import { ContactLink } from "./contact-link";

export function Rich({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(\*\*[^*]+\*\*|\n|📍)/g)
        .map((part, i) =>
          part === "\n" ? (
            <br key={i} />
          ) : part === "📍" ? (
            <MapPin
              className="inline-icon"
              size={15}
              aria-hidden="true"
              key={i}
            />
          ) : part.startsWith("**") ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : (
            <Fragment key={i}>{part}</Fragment>
          ),
        )}
    </>
  );
}
export function Blocks({
  section,
  from = 0,
  to,
  blocks,
  context = "general",
  className = "",
}: {
  section?: number;
  from?: number;
  to?: number;
  blocks?: Block[];
  context?: ContactContext;
  className?: string;
}) {
  const items =
    blocks ||
    (section === undefined ? [] : copy[section].blocks.slice(from, to));
  return (
    <div className={`prose ${className}`}>
      {items.map((block, i) => {
        const content = <Rich text={block.text || ""} />;
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{content}</h2>;
          case "h3":
            return <h3 key={i}>{content}</h3>;
          case "list":
            return (
              <ul key={i}>
                {block.items?.map((item) => (
                  <li key={item}>
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            );
          case "cta":
            return (
              <ContactLink
                key={i}
                context={context}
                location={`section-${section ?? "custom"}`}
              >
                {content}
              </ContactLink>
            );
          case "note":
            return (
              <p className="note" key={i}>
                {content}
              </p>
            );
          default:
            return <p key={i}>{content}</p>;
        }
      })}
    </div>
  );
}
export function Eyebrow({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      {children}
    </p>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 767px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={`/images/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
