import Image from "next/image";

interface PillarCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export default function PillarCard({ title, description, imageSrc }: PillarCardProps) {
    return (
        <div className="flex flex-col text-left">
            <div className="relative h-[200px] sm:h-[250px] w-full rounded-xl overflow-hidden mb-6">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-xl font-semibold text-[#1a3673] mb-2">
                {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}