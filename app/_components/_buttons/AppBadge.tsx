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
      className={`badge h-11 inline-flex items-center justify-center text-[#393939] font-light py-3 px-6  rounded-full ${className || ""} inline-block gap-1`}
    >
      <Image src="/sparkle.svg" alt="Badge" width={20} height={20} />
      {children}
    </span>
  );
}
