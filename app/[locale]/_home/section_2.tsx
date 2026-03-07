import { useTranslations } from "next-intl";
import DarkGridBackground from "../../_components/_backgrounds/DarkGridBackground";
import FeatureCard from "../../_components/_cards/FeatureCard";
import AppBadge from "@/app/_components/_buttons/AppBadge";
import Section3 from "./section_3";

export default function Section2() {
  const t = useTranslations("home.section2");

  const cards = [
    {
      key: "research",
      topImage: "/piechart.png",
      bottomImage: "/graph.png",
    },
    {
      key: "education",
      topImage: "/puzzle.png",
      bottomImage: "/pencil.png",
    },
    {
      key: "partnerships",
      topImage: "/lightbulb.png",
      bottomImage: "/link.png",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden rounded-4xl">
      <DarkGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 text-center">
        {/* Badge */}
        <AppBadge className="mb-8 text-white/75">{t("badge")}</AppBadge>

        {/* Title */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          {t("title")}
        </h2>

        {/* Description */}
        <p className="text-center text-base sm:text-lg max-w-2xl mx-auto mb-16 leading-relaxed text-white-secondary">
          {t("description")}
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <FeatureCard
              key={card.key}
              title={t(`cards.${card.key}.title`)}
              description={t(`cards.${card.key}.description`)}
              topImage={card.topImage}
              bottomImage={card.bottomImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
