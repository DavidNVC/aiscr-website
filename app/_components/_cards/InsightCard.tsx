import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  learnMore: string;
  href?: string;
}

export default function InsightCard({
  imageSrc,
  date,
  title,
  description,
  learnMore,
  href = "#",
}: InsightCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-[0px_2px_14.3px_9px_#0000001A]">
      {/* Image Container */}
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-xs text-gray-500 mb-2">{date}</span>

        <h3 className="text-2xl line-clamp-1 font-bold text-[#0a1636] mb-3 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>

        {/* Learn More Link */}
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-blue hover:gap-3 transition-all duration-300"
        >
          {learnMore}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3.333 8h9.334M8.667 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
