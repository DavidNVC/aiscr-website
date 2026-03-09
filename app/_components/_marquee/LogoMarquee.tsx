import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

interface LogoMarqueeProps {
  partners: Partner[];
  /** Animation duration in seconds */
  duration?: number;
  /** Direction of the marquee */
  direction?: "left" | "right";
}

export default function LogoMarquee({
  partners,
  duration = 30,
  direction = "left",
}: LogoMarqueeProps) {
  // Duplicate the partners array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex items-center gap-16 md:gap-24"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center shrink-0 h-12 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width ?? 140}
              height={partner.height ?? 50}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
