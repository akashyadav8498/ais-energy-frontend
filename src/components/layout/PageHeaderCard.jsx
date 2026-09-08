import React from "react";

export default function PageHeaderCard({
  title,
  subtitle,
  badge,
  actions,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-xs ${className}`}
    >
      {/* Left Side: Page Context */}
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
            {title}
          </h1>
          {badge && <div>{badge}</div>}
        </div>
        {subtitle && (
          <p className="text-xs text-slate-400 font-bold mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Side: Page Controls / Action Toolbar */}
      {(actions || children) && (
        <div className="flex flex-wrap items-center gap-2.5">
          {actions || children}
        </div>
      )}
    </div>
  );
}
