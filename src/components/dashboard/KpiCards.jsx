import { Building2, Cpu, Activity, HardDrive, Zap, TrendingUp, TrendingDown } from "lucide-react";

export default function KpiCards({ totalPower, todaysEnergy }) {
  const cards = [
    {
      title: "LOCATIONS",
      val: "12",
      sub: "Total Sites",
      icon: Building2,
      iconBg: "bg-blue-100",
      color: "text-blue-600",
      borderAccent: "border-l-blue-500",
      trend: "+2",
      trendUp: true,
      delay: "0ms",
    },
    {
      title: "GATEWAYS",
      val: "28",
      sub: "Online: 26  ·  Offline: 2",
      icon: Cpu,
      iconBg: "bg-emerald-100",
      color: "text-emerald-600",
      borderAccent: "border-l-emerald-500",
      trend: "92.9%",
      trendUp: true,
      delay: "60ms",
    },
    {
      title: "DCUS",
      val: "146",
      sub: "Online: 134  ·  Offline: 12",
      icon: Activity,
      iconBg: "bg-purple-100",
      color: "text-purple-600",
      borderAccent: "border-l-purple-500",
      trend: "91.8%",
      trendUp: true,
      delay: "120ms",
    },
    {
      title: "METERS",
      val: "1,280",
      sub: "Online: 1,247  ·  Offline: 33",
      icon: HardDrive,
      iconBg: "bg-teal-100",
      color: "text-teal-600",
      borderAccent: "border-l-teal-500",
      trend: "97.4%",
      trendUp: true,
      delay: "180ms",
    },
    {
      title: "TOTAL POWER",
      val: `${totalPower} kW`,
      sub: "All Locations (Live)",
      icon: Zap,
      iconBg: "bg-amber-100",
      color: "text-amber-600",
      borderAccent: "border-l-amber-500",
      trend: "+2.1%",
      trendUp: true,
      delay: "240ms",
      isLive: true,
    },
    {
      title: "TODAY'S ENERGY",
      val: `${todaysEnergy} kWh`,
      sub: "All Locations",
      icon: Zap,
      iconBg: "bg-blue-100",
      color: "text-blue-600",
      borderAccent: "border-l-blue-500",
      trend: "+12.5%",
      trendUp: true,
      delay: "300ms",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        const TrendIcon = card.trendUp ? TrendingUp : TrendingDown;
        return (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-3.5 flex flex-col gap-2.5 relative overflow-hidden cursor-pointer border border-slate-200/80 border-l-[4px] ${card.borderAccent} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            style={{ animationDelay: card.delay, animationFillMode: 'both' }}
          >
            {/* Top row: Icon + Live badge */}
            <div className="flex items-center justify-between">
              <div className={`w-9 h-9 rounded-xl ${card.iconBg} ${card.color} flex items-center justify-center shrink-0`}>
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
            <div className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">{card.title}</div>

            {/* Value */}
            <div className="text-[15px] font-black text-slate-900 leading-tight truncate">{card.val}</div>

            {/* Sub + Trend */}
            <div className="flex items-center justify-between gap-1">
              <div className="text-[9px] font-semibold text-slate-400 truncate leading-tight">{card.sub}</div>
              <div className={`flex items-center gap-0.5 text-[9px] font-bold shrink-0 ${card.trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                <TrendIcon className="w-3 h-3" />
                {card.trend}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
