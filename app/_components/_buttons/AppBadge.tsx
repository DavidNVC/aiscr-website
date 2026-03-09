import "./badge.css";
import Image from "next/image";

export default function AppBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`badge h-9 sm:h-11 inline-flex items-center justify-center text-[#393939] font-light py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base ${className || ""} inline-block gap-1`}
    >
      <Image
        src="/sparkle.svg"
        alt="Badge"
        width={20}
        height={20}
        className="w-4 h-4 sm:w-5 sm:h-5"
      />
      {children}
    </span>
  );
}
