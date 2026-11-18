import { cn } from "@/src/lib/utils";

interface FirmLogoProps {
  size?: number;
  className?: string;
  showFrame?: boolean;
}

/**
 * SJ Associates official heraldic crest emblem matching the firm shield,
 * five stars, and golden balance scales, framed cleanly for digital headers and cards.
 */
export function FirmLogo({ size = 36, className, showFrame = true }: FirmLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0 select-none",
        showFrame &&
          "rounded-xl border border-[#0A2536]/15 bg-white shadow-2xs p-1",
        className
      )}
      style={{
        width: size + (showFrame ? 8 : 0),
        height: size + (showFrame ? 8 : 0)
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shield Outer Gold Rim */}
        <path
          d="M32 4C22 10 12 11.5 9 12V30.5C9 45.2 19.3 55.6 32 60C44.7 55.6 55 45.2 55 30.5V12C52 11.5 42 10 32 4Z"
          fill="#4A0D12"
          stroke="#D4A32C"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        {/* Inner Subtle Rim */}
        <path
          d="M32 8.2C23.6 13 15.2 14.5 12.6 15V30.2C12.6 42.6 21.1 51.5 32 55.5C42.9 51.5 51.4 42.6 51.4 30.2V15C48.8 14.5 40.4 13 32 8.2Z"
          stroke="#E6C260"
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Five Stars Arch (matching firm emblem) */}
        <circle cx="32" cy="14.2" r="1.4" fill="#F2C94C" />
        <circle cx="24.5" cy="16.2" r="1.15" fill="#F2C94C" />
        <circle cx="39.5" cy="16.2" r="1.15" fill="#F2C94C" />
        <circle cx="18.2" cy="19.8" r="1" fill="#F2C94C" />
        <circle cx="45.8" cy="19.8" r="1" fill="#F2C94C" />

        {/* Central Balance Pillar & Base */}
        <path
          d="M32 19.5V47M24.5 47H39.5M27.5 44.5H36.5"
          stroke="#F2C94C"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        {/* Crossbeam */}
        <path
          d="M17.5 26.2C22 25 27.2 25 32 23.5C36.8 25 42 25 46.5 26.2"
          stroke="#F2C94C"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Left Scale Chains & Pan */}
        <path
          d="M19.5 26.2L15.2 37.5M19.5 26.2L23.8 37.5"
          stroke="#E6C260"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M14.2 37.5C14.2 40.4 16.6 42.2 19.5 42.2C22.4 42.2 24.8 40.4 24.8 37.5H14.2Z"
          fill="#F2C94C"
        />
        {/* Right Scale Chains & Pan */}
        <path
          d="M44.5 26.2L40.2 37.5M44.5 26.2L48.8 37.5"
          stroke="#E6C260"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M39.2 37.5C39.2 40.4 41.6 42.2 44.5 42.2C47.4 42.2 49.8 40.4 49.8 37.5H39.2Z"
          fill="#F2C94C"
        />
      </svg>
    </span>
  );
}
