type NotFoundIconProps = {
  size?: number;
  color?: string;
};

export default function NotFoundIcon({
  size = 200,
  color = "#1976E8",
}: NotFoundIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back document */}
      <path
        d="M50 80L125 10H330C338 10 345 17 345 25V370"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M50 80L125 10H330C338 10 345 17 345 25V370L50 370V80Z"
        fill={`${color}30`}
      />

      {/* Main document */}
      <path
        d="M25 85L100 10H315C323 10 330 17 330 25V400H25V85Z"
        fill="white"
        stroke={color}
        strokeWidth="14"
        strokeLinejoin="round"
      />

      {/* Fold */}
      <path
        d="M25 85H100V10"
        fill={`${color}80`}
        stroke={color}
        strokeWidth="14"
        strokeLinejoin="round"
      />

      {/* Text */}
      <path
        d="M135 55H280"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M135 90H280"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M200 125H280"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M200 160H280"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
      />

      {/* Magnifying glass */}
      <circle
        cx="190"
        cy="285"
        r="100"
        fill={`${color}30`}
        stroke={color}
        strokeWidth="14"
      />

      <circle
        cx="190"
        cy="285"
        r="72"
        fill={`${color}15`}
        stroke={color}
        strokeWidth="14"
      />

      {/* X */}
      <path
        d="M160 255L220 315"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M220 255L160 315"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Handle */}
      <path
        d="M255 350L290 385"
        stroke={color}
        strokeWidth="35"
        strokeLinecap="round"
      />

      <path
        d="M280 375L355 450"
        stroke={color}
        strokeWidth="55"
        strokeLinecap="round"
      />

      <path
        d="M280 375L355 450"
        stroke={`${color}80`}
        strokeWidth="35"
        strokeLinecap="round"
      />
    </svg>
  );
}