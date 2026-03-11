import HeroSection from "@/app/[locale]/about/_components/HeroSection";
import MissionVisionSection from "@/app/[locale]/about/_components/MissionVisionSection";
import PillarsSection from "@/app/[locale]/about/_components/PillarsSection";
import FeaturesSection from "@/app/[locale]/about/_components/FeaturesSection";

export default function AboutPage() {
    return (
        <main className={"relative"}>
            <HeroSection/>
            <PillarsSection/>
            <FeaturesSection/>
        </main>
    )
}