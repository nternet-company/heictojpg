import type { HomeCopy } from "./types";
import { LOCALES, type Locale } from "../lib/site";

const modules = import.meta.glob<{ [key: string]: HomeCopy }>("./*.ts", {
  eager: true,
});

const byLocale = new Map<Locale, HomeCopy>();

for (const [path, module] of Object.entries(modules)) {
  const name = path.replace("./", "").replace(".ts", "");
  if (!LOCALES.includes(name as Locale)) continue;
  const copy = module[name];
  if (copy) byLocale.set(name as Locale, copy);
}

export function copyFor(locale: Locale): HomeCopy | undefined {
  return byLocale.get(locale);
}

export const READY_LOCALES: Locale[] = LOCALES.filter((locale) =>
  byLocale.has(locale),
);
