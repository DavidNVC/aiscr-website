import AppButton, {AppButtonType} from "@/app/_components/_buttons/AppButton";
import AuroraBlobBackground from "@/app/_components/_backgrounds/AuroraBlobBackground";
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";
import MissionVisionSection from "@/app/[locale]/about/_components/MissionVisionSection";

export default function HeroSection() {

    const t = useTranslations("about");
    return (
        <section className="relative overflow-hidden">
            <AuroraBlobBackground preset="mint-pastel"/>

            {/* --- HERO SECTION --- */}
            <div className="relative z-10 container mx-auto px-6 pt-20 pb-32 lg:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-left max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a3673] leading-tight mb-6">
                            {t("hero.title")}
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base mb-10 leading-relaxed max-w-lg">
                            {t("hero.description")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/donate" className="w-full sm:w-auto">
                                <AppButton className="w-full px-8" type={AppButtonType.Primary}>
                                    {t("hero.cta_primary")}
                                </AppButton>
                            </Link>
                            <Link href="/about-aiscr" className="w-full sm:w-auto">
                                <AppButton className="w-full px-8" type={AppButtonType.Secondary}>
                                    {t("hero.cta_secondary")}
                                </AppButton>
                            </Link>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/about_hero_image.jpg"
                            alt="Supply Chain Africa"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* --- WHY WE EXIST SECTION --- */}
            <div className="relative z-10 py-24 ">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3673] mb-8">
                        {t("hero.why.title")}
                    </h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p>{t("hero.why.description_p1")}</p>
                        <p className="font-medium text-gray-700">
                            {t("hero.why.description_p2")}
                        </p>
                    </div>
                </div>

                {/* Floating Decorative Elements (Abstract Rings) */}
                <div className="absolute -top-1/3 -left-1/9  pointer-events-none -z-10">
                    <Image src={"/infinity.png"} alt={""} width={500} height={500}/>
                </div>
                <div className="absolute bottom-[-10%] -right-1/6 pointer-events-none -z-10">
                    <Image src={"/link.png"} alt={""} width={500} height={500}/>
                </div>
            </div>
            <MissionVisionSection/>
        </section>
    );
}