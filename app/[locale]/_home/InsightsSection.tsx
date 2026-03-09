import { useTranslations } from "next-intl";
import AppBadge from "@/app/_components/_buttons/AppBadge";
import AppButton from "@/app/_components/_buttons/AppButton";
import InsightCard from "@/app/_components/_cards/InsightCard";
import AuroraBlobBackground from "@/app/_components/_backgrounds/AuroraBlobBackground";
import Link from "next/link";

// Sample data - in production, this would come from a CMS or API
const INSIGHTS_DATA = [
  {
    key: "pub1",
    imageSrc: "/conference.jpg",
    date: "12/12/2025",
    href: "/publications/1",
    type: "publications",
  },
  {
    key: "res1",
    imageSrc: "/research.jpg",
    date: "10/11/2025",
    href: "/research/1",
    type: "research",
  },
  {
    key: "evt1",
    imageSrc: "/conference.jpg",
    date: "15/01/2026",
    href: "/events/1",
    type: "events",
  },
  {
    key: "pub2",
    imageSrc: "/research.jpg",
    date: "12/12/2025",
    href: "/publications/2",
    type: "publications",
  },
];

export default function InsightsSection() {
  const t = useTranslations("home.insights");

  return (
    <section className="relative w-full py-12 sm:py-20 md:py-28 overflow-hidden">
      {/* Aurora background */}
      <AuroraBlobBackground preset="pastel" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <AppBadge className="mb-4 sm:mb-6">{t("badge")}</AppBadge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-gradient">
            {t("title")}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            {t("description")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {INSIGHTS_DATA.map((insight) => (
            <InsightCard
              key={insight.key}
              imageSrc={insight.imageSrc}
              date={insight.date}
              title={t(`${insight.type}.${insight.key}.title`)}
              description={t(`${insight.type}.${insight.key}.description`)}
              learnMore={t("learn_more")}
              href={insight.href}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center px-5">
          <Link href="/insights">
            <AppButton className="px-8 sm:px-12 py-2.5 sm:py-3 text-sm sm:text-base">
              {t("view_more")}
            </AppButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
