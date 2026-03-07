interface DarkGridBackgroundProps {
  variant?: "dark" | "light" | "white";
  withGradient?: boolean;
}

export default function DarkGridBackground({
  variant = "dark",
  withGradient = true,
}: DarkGridBackgroundProps) {
  const isWhite = variant === "white";
  const isLight = variant === "light";
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* ── Base ── */}
      <div
        className={`absolute inset-0 ${isWhite || isLight ? "bg-white" : ""}`}
        style={
          isDark
            ? {
                background:
                  "linear-gradient(160deg, #060d1f 0%, #0a1636 50%, #080e24 100%)",
              }
            : undefined
        }
      />

      {/* ── Grid 96×96 ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isWhite
            ? `linear-gradient(rgba(180,200,255,0.30) 1px, transparent 1px),
               linear-gradient(90deg, rgba(180,200,255,0.30) 1px, transparent 1px)`
            : isLight
              ? `linear-gradient(rgba(180,200,255,0.35) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(180,200,255,0.35) 1px, transparent 1px)`
              : `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "96px 96px",
        }}
      />

      {/* ── Blobs — skipped for "white" variant ── */}
      {!isWhite && (
        <>
          {/* ── Blob 1 — top-left, large horizontal sweep ── */}
          <div
            className="absolute blur-[36px] rounded-[40%]"
            style={{
              top: "-20%",
              left: "-15%",
              width: "80vw",
              height: "60vw",
              maxWidth: "900px",
              maxHeight: "680px",
              background: isLight
                ? "radial-gradient(70% 45% at 30% 50%, rgba(180,200,255,0.30) 0%, rgba(210,220,255,0.12) 60%, transparent 100%)"
                : "radial-gradient(70% 45% at 30% 50%, rgba(44, 92, 213, 0.38) 0%, rgba(25, 59, 143, 0.15) 60%, transparent 100%)",
              animation: "dark-bg-blob-1 20s ease-in-out infinite",
            }}
          />

          {/* ── Blob 2 — bottom-right, wide sweep ── */}
          <div
            className="absolute blur-2xl rounded-[38%]"
            style={{
              bottom: "-25%",
              right: "-10%",
              width: "75vw",
              height: "55vw",
              maxWidth: "860px",
              maxHeight: "640px",
              background: isLight
                ? "radial-gradient(65% 40% at 65% 55%, rgba(190,210,255,0.25) 0%, rgba(220,230,255,0.10) 60%, transparent 100%)"
                : "radial-gradient(65% 40% at 65% 55%, rgba(44, 92, 213, 0.32) 0%, rgba(13, 29, 69, 0.14) 60%, transparent 100%)",
              animation: "dark-bg-blob-2 26s ease-in-out infinite",
            }}
          />

          {/* ── Blob 3 — center accent, horizontal band ── */}
          <div
            className="absolute blur-[48px] rounded-[35%]"
            style={{
              top: "35%",
              left: "20%",
              width: "60vw",
              height: "30vw",
              maxWidth: "700px",
              maxHeight: "360px",
              background: isLight
                ? "radial-gradient(80% 50% at 50% 50%, rgba(200,215,255,0.18) 0%, transparent 100%)"
                : "radial-gradient(80% 50% at 50% 50%, rgba(60, 110, 230, 0.18) 0%, transparent 100%)",
              animation: "dark-bg-blob-3 17s ease-in-out infinite",
            }}
          />
        </>
      )}

      <style>{`
        @keyframes dark-bg-blob-1 {
          0%   { transform: translate(0px,   0px)  scale(1);    }
          33%  { transform: translate(50px, -30px) scale(1.06); }
          66%  { transform: translate(-30px, 20px) scale(0.96); }
          100% { transform: translate(0px,   0px)  scale(1);    }
        }
        @keyframes dark-bg-blob-2 {
          0%   { transform: translate(0px,   0px)  scale(1);    }
          40%  { transform: translate(-45px, 25px) scale(1.05); }
          75%  { transform: translate(30px, -20px) scale(0.97); }
          100% { transform: translate(0px,   0px)  scale(1);    }
        }
        @keyframes dark-bg-blob-3 {
          0%   { transform: translate(0px,  0px)  scale(1);    }
          50%  { transform: translate(35px, 15px) scale(1.07); }
          100% { transform: translate(0px,  0px)  scale(1);    }
        }
      `}</style>
    </div>
  );
}
