import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function LocationSummaryCards({ summaryCards }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
      {summaryCards.map((card, idx) => {
        const Icon = card.icon;
        const TrendIcon = card.trendUp ? TrendingUp : TrendingDown;
        return (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-3.5 flex flex-col gap-2.5 relative overflow-hidden cursor-pointer border border-slate-200/80 border-l-[4px] ${
              card.borderAccent || "border-l-blue-500"
            } shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
          >
            {/* Top row: Icon + Live badge */}
            <div className="flex items-center justify-between">
              <div
                className={`w-9 h-9 rounded-xl ${
                  card.iconBg || "bg-blue-100"
                } ${card.color || "text-blue-600"} flex items-center justify-center shrink-0`}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>
              {card.isLive && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-[9px] font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
              )}
            </div>

            {/* Label */}
            <div className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">
              {card.title}
            </div>

            {/* Value */}
            <div className="text-[15px] font-black text-slate-900 leading-tight truncate">
              {card.val}
            </div>

            {/* Sub + Trend */}
            <div className="flex items-center justify-between gap-1">
              <div className="text-[9px] font-semibold text-slate-400 truncate leading-tight">
                {card.sub}
              </div>
              {card.trend && (
                <div
                  className={`flex items-center gap-0.5 text-[9px] font-bold shrink-0 ${
                    card.trendUp !== false ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  <TrendIcon className="w-3 h-3" />
                  {card.trend}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
