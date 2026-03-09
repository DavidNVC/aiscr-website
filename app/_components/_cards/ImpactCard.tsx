import Image from "next/image";
import DarkGridBackground from "../_backgrounds/DarkGridBackground";

interface ImpactCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ImpactCard({
  icon,
  title,
  description,
}: ImpactCardProps) {
  return (
    <div className="relative overflow-hidden flex flex-col items-center text-center rounded-2xl p-8 pt-10 border border-slate-200">
      <DarkGridBackground variant="white" withGradient={false} />

      {/* Outer light-blue circle */}
      {/* Inner dark-blue circle */}
      <div className="relative z-10 flex justify-center items-center w-24 h-24 mb-6">
        {/* Outer light-blue circle with pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse" />

        {/* Inner dark-blue circle */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary-blue">
          <Image
            src={icon}
            alt={title}
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold mb-3 text-(--color-black-primary)">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-base leading-relaxed max-w-55 text-slate-600">
        {description}
      </p>
    </div>
  );
}
