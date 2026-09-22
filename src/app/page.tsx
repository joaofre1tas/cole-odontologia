import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { About, Process } from "@/components/sections/about";
import { Reviews, Audience } from "@/components/sections/reviews-audience";
import { Clinic } from "@/components/sections/clinic";
import { FAQ, FinalCTA } from "@/components/sections/faq-final";
import { site } from "@/config/site";
import { faqs, plain } from "@/content";

export default function Home() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: site.name,
      ...(site.url ? { url: site.url } : {}),
      description: site.description,
      telephone: `+${site.phone}`,
      sameAs: [site.instagram],
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.street}, ${site.address.district}`,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: { "@type": "City", name: site.address.city },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answers.map((x) => plain(x.text!)).join(" "),
        },
      })),
    },
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="conteudo">
        <Hero />
        <Solutions />
        <About />
        <Reviews />
        <Process />
        <Audience />
        <Clinic />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContact />
      <ScrollReveal />
    </>
  );
}
