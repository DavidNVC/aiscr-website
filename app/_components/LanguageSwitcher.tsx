"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "../../i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      <Link
        href={pathname}
        locale="en"
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
        }`}
      >
        English
      </Link>
      <Link
        href={pathname}
        locale="fr"
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === "fr"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
        }`}
      >
        Français
      </Link>
    </div>
  );
}
