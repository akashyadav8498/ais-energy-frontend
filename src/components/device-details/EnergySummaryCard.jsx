

export default function EnergySummaryCard() {
  const summaryItems = [
    { label: "Today", val: "24.35 kWh" },
    { label: "This Week", val: "168.75 kWh" },
    { label: "This Month", val: "1,245.60 kWh" },
    { label: "Total (Life)", val: "15,680.25 kWh" },
  ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm space-y-2">
      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Energy Summary</h3>
      <div className="space-y-1.5 text-xs divide-y divide-slate-100">
        {summaryItems.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center pt-1.5 first:pt-0">
            <span className="text-slate-400 text-[11px]">{item.label}</span>
            <span className="font-bold text-slate-800 text-[11px] font-mono">{item.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
