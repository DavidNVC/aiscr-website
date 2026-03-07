import { useTranslations } from "next-intl";
import TestimonialHeader from "../../_components/_testimonials/TestimonialHeader";
import TestimonialCarousel from "../../_components/_testimonials/TestimonialCarousel";
import type { Testimonial } from "../../_components/_testimonials/TestimonialCarousel";

const TESTIMONIAL_KEYS = ["t1", "t2", "t3", "t4", "t5"] as const;

export default function Section5() {
  const t = useTranslations("home.section6");

  const testimonials: Testimonial[] = TESTIMONIAL_KEYS.map((key) => ({
    quote: t(`testimonials.${key}.quote`),
    name: t(`testimonials.${key}.name`),
    role: t(`testimonials.${key}.role`),
  }));

  return (
    <section className="relative w-full bg-linear-to-br from-[#fdf6f0] via-[#f0f6fd] to-[#e8f4f8] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
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
    </section>
  );
}
