import {useTranslations} from "next-intl";
import MissionVisionCard from "@/app/_components/_cards/MissionVisionCard";

export default function MissionVisionSection() {
    const t = useTranslations("about.mission_vision");

    return (
        <div className="py-20 container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3673] mb-12 text-left">
                {t("title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MissionVisionCard
                    title={t("mission.label")}
                    description={t("mission.text")}
                    imageSrc="/images/mission.jpg"
                />
                <MissionVisionCard
                    title={t("vision.label")}
                    description={t("vision.text")}
                    imageSrc="/images/vision.jpg"
                />
            </div>
        </div>
    );
}