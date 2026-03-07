import Image from "next/image";
import AppBadge from "@/app/_components/_buttons/AppBadge";

interface TestimonialHeaderProps {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function TestimonialHeader({
  badge,
  title,
  description,
  imageSrc,
}: TestimonialHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-14">
      {/* Left — Image */}
      <div className="relative w-full md:w-[45%] aspect-4/3 rounded-2xl overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right — Text content */}
      <div className="flex flex-col items-start text-left">
        <AppBadge className="mb-5">{badge}</AppBadge>

        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4 text-gradient"
          style={{ color: "#0a1636" }}
        >
          {title}
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-slate-500 max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
