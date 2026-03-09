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
  preset?: "mint" | "mint-pastel" | "ocean" | "sunset" | "lavender" | "pastel";
  /** Or pass fully custom blobs (overrides preset) */
  blobs?: BlobConfig[];
  /** Base background color/gradient */
  baseBg?: string;
  /** Additional CSS class on the wrapper */
  className?: string;
}

/* ────────────────────────────────────────────
 *  Presets - Enhanced for better visibility and smoother motion
 * ──────────────────────────────────────────── */

const PRESET_MINT: BlobConfig[] = [
  {
    // Bottom-left — large mint wash
    bottom: "-10%",
    left: "-8%",
    width: "65vw",
    height: "55vw",
    background:
      "radial-gradient(60% 55% at 35% 60%, rgba(150,220,205,0.7) 0%, rgba(170,235,220,0.4) 45%, transparent 100%)",
    blur: 45,
    borderRadius: "45%",
    duration: 12,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "25%", transform: "translate(80px, -50px) scale(1.1)" },
      { offset: "50%", transform: "translate(150px, -30px) scale(1.05)" },
      { offset: "75%", transform: "translate(60px, 40px) scale(0.95)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Top-right — tall mint column
    top: "-5%",
    right: "-3%",
    width: "35vw",
    height: "75vh",
    background:
      "radial-gradient(55% 65% at 55% 40%, rgba(160,230,215,0.65) 0%, rgba(180,240,228,0.35) 50%, transparent 100%)",
    blur: 40,
    borderRadius: "42%",
    duration: 15,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(-60px, 40px) scale(1.08)" },
      { offset: "40%", transform: "translate(-100px, 80px) scale(1.15)" },
      { offset: "60%", transform: "translate(-40px, 60px) scale(1.05)" },
      { offset: "80%", transform: "translate(30px, -30px) scale(0.92)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Center accent
    top: "35%",
    left: "20%",
    width: "50vw",
    height: "30vw",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(170,235,220,0.35) 0%, transparent 100%)",
    blur: 50,
    borderRadius: "50%",
    duration: 10,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "33%", transform: "translate(100px, 30px) scale(1.15)" },
      { offset: "66%", transform: "translate(50px, -20px) scale(1.08)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_OCEAN: BlobConfig[] = [
  {
    top: "-10%",
    left: "-8%",
    width: "70vw",
    height: "55vw",
    background:
      "radial-gradient(60% 50% at 35% 45%, rgba(100,180,240,0.6) 0%, rgba(130,200,250,0.3) 50%, transparent 100%)",
    blur: 40,
    borderRadius: "44%",
    duration: 14,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "25%", transform: "translate(100px, -50px) scale(1.12)" },
      { offset: "50%", transform: "translate(160px, 20px) scale(1.05)" },
      { offset: "75%", transform: "translate(60px, 70px) scale(0.92)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    bottom: "-15%",
    right: "-5%",
    width: "60vw",
    height: "50vw",
    background:
      "radial-gradient(55% 55% at 60% 55%, rgba(80,160,230,0.55) 0%, rgba(120,195,250,0.25) 55%, transparent 100%)",
    blur: 45,
    borderRadius: "40%",
    duration: 16,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(-80px, 50px) scale(1.1)" },
      { offset: "40%", transform: "translate(-140px, 100px) scale(1.18)" },
      { offset: "60%", transform: "translate(-60px, 60px) scale(1.05)" },
      { offset: "80%", transform: "translate(50px, -30px) scale(0.9)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "25%",
    left: "25%",
    width: "45vw",
    height: "28vw",
    background:
      "radial-gradient(75% 50% at 50% 50%, rgba(110,185,245,0.3) 0%, transparent 100%)",
    blur: 50,
    borderRadius: "50%",
    duration: 11,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(90px, 40px) scale(1.2)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_SUNSET: BlobConfig[] = [
  {
    bottom: "-10%",
    left: "-8%",
    width: "60vw",
    height: "55vw",
    background:
      "radial-gradient(60% 55% at 40% 60%, rgba(255,170,120,0.6) 0%, rgba(255,200,160,0.3) 50%, transparent 100%)",
    blur: 40,
    borderRadius: "43%",
    duration: 13,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "25%", transform: "translate(90px, -50px) scale(1.12)" },
      { offset: "50%", transform: "translate(140px, 10px) scale(1.05)" },
      { offset: "75%", transform: "translate(50px, 60px) scale(0.92)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "-8%",
    right: "-4%",
    width: "50vw",
    height: "60vh",
    background:
      "radial-gradient(55% 60% at 55% 40%, rgba(255,140,165,0.55) 0%, rgba(255,175,195,0.25) 50%, transparent 100%)",
    blur: 38,
    borderRadius: "45%",
    duration: 15,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(-60px, 40px) scale(1.1)" },
      { offset: "40%", transform: "translate(-110px, 80px) scale(1.18)" },
      { offset: "60%", transform: "translate(-50px, 50px) scale(1.05)" },
      { offset: "80%", transform: "translate(40px, -25px) scale(0.9)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "30%",
    left: "15%",
    width: "55vw",
    height: "30vw",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(255,185,145,0.28) 0%, transparent 100%)",
    blur: 50,
    borderRadius: "50%",
    duration: 10,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(100px, 45px) scale(1.2)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_LAVENDER: BlobConfig[] = [
  {
    top: "-12%",
    right: "-8%",
    width: "60vw",
    height: "55vw",
    background:
      "radial-gradient(60% 55% at 60% 40%, rgba(170,150,235,0.6) 0%, rgba(200,185,250,0.3) 50%, transparent 100%)",
    blur: 40,
    borderRadius: "44%",
    duration: 14,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "25%", transform: "translate(-80px, 50px) scale(1.12)" },
      { offset: "50%", transform: "translate(-130px, 90px) scale(1.05)" },
      { offset: "75%", transform: "translate(-40px, 40px) scale(0.92)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    bottom: "-10%",
    left: "-5%",
    width: "55vw",
    height: "50vw",
    background:
      "radial-gradient(55% 55% at 35% 60%, rgba(185,165,245,0.55) 0%, rgba(210,195,255,0.25) 50%, transparent 100%)",
    blur: 45,
    borderRadius: "42%",
    duration: 16,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(80px, -40px) scale(1.1)" },
      { offset: "40%", transform: "translate(140px, -70px) scale(1.18)" },
      { offset: "60%", transform: "translate(70px, -20px) scale(1.05)" },
      { offset: "80%", transform: "translate(-30px, 35px) scale(0.9)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    top: "25%",
    left: "20%",
    width: "48vw",
    height: "28vw",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(180,160,245,0.3) 0%, transparent 100%)",
    blur: 52,
    borderRadius: "50%",
    duration: 11,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "50%", transform: "translate(85px, 35px) scale(1.2)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_PASTEL: BlobConfig[] = [
  {
    // Left — soft cyan/blue wash
    top: "0%",
    left: "-10%",
    width: "55vw",
    height: "100%",
    background:
      "radial-gradient(60% 50% at 30% 50%, rgba(180,220,250,0.7) 0%, rgba(200,235,255,0.35) 45%, transparent 100%)",
    blur: 50,
    borderRadius: "45%",
    duration: 18,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(60px, -30px) scale(1.05)" },
      { offset: "40%", transform: "translate(100px, 20px) scale(1.1)" },
      { offset: "60%", transform: "translate(70px, 50px) scale(1.05)" },
      { offset: "80%", transform: "translate(20px, 20px) scale(0.98)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Center — soft pink / rose bloom
    top: "20%",
    left: "25%",
    width: "50vw",
    height: "60%",
    background:
      "radial-gradient(55% 55% at 50% 50%, rgba(250,200,220,0.6) 0%, rgba(255,220,235,0.3) 50%, transparent 100%)",
    blur: 55,
    borderRadius: "50%",
    duration: 14,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "25%", transform: "translate(-50px, 30px) scale(1.08)" },
      { offset: "50%", transform: "translate(-80px, 60px) scale(1.12)" },
      { offset: "75%", transform: "translate(-30px, 30px) scale(1.02)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Right — warm peach / orange tint
    top: "10%",
    right: "-8%",
    width: "50vw",
    height: "80%",
    background:
      "radial-gradient(55% 60% at 65% 50%, rgba(255,225,200,0.65) 0%, rgba(255,240,220,0.3) 50%, transparent 100%)",
    blur: 50,
    borderRadius: "45%",
    duration: 16,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(-50px, -25px) scale(1.06)" },
      { offset: "40%", transform: "translate(-90px, 15px) scale(1.1)" },
      { offset: "60%", transform: "translate(-60px, 45px) scale(1.04)" },
      { offset: "80%", transform: "translate(-20px, 15px) scale(0.98)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Subtle top accent — very soft lavender
    top: "-5%",
    left: "30%",
    width: "40vw",
    height: "35%",
    background:
      "radial-gradient(70% 50% at 50% 50%, rgba(220,210,250,0.4) 0%, rgba(230,225,255,0.15) 55%, transparent 100%)",
    blur: 60,
    borderRadius: "50%",
    duration: 12,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "33%", transform: "translate(60px, 25px) scale(1.1)" },
      { offset: "66%", transform: "translate(30px, 50px) scale(1.05)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESET_MINT_PASTEL: BlobConfig[] = [
  {
    // Left — soft mint-cyan blend
    top: "5%",
    left: "-8%",
    width: "55vw",
    height: "90%",
    background:
      "radial-gradient(60% 50% at 30% 50%, rgba(160,225,215,0.6) 0%, rgba(185,235,225,0.3) 45%, transparent 100%)",
    blur: 48,
    borderRadius: "45%",
    duration: 16,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(50px, -20px) scale(1.03)" },
      { offset: "40%", transform: "translate(80px, 10px) scale(1.07)" },
      { offset: "60%", transform: "translate(60px, 40px) scale(1.02)" },
      { offset: "80%", transform: "translate(20px, 15px) scale(0.99)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Center — soft peach transitioning
    top: "25%",
    left: "30%",
    width: "45vw",
    height: "55%",
    background:
      "radial-gradient(55% 55% at 50% 50%, rgba(245,215,205,0.5) 0%, rgba(250,225,215,0.25) 50%, transparent 100%)",
    blur: 52,
    borderRadius: "50%",
    duration: 14,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "25%", transform: "translate(-30px, 20px) scale(1.05)" },
      { offset: "50%", transform: "translate(-50px, 40px) scale(1.08)" },
      { offset: "75%", transform: "translate(-20px, 20px) scale(1.02)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
  {
    // Right — warm mint-orange blend
    top: "15%",
    right: "-5%",
    width: "45vw",
    height: "70%",
    background:
      "radial-gradient(55% 60% at 65% 50%, rgba(235,220,185,0.55) 0%, rgba(245,230,200,0.25) 50%, transparent 100%)",
    blur: 50,
    borderRadius: "45%",
    duration: 17,
    keyframes: [
      { offset: "0%", transform: "translate(0px, 0px) scale(1)" },
      { offset: "20%", transform: "translate(-40px, -15px) scale(1.04)" },
      { offset: "40%", transform: "translate(-70px, 5px) scale(1.08)" },
      { offset: "60%", transform: "translate(-50px, 30px) scale(1.03)" },
      { offset: "80%", transform: "translate(-15px, 10px) scale(0.99)" },
      { offset: "100%", transform: "translate(0px, 0px) scale(1)" },
    ],
  },
];

const PRESETS: Record<string, BlobConfig[]> = {
  mint: PRESET_MINT,
  "mint-pastel": PRESET_MINT_PASTEL,
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
      className={`absolute inset-0 overflow-hidden ${className ?? ""} -z-10`}
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
            filter: `blur(${blob.blur ?? 50}px)`,
            borderRadius: blob.borderRadius ?? "45%",
            animation: `${buildKeyframeName(i)} ${blob.duration ?? 12}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            willChange: "transform",
            transformOrigin: "center center",
          }}
        />
      ))}

      {/* Inject keyframes */}
      <style>{buildKeyframesCSS(resolvedBlobs)}</style>
    </div>
  );
}
