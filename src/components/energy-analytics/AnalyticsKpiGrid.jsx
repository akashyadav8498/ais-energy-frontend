import { Activity, Zap, Gauge, TrendingUp, TrendingDown } from "lucide-react";

export default function AnalyticsKpiGrid() {
  const cards = [
    {
      title: "TOTAL ENERGY",
      unit: "kWh",
      value: "1,245.60",
      change: "+ 12.5%",
      subtext: "vs last week",
      icon: Activity,
      iconBg: "bg-blue-100",
      color: "text-blue-600",
      borderAccent: "border-l-blue-500",
      isPositive: true,
    },
    {
      title: "TOTAL COST",
      unit: "₹",
      value: "12,456.00",
      change: "+ 10.8%",
      subtext: "vs last week",
      icon: Zap,
      iconBg: "bg-emerald-100",
      color: "text-emerald-600",
      borderAccent: "border-l-emerald-500",
      isPositive: true,
    },
    {
      title: "PEAK DEMAND",
      unit: "kW",
      value: "96.40",
      subtext: "18 May, 06:15 PM",
      icon: Gauge,
      iconBg: "bg-amber-100",
      color: "text-amber-600",
      borderAccent: "border-l-amber-500",
    },
    {
      title: "AVG POWER FACTOR",
      unit: "",
      value: "0.98",
      change: "+ 0.02",
      subtext: "vs last week",
      icon: TrendingUp,
      iconBg: "bg-purple-100",
      color: "text-purple-600",
      borderAccent: "border-l-purple-500",
      isPositive: true,
    },
    {
      title: "AVG VOLTAGE",
      unit: "V",
      value: "415.2",
      subtext: "L-L Average",
      icon: Zap,
      iconBg: "bg-teal-100",
      color: "text-teal-600",
      borderAccent: "border-l-teal-500",
    },
    {
      title: "AVG CURRENT",
      unit: "A",
      value: "18.62",
      subtext: "Per Phase Average",
      icon: Activity,
      iconBg: "bg-rose-100",
      color: "text-rose-600",
      borderAccent: "border-l-rose-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const TrendIcon = card.isPositive === true ? TrendingUp : card.isPositive === false ? TrendingDown : null;
        return (
          <div
            key={i}
            className={`bg-white rounded-2xl p-3.5 flex flex-col gap-2 border border-slate-200/80 border-l-[4px] ${card.borderAccent} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-center justify-between">
              <div className={`w-8 h-8 rounded-xl ${card.iconBg} ${card.color} flex items-center justify-center shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              {card.unit && (
                <span className="text-[9px] font-bold text-slate-400 px-1.5 py-0.5 bg-slate-100 rounded-md">{card.unit}</span>
              )}
            </div>

            <div className="text-[9px] font-bold text-slate-400 tracking-widest uppercase leading-none">{card.title}</div>
            <div className="text-base font-black text-slate-900 leading-none">{card.value}</div>

            {card.change ? (
              <div className={`flex items-center gap-1 text-[9px] font-bold ${card.isPositive ? "text-emerald-500" : "text-rose-500"}`}>
                {TrendIcon && <TrendIcon className="w-3 h-3" />}
                <span>{card.change}</span>
                <span className="text-slate-400 font-semibold">{card.subtext}</span>
              </div>
            ) : (
              <p className="text-[9px] font-semibold text-slate-400 leading-none">{card.subtext}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
