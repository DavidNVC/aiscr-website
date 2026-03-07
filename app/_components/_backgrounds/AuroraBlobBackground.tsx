interface BlobConfig {
  /** CSS position values */
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  /** Size of the blob */
  width: string;
  height: string;
  /** Radial gradient or any CSS background */
  background: string;
  /** Blur amount in px */
  blur?: number;
  /** Border radius e.g. "40%" or "50%" */
  borderRadius?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** Unique keyframes: array of { offset, transform } */
  keyframes?: { offset: string; transform: string }[];
}

interface AuroraBlobBackgroundProps {
  /** Use a built-in preset */
  preset?: "mint" | "ocean" | "sunset" | "lavender" | "pastel";
  /** Or pass fully custom blobs (overrides preset) */
  blobs?: BlobConfig[];
  /** Base background color/gradient */
  baseBg?: string;
  /** Additional CSS class on the wrapper */
  className?: string;
}

/* ────────────────────────────────────────────
 *  Presets
 * ──────────────────────────────────────────── */

const PRESET_MINT: BlobConfig[] = [
  {
    // Bottom-left — large mint wash
    bottom: "-18%",
    left: "-12%",
    width: "60vw",
    height: "50vw",
    background:
      "radial-gradient(60% 55% at 35% 60%, rgba(180,232,222,0.55) 0%, rgba(190,240,230,0.25) 50%, transparent 100%)",
    blur: 60,
    borderRadius: "45%",
    duration: 4,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "30%", transform: "translate(120px, -80px) scale(1.18)" },
      { offset: "60%", transform: "translate(-60px, 50px) scale(0.85)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Top-right — tall mint column
    top: "-10%",
    right: "-5%",
    width: "30vw",
    height: "70vh",
    background:
      "radial-gradient(55% 65% at 55% 40%, rgba(185,235,225,0.50) 0%, rgba(195,242,233,0.20) 55%, transparent 100%)",
    blur: 50,
    borderRadius: "42%",
    duration: 5,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "40%", transform: "translate(-100px, 70px) scale(1.20)" },
      { offset: "70%", transform: "translate(50px, -50px) scale(0.82)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Subtle center accent
    top: "40%",
    left: "25%",
    width: "45vw",
    height: "25vw",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(190,238,228,0.18) 0%, transparent 100%)",
    blur: 70,
    borderRadius: "50%",
    duration: 3,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(80px, 40px) scale(1.20)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_OCEAN: BlobConfig[] = [
  {
    top: "-15%",
    left: "-10%",
    width: "65vw",
    height: "50vw",
    background:
      "radial-gradient(60% 50% at 35% 45%, rgba(140,200,240,0.45) 0%, rgba(160,215,250,0.15) 55%, transparent 100%)",
    blur: 55,
    borderRadius: "44%",
    duration: 4,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "35%", transform: "translate(130px, -70px) scale(1.18)" },
      { offset: "65%", transform: "translate(-80px, 60px) scale(0.84)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    bottom: "-20%",
    right: "-8%",
    width: "55vw",
    height: "45vw",
    background:
      "radial-gradient(55% 55% at 60% 55%, rgba(120,185,235,0.40) 0%, rgba(150,210,250,0.12) 60%, transparent 100%)",
    blur: 60,
    borderRadius: "40%",
    duration: 5,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "45%", transform: "translate(-120px, 80px) scale(1.20)" },
      { offset: "80%", transform: "translate(70px, -45px) scale(0.85)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "30%",
    left: "30%",
    width: "40vw",
    height: "22vw",
    background:
      "radial-gradient(75% 50% at 50% 50%, rgba(135,195,245,0.16) 0%, transparent 100%)",
    blur: 65,
    borderRadius: "50%",
    duration: 3,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(70px, 30px) scale(1.22)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_SUNSET: BlobConfig[] = [
  {
    bottom: "-15%",
    left: "-10%",
    width: "55vw",
    height: "50vw",
    background:
      "radial-gradient(60% 55% at 40% 60%, rgba(255,190,140,0.45) 0%, rgba(255,210,170,0.15) 55%, transparent 100%)",
    blur: 55,
    borderRadius: "43%",
    duration: 4,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "33%", transform: "translate(110px, -70px) scale(1.18)" },
      { offset: "66%", transform: "translate(-70px, 45px) scale(0.84)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "-12%",
    right: "-6%",
    width: "45vw",
    height: "55vh",
    background:
      "radial-gradient(55% 60% at 55% 40%, rgba(255,160,180,0.40) 0%, rgba(255,185,200,0.12) 55%, transparent 100%)",
    blur: 50,
    borderRadius: "45%",
    duration: 5,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "40%", transform: "translate(-90px, 60px) scale(1.20)" },
      { offset: "75%", transform: "translate(60px, -35px) scale(0.85)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "35%",
    left: "20%",
    width: "50vw",
    height: "25vw",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(255,200,160,0.14) 0%, transparent 100%)",
    blur: 65,
    borderRadius: "50%",
    duration: 3,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(80px, 35px) scale(1.22)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_LAVENDER: BlobConfig[] = [
  {
    top: "-18%",
    right: "-10%",
    width: "55vw",
    height: "50vw",
    background:
      "radial-gradient(60% 55% at 60% 40%, rgba(190,170,240,0.45) 0%, rgba(210,195,250,0.15) 55%, transparent 100%)",
    blur: 55,
    borderRadius: "44%",
    duration: 4,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "35%", transform: "translate(-110px, 70px) scale(1.18)" },
      { offset: "70%", transform: "translate(70px, -50px) scale(0.84)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    bottom: "-15%",
    left: "-8%",
    width: "50vw",
    height: "45vw",
    background:
      "radial-gradient(55% 55% at 35% 60%, rgba(200,180,245,0.40) 0%, rgba(220,205,255,0.12) 55%, transparent 100%)",
    blur: 60,
    borderRadius: "42%",
    duration: 5,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "40%", transform: "translate(120px, -60px) scale(1.20)" },
      { offset: "75%", transform: "translate(-55px, 45px) scale(0.85)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "30%",
    left: "25%",
    width: "42vw",
    height: "24vw",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(195,175,245,0.16) 0%, transparent 100%)",
    blur: 68,
    borderRadius: "50%",
    duration: 3,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(65px, 30px) scale(1.22)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_PASTEL: BlobConfig[] = [
  {
    // Bottom-left — warm peach / yellow wash
    bottom: "-15%",
    left: "-10%",
    width: "50vw",
    height: "50vw",
    background:
      "radial-gradient(60% 55% at 35% 65%, rgba(255,220,180,0.50) 0%, rgba(255,235,205,0.20) 55%, transparent 100%)",
    blur: 65,
    borderRadius: "45%",
    duration: 4,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "30%", transform: "translate(130px, -70px) scale(1.20)" },
      { offset: "65%", transform: "translate(-55px, 45px) scale(0.82)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Center — soft pink / rose bloom
    top: "25%",
    left: "20%",
    width: "55vw",
    height: "50vw",
    background:
      "radial-gradient(55% 55% at 50% 55%, rgba(240,190,210,0.45) 0%, rgba(245,210,225,0.18) 55%, transparent 100%)",
    blur: 70,
    borderRadius: "48%",
    duration: 3,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "40%", transform: "translate(-100px, 55px) scale(1.18)" },
      { offset: "75%", transform: "translate(70px, -35px) scale(0.84)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Top-right — light sky blue
    top: "-12%",
    right: "-8%",
    width: "45vw",
    height: "55vh",
    background:
      "radial-gradient(55% 60% at 60% 38%, rgba(185,220,250,0.50) 0%, rgba(200,230,255,0.18) 55%, transparent 100%)",
    blur: 55,
    borderRadius: "42%",
    duration: 5,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "35%", transform: "translate(-110px, 65px) scale(1.20)" },
      { offset: "70%", transform: "translate(60px, -45px) scale(0.84)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Bridge — faint lavender between pink and blue
    top: "15%",
    left: "40%",
    width: "40vw",
    height: "30vw",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(210,195,240,0.22) 0%, rgba(220,210,250,0.08) 60%, transparent 100%)",
    blur: 75,
    borderRadius: "50%",
    duration: 3,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(75px, 30px) scale(1.25)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESETS: Record<string, BlobConfig[]> = {
  mint: PRESET_MINT,
  ocean: PRESET_OCEAN,
  sunset: PRESET_SUNSET,
  lavender: PRESET_LAVENDER,
  pastel: PRESET_PASTEL,
};

/* ────────────────────────────────────────────
 *  Helpers
 * ──────────────────────────────────────────── */

function buildKeyframeName(index: number) {
  return `aurora-blob-${index}`;
}

function buildKeyframesCSS(blobs: BlobConfig[]): string {
  return blobs
    .map((blob, i) => {
      const name = buildKeyframeName(i);
      const frames = blob.keyframes ?? [
        { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
        { offset: "50%", transform: "translate(100px, 50px) scale(1.20)" },
        { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
      ];
      const body = frames
        .map((f) => `  ${f.offset} { transform: ${f.transform}; }`)
        .join("\n");
      return `@keyframes ${name} {\n${body}\n}`;
    })
    .join("\n");
}

/* ────────────────────────────────────────────
 *  Component
 * ──────────────────────────────────────────── */

export default function AuroraBlobBackground({
  preset = "mint",
  blobs,
  baseBg = "#ffffff",
  className,
}: AuroraBlobBackgroundProps) {
  const resolvedBlobs = blobs ?? PRESETS[preset] ?? PRESET_MINT;

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      {/* Base fill */}
      <div className="absolute inset-0" style={{ background: baseBg }} />

      {/* Blobs */}
      {resolvedBlobs.map((blob, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            width: blob.width,
            height: blob.height,
            background: blob.background,
            filter: `blur(${blob.blur ?? 55}px)`,
            borderRadius: blob.borderRadius ?? "45%",
            animation: `${buildKeyframeName(i)} ${blob.duration ?? 4}s ease-in-out infinite`,
            willChange: "transform",
          }}
        />
      ))}

      {/* Inject keyframes */}
      <style>{buildKeyframesCSS(resolvedBlobs)}</style>
    </div>
  );
}
