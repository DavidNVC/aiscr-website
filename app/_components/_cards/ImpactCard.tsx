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
    <div className="relative overflow-hidden flex flex-col items-center text-center rounded-xl sm:rounded-2xl p-6 sm:p-8 pt-8 sm:pt-10 border border-slate-200">
      <DarkGridBackground variant="white" withGradient={false} />

      {/* Icon circles */}
      <div className="relative z-10 flex justify-center items-center w-18 h-18 sm:w-24 sm:h-24 mb-4 sm:mb-6">
        {/* Outer light-blue circle with pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse" />

        {/* Inner dark-blue circle */}
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-blue">
          <Image
            src={icon}
            alt={title}
            width={36}
            height={36}
            className="object-contain w-6 h-6 sm:w-9 sm:h-9"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-(--color-black-primary)">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-sm sm:text-base leading-relaxed max-w-55 text-slate-600">
        {description}
      </p>
    </div>
  );
}
