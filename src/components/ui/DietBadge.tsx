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
  const borderColor = isVeg ? "border-emerald-700" : "border-rose-700";
  const dotColor = isVeg ? "bg-emerald-700 text-emerald-700" : "bg-rose-700 text-rose-700";
  const textColor = isVeg ? "text-emerald-800" : "text-rose-800";

  return (
    <div
      aria-label={label}
      title={label}
      className={`inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-white/95 border ${borderColor} shadow-xs backdrop-blur-xs ${className}`}
    >
      <span className={`inline-block w-2 h-2 rounded-full border border-current ${dotColor}`} />
      {showText && (
        <span className={`text-[11px] font-medium tracking-wide uppercase font-sans ${textColor}`}>
          {isVeg ? "Veg" : "Non-Veg"}
        </span>
      )}
    </div>
  );
}

