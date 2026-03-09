import { useTranslations } from "next-intl";
import DarkGridBackground from "../../_components/_backgrounds/DarkGridBackground";
import FeatureCard from "../../_components/_cards/FeatureCard";
import AppBadge from "@/app/_components/_buttons/AppBadge";

export default function FeaturesSection() {
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
    <section className="relative w-full min-h-0 sm:min-h-screen overflow-hidden rounded-2xl sm:rounded-4xl">
      <DarkGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-20 md:py-24 text-center">
        {/* Badge */}
        <AppBadge className="mb-5 sm:mb-8 text-white/75">{t("badge")}</AppBadge>

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {t("title")}
        </h2>

        {/* Description */}
        <p className="text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-16 leading-relaxed text-white-secondary px-2">
          {t("description")}
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
