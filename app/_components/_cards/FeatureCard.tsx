import Image from "next/image";
import DarkGridBackground from "../_backgrounds/DarkGridBackground";

interface FeatureCardProps {
  title: string;
  description: string;
  topImage: string;
  bottomImage: string;
}

export default function FeatureCard({
  title,
  description,
  topImage,
  bottomImage,
}: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden flex flex-col justify-end text-left rounded-xl sm:rounded-[20px] min-h-60 sm:min-h-72 md:min-h-80 border-8 sm:border-12 border-[#D6E0FA]">
      {/* Grid background (light variant) */}
      <DarkGridBackground variant="white" withGradient={false} />

      {/* Top-left decorative image */}
      <div className="absolute top-0 left-0 z-10 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px]">
        <Image
          src={topImage}
          alt=""
          fill
          className="object-contain object-top-left"
          style={{ objectPosition: "top left" }}
          aria-hidden="true"
        />
      </div>

      {/* Bottom-right decorative image */}
      <div className="absolute bottom-0 right-0 z-10 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px]">
        <Image
          src={bottomImage}
          alt=""
          fill
          className="object-contain object-bottom-right"
          style={{ objectPosition: "bottom right" }}
          aria-hidden="true"
        />
      </div>

      {/* Text content — bottom-left */}
      <div className="relative z-20 p-4 sm:p-5 md:p-7 pt-0">
        <h3
          className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 leading-snug"
          style={{ color: "#0a1636" }}
        >
          {title}
        </h3>
        <p
          className="text-xs sm:text-sm md:text-[15px] leading-relaxed"
          style={{ color: "#4a5568", maxWidth: "260px" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
