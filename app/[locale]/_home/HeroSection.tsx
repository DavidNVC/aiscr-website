import AppBadge from "@/app/_components/_buttons/AppBadge";
import AppButton, { AppButtonType } from "@/app/_components/_buttons/AppButton";
import AuroraBlobBackground from "@/app/_components/_backgrounds/AuroraBlobBackground";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-6 py-20 sm:py-24">
      {/* Animated mint aurora background */}
      <AuroraBlobBackground preset="mint" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <AppBadge className="mb-4 sm:mb-5">{t("badge")}</AppBadge>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4 sm:mb-6 max-w-5xl mx-auto text-gradient">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          {t("description")}
        </p>

        {/* CTAs — stack on small screens, side by side on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto px-4 sm:px-0">
          <Link href="/join" className="w-full sm:w-auto sm:min-w-[180px]">
            <AppButton className="w-full" type={AppButtonType.Primary}>
              {t("cta_primary")}
            </AppButton>
          </Link>
          <Link
            href="/about-aiscr"
            className="w-full sm:w-auto sm:min-w-[180px]"
          >
            <AppButton className="w-full" type={AppButtonType.Secondary}>
              {t("cta_secondary")}
            </AppButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
