import AppBadge from "@/app/_components/_buttons/AppBadge";
import AppButton, { AppButtonType } from "@/app/_components/_buttons/AppButton";
import AuroraBlobBackground from "@/app/_components/_backgrounds/AuroraBlobBackground";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 ">
      {/* Animated mint aurora background */}
      <AuroraBlobBackground preset="mint" />

      {/* Content */}
      <div className="relative z-10">
        <AppBadge className="mb-4">{t("badge")}</AppBadge>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-tight mb-6 max-w-5xl text-gradient">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("description")}
        </p>

        {/* CTAs */}
        <div className="grid grid-cols-2 sm:flex-row items-center gap-4 max-w-md mx-auto">
          <Link href="/join" className="w-full">
            <AppButton className={"w-full"} type={AppButtonType.Primary}>
              {t("cta_primary")}
            </AppButton>
          </Link>
          <Link href="/about-aiscr" className="w-full">
            <AppButton className="w-full" type={AppButtonType.Secondary}>
              {t("cta_secondary")}
            </AppButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
