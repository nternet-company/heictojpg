export interface VariantCopy {
  title: string;
  description: string;
  h1: string;
  lede: string;
  converterOverrides: Partial<Record<"drop" | "done" | "downloadAll" | "notHeic", string>>;
  whyHeading: string;
  why: string[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
  backHeading: string;
  backLabel: string;
  otherLabel: string;
}

export type VariantId = "png" | "pdf";
