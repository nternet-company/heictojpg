export const LOCALES = ["en", "fr", "de", "pl", "it", "es", "nl"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  pl: "Polski",
  it: "Italiano",
  es: "Español",
  nl: "Nederlands",
};

export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  de: "de",
  pl: "pl",
  it: "it",
  es: "es",
  nl: "nl",
};

export type PageId = "home" | "png" | "pdf" | "privacy" | "about" | "terms";

export const SLUGS: Record<PageId, Record<Locale, string>> = {
  home: {
    en: "", // heic to jpg , 12.100/mo NL, 128.000/mo across six EU markets
    fr: "", // convertir heic en jpg , 40.500/mo
    de: "", // heic in jpg umwandeln , 27.100/mo
    pl: "", // heic na jpg , 18.100/mo
    it: "", // convertire heic in jpg , 18.100/mo
    es: "", // convertir heic a jpg , 12.100/mo
    nl: "", // heic naar jpg , 2.900/mo Dutch, 12.100/mo English in NL
  },
  png: {
    en: "heic-to-png",
    fr: "convertir-heic-en-png",
    de: "heic-in-png-umwandeln",
    pl: "heic-na-png",
    it: "convertire-heic-in-png",
    es: "convertir-heic-a-png",
    nl: "heic-naar-png",
  },
  pdf: {
    en: "heic-to-pdf",
    fr: "convertir-heic-en-pdf",
    de: "heic-in-pdf-umwandeln",
    pl: "heic-na-pdf",
    it: "convertire-heic-in-pdf",
    es: "convertir-heic-a-pdf",
    nl: "heic-naar-pdf",
  },
  privacy: {
    en: "privacy",
    fr: "confidentialite",
    de: "datenschutz",
    pl: "prywatnosc",
    it: "privacy",
    es: "privacidad",
    nl: "privacy",
  },
  about: {
    en: "about",
    fr: "a-propos",
    de: "ueber-uns",
    pl: "o-nas",
    it: "chi-siamo",
    es: "acerca-de",
    nl: "over",
  },
  terms: {
    en: "terms",
    fr: "conditions",
    de: "nutzungsbedingungen",
    pl: "warunki",
    it: "termini",
    es: "terminos",
    nl: "voorwaarden",
  },
};

export function pathFor(page: PageId, locale: Locale): string {
  const slug = SLUGS[page][locale];
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  if (!slug) return prefix || "/";
  return `${prefix}/${slug}`;
}

export function alternates(page: PageId): { locale: Locale; path: string }[] {
  return LOCALES.map((locale) => ({ locale, path: pathFor(page, locale) }));
}
