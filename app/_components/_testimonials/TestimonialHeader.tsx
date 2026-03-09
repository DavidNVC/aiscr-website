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
    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 mb-10 sm:mb-14">
      {/* Left — Image */}
      <div className="relative w-full md:w-[45%] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
          priority
        />
      </div>

      {/* Right — Text content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <AppBadge className="mb-4 sm:mb-5">{badge}</AppBadge>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-3 sm:mb-4 text-gradient"
          style={{ color: "#0a1636" }}
        >
          {title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-500 max-w-lg px-2 md:px-0">
          {description}
        </p>
      </div>
    </div>
  );
}
