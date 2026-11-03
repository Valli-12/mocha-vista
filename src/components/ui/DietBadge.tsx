import React from "react";

interface DietBadgeProps {
  isVegetarian?: boolean;
  showText?: boolean;
  className?: string;
}

export default function DietBadge({
  isVegetarian,
  showText = false,
  className = "",
}: DietBadgeProps) {
  if (isVegetarian === undefined) return null;

  const isVeg = isVegetarian;
  const label = isVeg ? "Vegetarian" : "Non-Vegetarian";
  const borderColor = isVeg ? "border-[#22863a]" : "border-[#cb2431]";
  const dotColor = isVeg ? "bg-[#22863a]" : "bg-[#cb2431]";
  const textColor = isVeg ? "text-[#1e6b2c]" : "text-[#b31d28]";

  return (
    <div
      aria-label={label}
      title={label}
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-white/80 ${className}`}
    >
      {/* Authentic FSSAI-style dietary symbol */}
      <span
        className={`flex items-center justify-center w-3 h-3 rounded-[2.5px] border ${borderColor} p-[1.5px] shrink-0`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      </span>
      {showText && (
        <span
          className={`text-[10px] font-bold tracking-wider uppercase font-sans ${textColor}`}
        >
          {isVeg ? "Veg" : "Non-Veg"}
        </span>
      )}
    </div>
  );
}
