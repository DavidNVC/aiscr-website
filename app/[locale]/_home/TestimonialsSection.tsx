import { useTranslations } from "next-intl";
import TestimonialHeader from "../../_components/_testimonials/TestimonialHeader";
import TestimonialCarousel from "../../_components/_testimonials/TestimonialCarousel";
import type { Testimonial } from "../../_components/_testimonials/TestimonialCarousel";
import AuroraBlobBackground from "@/app/_components/_backgrounds/AuroraBlobBackground";
import PartnersSection from "./PartnersSection";

const TESTIMONIAL_KEYS = ["t1", "t2", "t3", "t4", "t5"] as const;

export default function TestimonialsSection() {
  const t = useTranslations("home.section5");

  const testimonials: Testimonial[] = TESTIMONIAL_KEYS.map((key) => ({
    quote: t(`testimonials.${key}.quote`),
    name: t(`testimonials.${key}.name`),
    role: t(`testimonials.${key}.role`),
  }));

  return (
    <section className="relative w-full py-12 sm:py-20 md:py-28">
      <AuroraBlobBackground preset="mint-pastel" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header: image + badge + title + description */}
        <TestimonialHeader
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
          imageSrc="/conference.jpg"
        />

        {/* Testimonial cards carousel */}
        <TestimonialCarousel testimonials={testimonials} perPage={3} />
      </div>

      <div className="my-12 sm:my-16 md:my-20">
        <PartnersSection />
      </div>
    </section>
  );
}
