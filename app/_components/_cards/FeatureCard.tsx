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
    <div className="relative overflow-hidden flex flex-col justify-end text-left rounded-[20px] min-h-80 border-12 border-[#D6E0FA]">
      {/* Grid background (light variant) */}
      <DarkGridBackground variant="white" withGradient={false} />

      {/* Top-left decorative image */}
      <div
        className="absolute top-0 left-0 z-10"
        style={{ width: "130px", height: "130px" }}
      >
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
      <div
        className="absolute bottom-0 right-0 z-10"
        style={{ width: "160px", height: "160px" }}
      >
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
      <div className="relative z-20 p-7 pt-0">
        <h3
          className="text-2xl font-bold mb-2 leading-snug"
          style={{ color: "#0a1636" }}
        >
          {title}
        </h3>
        <p
          className="text-[15px] leading-relaxed"
          style={{ color: "#4a5568", maxWidth: "260px" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
