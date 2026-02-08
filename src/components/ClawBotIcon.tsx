import React from "react";

interface ClawBotIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ClawBotIcon = ({
  className = "",
  size = 24,
  color = "currentColor",
}: ClawBotIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Robot head */}
    <rect
      x="14"
      y="18"
      width="36"
      height="28"
      rx="6"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
    {/* Antenna */}
    <line x1="32" y1="18" x2="32" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="8" r="3" fill={color} />
    {/* Left eye */}
    <circle cx="24" cy="30" r="4" fill={color} />
    {/* Right eye */}
    <circle cx="40" cy="30" r="4" fill={color} />
    {/* Mouth / grid */}
    <line x1="24" y1="39" x2="40" y2="39" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Left claw arm */}
    <path
      d="M14 32H8C6 32 4 30 4 28L2 22"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 22L0 18M2 22L5 19"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Right claw arm */}
    <path
      d="M50 32H56C58 32 60 30 60 28L62 22"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M62 22L64 18M62 22L59 19"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Legs */}
    <line x1="24" y1="46" x2="24" y2="54" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="40" y1="46" x2="40" y2="54" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Feet */}
    <line x1="20" y1="54" x2="28" y2="54" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="54" x2="44" y2="54" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default ClawBotIcon;
