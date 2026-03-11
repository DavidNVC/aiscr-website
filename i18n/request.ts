import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  const namespaces = ["metadata", "home", "header", "footer", "about"];

  const messages: Record<string, unknown> = {};

  await Promise.all(
    namespaces.map(async (namespace) => {
      try {
        const mod = await import(`../messages/${locale}/${namespace}.json`);
        messages[namespace] = mod.default;
      } catch {
        // Namespace file doesn't exist for this locale, skip silently
      }
    }),
  );

  return {
    locale,
    messages,
  };
});
