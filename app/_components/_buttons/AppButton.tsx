interface AppButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: AppButtonType;
  className?: string;
}

export enum AppButtonType {
  Primary = "primary",
  Secondary = "secondary",
}

export default function AppButton({
  onClick,
  children,
  type,
  className,
}: AppButtonProps) {
  if (type === AppButtonType.Secondary) {
    return (
      <button
        onClick={onClick}
        className={`cursor-pointer text-sm sm:text-base px-4 sm:px-6 rounded-lg h-11 sm:h-13 relative ${className || ""}`}
        style={{
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(180deg, #2c5cd5 0%, #193b8f 100%) border-box",
          border: "1px solid transparent",
        }}
      >
        <span
          style={{
            background: "linear-gradient(180deg, #2c5cd5 0%, #193b8f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      className={`bg-primary-button cursor-pointer text-sm sm:text-base px-4 sm:px-6 text-white rounded-lg h-11 sm:h-13 ${className || ""}`}
      onClick={onClick}
    >
      <span className="text-white">{children}</span>
    </button>
  );
}
