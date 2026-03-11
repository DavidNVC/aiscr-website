import AppButton, { AppButtonType } from "@/app/_components/_buttons/AppButton";
import { useTranslations } from "next-intl";
import { MoveUpRight } from "lucide-react";
import PillarCard from "@/app/_components/_cards/PillarCard";

export default function PillarsSection() {
    const t = useTranslations("about.pillars");

    const pillars = [
        { key: "research", img: "/images/research.jpg" },
        { key: "education", img: "/images/education.jpg" },
        { key: "solutions", img: "/images/solutions.jpg" },
        { key: "engagement", img: "/images/engagement.jpg" },
    ];

    return (
        <section className="py-24 container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3673] mb-4">
                {t("title")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm md:text-base">
                {t("subtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {pillars.map((p) => (
                    <PillarCard
                        key={p.key}
                        title={t(`${p.key}.title`)}
                        description={t(`${p.key}.description`)}
                        imageSrc={p.img}
                    />
                ))}
            </div>

            <AppButton type={AppButtonType.Primary} >
                {t("cta")} <MoveUpRight size={18} className={"inline-block ml-2"}/>
            </AppButton>
        </section>
    );
}