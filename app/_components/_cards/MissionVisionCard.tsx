import Image from "next/image";

interface MissionVisionCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export default function MissionVisionCard({title, description, imageSrc}: MissionVisionCardProps) {
    return (
        <div className="relative h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden group">
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
                className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-xl text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                    {description}
                </p>
            </div>
        </div>
    );
}