const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const site = {
  name: "Cole Odontologia",
  doctor: "Dr. Rafael Cole",
  registration: "CRO/RS 30198",
  url:
    configuredUrl ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined),
  title:
    "Dr. Rafael Cole | Dentista em Santa Cruz do Sul · Lentes, Implantes e Reabilitação Oral",
  description:
    "Odontologia estética, lentes e facetas, implantes e reabilitação oral em Santa Cruz do Sul/RS. Conheça o cuidado individualizado do Dr. Rafael Cole, CRO/RS 30198.",
  phone: "5551999270198",
  displayPhone: "(51) 99927-0198",
  instagram: "https://instagram.com/rafael.cole",
  address: {
    street: "Rua 28 de Setembro, 36, Sala 607",
    district: "Centro",
    city: "Santa Cruz do Sul",
    region: "RS",
    country: "BR",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+28+de+Setembro+36+Santa+Cruz+do+Sul+RS",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%2028%20de%20Setembro%2036%20Santa%20Cruz%20do%20Sul%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "",
  heroVideo: {
    mp4: process.env.NEXT_PUBLIC_HERO_VIDEO_MP4 || "/videos/dr-rafael-hero.mp4",
    webm: process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM || "",
    mobileMp4:
      process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_MP4 ||
      "/videos/dr-rafael-hero-mobile.mp4",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },
} as const;

export const messages = {
  general:
    "Olá, Dr. Rafael! Vim pelo site e gostaria de agendar uma avaliação.",
  aesthetics:
    "Olá, Dr. Rafael! Vim pelo site e gostaria de avaliar meu sorriso e conversar sobre lentes e facetas.",
  implants:
    "Olá, Dr. Rafael! Vim pelo site e gostaria de conversar sobre implantes.",
  rehabilitation:
    "Olá, Dr. Rafael! Vim pelo site e gostaria de entender as possibilidades de reabilitação oral.",
} as const;
export type ContactContext = keyof typeof messages;
export const whatsappUrl = (context: ContactContext = "general") =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(messages[context])}`;
