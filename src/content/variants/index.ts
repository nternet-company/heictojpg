import type { VariantCopy, VariantId } from "../variant-types";
import { LOCALES, type Locale } from "../../lib/site";

const modules = import.meta.glob<{ [key: string]: Record<VariantId, VariantCopy> }>(
  "./*.ts",
  { eager: true },
);

const byLocale = new Map<Locale, Record<VariantId, VariantCopy>>();

for (const [path, module] of Object.entries(modules)) {
  const name = path.replace("./", "").replace(".ts", "");
  if (!LOCALES.includes(name as Locale)) continue;
  const copy = module[name];
  if (copy) byLocale.set(name as Locale, copy);
}

export function variantCopyFor(locale: Locale, variant: VariantId) {
  return byLocale.get(locale)?.[variant];
}

export const VARIANT_LOCALES: Locale[] = LOCALES.filter((locale) =>
  byLocale.has(locale),
);
