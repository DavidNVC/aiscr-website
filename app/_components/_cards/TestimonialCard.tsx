import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 h-full shadow-sm">
      {/* Quote */}
      <div className="mb-8">
        <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">
          <span className="text-lg font-bold text-(--color-black-primary)">
            &ldquo;
          </span>
          {quote}
          <span className="text-lg font-bold text-(--color-black-primary)">
            &rdquo;
          </span>
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 shrink-0">
          {avatarSrc ? (
            <Image src={avatarSrc} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-blue-200 to-indigo-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-(--color-black-primary)">
            {name}
          </span>
          <span className="text-xs text-slate-500">{role}</span>
        </div>
      </div>
    </div>
  );
}
