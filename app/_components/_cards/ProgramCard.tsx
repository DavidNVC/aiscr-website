import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  href: string;
  learnMore: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function ProgramCard({
  title,
  description,
  href,
  learnMore,
  imageSrc,
  imageAlt = "",
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl overflow-hidden relative min-h-138"
    >
      {/* Image — top ~60% */}
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute bottom-0 h-6/14 px-6 pb-8 py-3 flex flex-col gap-1 justify-between mt-auto bg-black/30 backdrop-blur-lg">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug text-light-blue">
              {title}
            </h3>

            <p
              className="relative text-[15px] leading-relaxed"
              style={{ color: "rgba(200,205,220,0.75)" }}
            >
              {description}
            </p>
          </div>

          <div className="relative mt-2 flex items-center gap-2 text-white font-medium text-[15px] group-hover:gap-3 transition-all duration-200">
            <span>{learnMore}</span>
            <span className="text-lg leading-none">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
