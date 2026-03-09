import { useTranslations } from "next-intl";
import AppBadge from "@/app/_components/_buttons/AppBadge";
import AppButton from "@/app/_components/_buttons/AppButton";
import LogoMarquee from "@/app/_components/_marquee/LogoMarquee";
import Link from "next/link";

// Partner logos - replace with actual partner logos
const PARTNERS = [
  { name: "Google Pay", logo: "/partners/gpay.svg", width: 120, height: 48 },
  {
    name: "Samsung Pay",
    logo: "/partners/samsung-pay.svg",
    width: 140,
    height: 48,
  },
  { name: "Klarna", logo: "/partners/klarna.svg", width: 120, height: 48 },
  {
    name: "Western Union",
    logo: "/partners/western-union.svg",
    width: 140,
    height: 48,
  },
  {
    name: "Amazon Pay",
    logo: "/partners/amazon-pay.svg",
    width: 140,
    height: 48,
  },
  { name: "Stripe", logo: "/partners/stripe.svg", width: 100, height: 48 },
  { name: "Visa", logo: "/partners/visa.svg", width: 100, height: 48 },
];

export default function PartnersSection() {
  const t = useTranslations("home.section5.section5_2");

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <AppBadge className="mb-4 sm:mb-6">{t("badge")}</AppBadge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-gradient">
            <span>{t("title")}</span>
            <br />
            <span>{t("title_highlight")}</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed px-2">
            {t("description")}
          </p>
        </div>
      </div>

      {/* Logo Marquee - Full width */}
      <div className="mb-10 sm:mb-16">
        <LogoMarquee partners={PARTNERS} duration={25} direction="left" />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center px-5">
        <Link href="/partnerships-and-membership">
          <AppButton className="px-8 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-base">
            {t("cta")}
          </AppButton>
        </Link>
      </div>
    </>
  );
}
