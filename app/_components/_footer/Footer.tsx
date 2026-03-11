import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import GridBackground from "../_backgrounds/GridBackground";
import AppBadge from "../_buttons/AppBadge";
import AppButton, { AppButtonType } from "../_buttons/AppButton";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/60 hover:text-white text-sm leading-relaxed transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative w-full overflow-hidden z-30">
      <GridBackground />

      {/* ── CTA Section ── */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col items-center text-center gap-6">
          <AppBadge className="text-white/75">{t("cta.badge")}</AppBadge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            {t("cta.title")}
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <AppButton className="px-8 h-13 rounded-lg text-base font-medium">
              {t("cta.join")}
            </AppButton>
            <AppButton
              type={AppButtonType.Secondary}
              className="px-8 h-13 rounded-lg text-base font-medium"
            >
              {t("cta.donate")}
            </AppButton>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* ── Brand Column ── */}
            <div className="flex flex-col gap-5">
              <Image
                src="/full_logo.svg"
                alt="AISCR Global"
                width={180}
                height={32}
                className="object-contain object-left invert brightness-0"
              />
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                {t("brand.description")}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors duration-200 w-fit"
              >
                {t("brand.learn_more")}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* ── Quick Links Column ── */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold text-base">
                {t("quick_links.title")}
              </h3>
              <ul className="flex flex-col gap-3">
                <FooterLink href="#">{t("quick_links.membership")}</FooterLink>
                <FooterLink href="#">{t("quick_links.research")}</FooterLink>
                <FooterLink href="#">{t("quick_links.education")}</FooterLink>
                <FooterLink href="#">{t("quick_links.outreach")}</FooterLink>
                <FooterLink href="#">
                  {t("quick_links.publications")}
                </FooterLink>
                <FooterLink href="#">
                  {t("quick_links.work_with_us")}
                </FooterLink>
                <FooterLink href="#">{t("quick_links.support")}</FooterLink>
                <FooterLink href="#">{t("quick_links.events")}</FooterLink>
              </ul>
            </div>

            {/* ── About Column ── */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold text-base">
                {t("about.title")}
              </h3>
              <ul className="flex flex-col gap-3">
                <FooterLink href="#">{t("about.about_aiscr")}</FooterLink>
                <FooterLink href="#">{t("about.board")}</FooterLink>
                <FooterLink href="#">{t("about.management")}</FooterLink>
                <FooterLink href="#">{t("about.advisory")}</FooterLink>
                <FooterLink href="#">{t("about.experts")}</FooterLink>
                <FooterLink href="#">{t("about.industries")}</FooterLink>
                <FooterLink href="#">{t("about.partners")}</FooterLink>
              </ul>
            </div>

            {/* ── Contact Column ── */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold text-base">
                {t("contact.title")}
              </h3>
              <ul className="flex flex-col gap-4">
                {/* Email */}
                <li className="flex items-start gap-3">
                  <Image
                    src="/mail.svg"
                    alt="Mail"
                    width={16}
                    height={16}
                    className="mt-0.5 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm text-white/60">
                      {t("contact.email")} :{" "}
                      <Link
                        href={`mailto:${t("contact.email_value")}`}
                        className="text-white/60 hover:text-white transition-colors duration-200"
                      >
                        {t("contact.email_value")}
                      </Link>
                    </span>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3">
                  <Image
                    src="/phone_call.svg"
                    alt="Phone"
                    width={16}
                    height={16}
                    className="mt-0.5 object-contain"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-white/60">
                      {t("contact.phone")} :
                    </span>
                    <span className="text-sm text-white/60">
                      {t("contact.phone_sa")}
                    </span>
                    <span className="text-sm text-white/60">
                      {t("contact.phone_usa")}
                    </span>
                  </div>
                </li>

                {/* Offices */}
                <li className="flex items-start gap-3">
                  <Image
                    src="/building.svg"
                    alt="Building"
                    width={16}
                    height={16}
                    className="mt-0.5 object-contain"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-white/60">
                      {t("contact.offices")} :
                    </span>
                    <span className="text-sm text-white/60">
                      {t("contact.offices_value")}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative  border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5">
          <p className="text-center text-xs text-white/40 leading-relaxed">
            {t("bottom.copyright")} |{" "}
            <Link
              href="#"
              className="hover:text-white/70 transition-colors duration-200"
            >
              {t("bottom.privacy")}
            </Link>{" "}
            | {t("bottom.design")}
          </p>
        </div>
      </div>
    </footer>
  );
}
