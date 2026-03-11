import { useTranslations } from "next-intl";
import GridBackground from "@/app/_components/_backgrounds/GridBackground";

export default function FeaturesSection() {
    const t = useTranslations("about.approach");

    const cards = [
        { key: "diagnose", icon: "diagnose-icon" },
        { key: "research", icon: "research-icon" },
        { key: "pilot", icon: "pilot-icon" },
        { key: "scale", icon: "scale-icon" },
    ];

    return (
        <section className="relative w-full bg-[#050b2c] py-20 overflow-hidden rounded-2xl sm:rounded-4xl">
            <GridBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                    {t("badge")}
                </h3>

                <h2 className="text-3xl md:text-5xl font-bold text-[#e2f97b] mb-6">
                    {t("title")}
                </h2>

                <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-relaxed">
                    {t("description")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map((card) => (
                        <FeatureCard
                            key={card.key}
                            title={t(`cards.${card.key}`)}
                            icon={card.icon} // Adapte selon comment ton FeatureCard gère les icônes
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, icon }: { title: string; icon: string }) {
    return (
        <div className="flex flex-col gap-2">
            {/* Top Box */}
            <div className="bg-[#111e55]/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-40 flex flex-col justify-between items-start text-left relative overflow-hidden">
                <span className="text-white text-2xl font-medium">{title}</span>
                <div className="self-end opacity-80">
                    {/* Remplace par ton composant d'icône réel */}
                    <div className="w-8 h-8 border-b-2 border-r-2 border-pink-500" />
                </div>
            </div>

            {/* Bottom Box (Small) */}
            <div className="bg-[#111e55]/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 h-16 flex items-center">
                <div className="w-6 h-6 border-b-2 border-r-2 border-pink-500/50" />
            </div>
        </div>
    );
}
