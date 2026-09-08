import React from "react";

export default function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  subtext,
  iconBg = "bg-blue-100",
  color = "text-blue-600",
  colorText,
  borderAccent = "border-l-blue-500",
  subColor = "text-slate-400",
  subtextColor,
  trend,
  trendUp = true,
  isLive = false,
  badge,
  unit,
  onClick,
  className = "",
  delay,
}) {
  const finalSub = sub !== undefined ? sub : subtext;
  const finalColor = colorText || color;
  const finalSubColor = subtextColor || subColor;

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 flex items-center gap-3.5 border border-slate-200/80 border-l-[4px] ${borderAccent} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      style={delay ? { animationDelay: delay, animationFillMode: "both" } : undefined}
    >
      {/* Left Squircle Icon Container */}
      {Icon && (
        <div
          className={`w-11 h-11 rounded-xl ${iconBg} ${finalColor} flex items-center justify-center shrink-0`}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}

      {/* Right Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-none mb-1 truncate">
            {label}
          </p>
          {isLive && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-[8px] font-bold text-emerald-600">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              LIVE
            </span>
          )}
          {badge && <span>{badge}</span>}
        </div>

        <div className="flex items-baseline gap-1 mb-1">
          <p className="text-xl sm:text-2xl font-black text-slate-900 leading-none truncate">
            {value}
          </p>
          {unit && (
            <span className="text-[10px] font-bold text-slate-400 font-mono">
              {unit}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-1">
          {finalSub && (
            <p className={`text-[9px] sm:text-[10px] font-bold ${finalSubColor} truncate leading-tight`}>
              {finalSub}
            </p>
          )}
          {trend && (
            <span
              className={`text-[9px] font-bold shrink-0 ${
                trendUp !== false ? "text-emerald-500" : "text-rose-500"
              }`}
            >
              {trend}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
