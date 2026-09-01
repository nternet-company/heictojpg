import type { PlateStrings } from "../lib/convert/ui-types";

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  id?: string;
  heading: string;
  body: string[];
}

export interface Step {
  name: string;
  text: string;
}

export interface Platform {
  id: string;
  name: string;
  intro: string;
  steps: string[];
}

export interface SpecRow {
  label: string;
  heic: string;
  jpg: string;
}

export interface HomeCopy {
  title: string;
  description: string;
  h1: string;
  lede: string;
  tagline: string;
  stage: PlateStrings;

  footerLine: string;
  readLabel: string;
  aboutHeading: string;
  backLabel: string;

  howHeading: string;
  steps: Step[];

  sections: Section[];

  specHeading: string;
  specIntro: string;
  specColumns: { label: string; heic: string; jpg: string };
  specRows: SpecRow[];

  platformsHeading: string;
  platformsIntro: string;
  platforms: Platform[];

  faqHeading: string;
  faqs: Faq[];

  siblingsHeading: string;
  siblings: { label: string; page: "png" | "pdf" }[];

  bookHeading: string;
  bookBody: string;
  bookCta: string;
  footerNote: string;
}
