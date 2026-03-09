import { useTranslations } from "next-intl";
import DarkGridBackground from "../../_components/_backgrounds/DarkGridBackground";
import ImpactCard from "../../_components/_cards/ImpactCard";
import AppBadge from "@/app/_components/_buttons/AppBadge";
import AppButton from "@/app/_components/_buttons/AppButton";

export default function ImpactSection() {
  const t = useTranslations("home.section4");

  const cards = [
    {
      key: "educate",
      icon: "/school.svg",
    },
    {
      key: "fund_research",
      icon: "/file_box.svg",
    },
    {
      key: "scale_impact",
      icon: "/globe.svg",
    },
  ];

  return (
    <section className="relative w-full min-h-0 sm:min-h-screen overflow-hidden rounded-2xl sm:rounded-4xl">
      <DarkGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-20 md:py-24 text-center">
        <AppBadge className="mb-5 sm:mb-8 text-white/75">{t("badge")}</AppBadge>

        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold text-green-gradient mb-4 sm:mb-6 leading-tight">
          {t("title")}
        </h2>

        <p className="text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-16 leading-relaxed text-white-secondary px-2">
          {t("description")}
        </p>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Dashed line between card 1 and 2 */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2"
            style={{
              width: "calc(33.333% - 20px)",
              transform: "translate(-100%, -50%)",
              borderTop: "2px dashed #3b82f6",
              zIndex: 5,
            }}
          />

          {/* Dashed line between card 2 and 3 */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2"
            style={{
              width: "calc(33.333% - 20px)",
              transform: "translate(0%, -50%)",
              borderTop: "2px dashed #3b82f6",
              zIndex: 5,
            }}
          />

          {/* Vertical dashed lines between cards on mobile */}
          {cards.map((card, index) => (
            <div key={card.key} className="relative z-10 w-full md:w-1/3">
              <ImpactCard
                icon={card.icon}
                title={t(`cards.${card.key}.title`)}
                description={t(`cards.${card.key}.description`)}
              />
              {/* Vertical dashed connector on mobile between cards */}
              {index < cards.length - 1 && (
                <div
                  className="md:hidden mx-auto"
                  style={{
                    width: "2px",
                    height: "24px",
                    borderLeft: "2px dashed #3b82f6",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Donate Now button */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <AppButton className="px-8 sm:px-12 h-12 sm:h-14 text-sm sm:text-base font-medium rounded-xl">
            {t("cta")}
          </AppButton>
        </div>
      </div>
    </section>
  );
}
