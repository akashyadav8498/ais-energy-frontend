import { Radio, Server, Cpu, Zap, Wifi, BellRing, TrendingUp } from "lucide-react";

export default function KpiSummaryCards() {
  const cards = [
    {
      label: "TOTAL DEVICES", value: "342", sub: "All Types",
      icon: Radio, iconBg: "bg-blue-100", color: "text-blue-600", borderAccent: "border-l-blue-500",
      trend: "+4", trendUp: true, delay: "0ms",
    },
    {
      label: "GATEWAYS", value: "12", sub: "Online: 11 · Offline: 1",
      icon: Server, iconBg: "bg-emerald-100", color: "text-emerald-600", borderAccent: "border-l-emerald-500",
      trend: "91.7%", trendUp: true, delay: "60ms",
    },
    {
      label: "DCUS", value: "48", sub: "Online: 45 · Offline: 3",
      icon: Cpu, iconBg: "bg-purple-100", color: "text-purple-600", borderAccent: "border-l-purple-500",
      trend: "93.8%", trendUp: true, delay: "120ms",
    },
    {
      label: "ENERGY METERS", value: "282", sub: "Online: 252 · Offline: 30",
      icon: Zap, iconBg: "bg-teal-100", color: "text-teal-600", borderAccent: "border-l-teal-500",
      trend: "89.4%", trendUp: true, delay: "180ms",
    },
    {
      label: "ONLINE DEVICES", value: "308", sub: "90.1% Uptime",
      icon: Wifi, iconBg: "bg-emerald-100", color: "text-emerald-600", borderAccent: "border-l-emerald-500",
      trend: "90.1%", trendUp: true, delay: "240ms", isLive: true,
    },
    {
      label: "ALERT DEVICES", value: "34", sub: "10.0% in alert",
      icon: BellRing, iconBg: "bg-rose-100", color: "text-rose-600", borderAccent: "border-l-rose-500",
      trend: "10.0%", trendUp: false, delay: "300ms",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <div
            key={i}
            className={`bg-white rounded-2xl p-3.5 flex flex-col gap-2 border border-slate-200/80 border-l-[4px] ${c.borderAccent} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
            style={{ animationDelay: c.delay, animationFillMode: 'both' }}
          >
            <div className="flex items-center justify-between">
              <div className={`w-9 h-9 rounded-xl ${c.iconBg} ${c.color} flex items-center justify-center shrink-0`}>
                <Icon className="w-[18px] h-[18px]" />
              </div>
              {c.isLive && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-[9px] font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
              )}
            </div>

            <div className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">{c.label}</div>
            <div className="text-[17px] font-black text-slate-900 leading-none">{c.value}</div>

            <div className="flex items-center justify-between gap-1">
              <div className="text-[9px] font-semibold text-slate-400 truncate">{c.sub}</div>
              <div className={`flex items-center gap-0.5 text-[9px] font-bold shrink-0 ${c.trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                <TrendingUp className="w-3 h-3" />
                {c.trend}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
