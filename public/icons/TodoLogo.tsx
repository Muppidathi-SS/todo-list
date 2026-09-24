"use client";

import React from "react";

interface TodoLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

const TodoLogo = ({
  className = "",
  width = 220,
  height = 70,
  color = "currentColor",
}: TodoLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
      aria-label="Todo Logo"
      role="img"
    >
      {/* T */}
      <path
        d="M5 15H45V27H33V55H17V27H5V15Z"
        fill="currentColor"
      />

      {/* O - Check */}
      <circle
        cx="68"
        cy="35"
        r="20"
        fill="currentColor"
      />

      <path
        d="M59 35L65 41L77 29"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* D */}
      <path
        d="M91 15H107C121 15 130 23 130 35C130 47 121 55 107 55H91V15ZM103 27V43H107C113 27 117 30 117 35C117 40 113 43 107 43H103Z"
        fill="currentColor"
      />

      {/* O - X */}
      <circle
        cx="153"
        cy="35"
        r="20"
        fill="currentColor"
      />

      <path
        d="M146 28L160 42M160 28L146 42"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TodoLogo;