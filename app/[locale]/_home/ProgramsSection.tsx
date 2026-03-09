import AppBadge from "@/app/_components/_buttons/AppBadge";
import ProgramCard from "@/app/_components/_cards/ProgramCard";
import AuroraBlobBackground from "@/app/_components/_backgrounds/AuroraBlobBackground";
import { useTranslations } from "next-intl";

export default function ProgramsSection() {
  const t = useTranslations("home.section3");

  const stats = [
    { key: "countries" },
    { key: "professionals" },
    { key: "research" },
    { key: "partnerships" },
  ] as const;

  const cards = [
    {
      key: "leadership",
      imageSrc: "/security.jpg",
      href: "/programs-and-initiatives/education-and-training",
    },
    {
      key: "research",
      imageSrc: "/research.jpg",
      href: "/programs-and-initiatives/research-and-innovation",
    },
    {
      key: "conference",
      imageSrc: "/conference.jpg",
      href: "/programs-and-initiatives/conferences",
    },
  ] as const;

  return (
    <section className="relative w-full border-b border-gray-100 overflow-hidden ">
      {/* Animated pastel aurora background */}
      <AuroraBlobBackground preset="pastel" />

      {/* ── Row 1 : Stats ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-8">
          {/* Left — Title */}
          <div className="shrink-0 md:w-70 lg:w-80">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gradient">
              {t("first_title")}
            </h2>
          </div>

          {/* Right — Stats */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {stats.map((stat) => (
              <div key={stat.key} className="flex flex-col gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-primary-blue">
                  {t(`stats.${stat.key}.value`)}
                </span>
                <span className="text-sm leading-snug text-black-tertiary">
                  {t(`stats.${stat.key}.label`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Row 2 : Programs ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="mb-12 text-center">
          <AppBadge className="mb-6">{t("badge")}</AppBadge>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-gradient block"
            style={{ color: "#0a1636" }}
          >
            {t("title")}
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#6b7280" }}
          >
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <ProgramCard
              key={card.key}
              title={t(`cards.${card.key}.title`)}
              description={t(`cards.${card.key}.description`)}
              learnMore={t("learn_more")}
              href={card.href}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
