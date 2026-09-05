

export default function DeviceInfoCard() {
  const infoItems = [
    { label: "Meter ID", val: "MTR-003" },
    { label: "Model", val: "AR-3P-CT-100A" },
    { label: "Serial No.", val: "AR2025MTR0003" },
    { label: "Phase", val: "3 Phase - 4 Wire" },
    { label: "CT Rating", val: "100A" },
    { label: "VT Rating", val: "440V" },
    { label: "Firmware", val: "v1.2.8" },
    { label: "Last Updated", val: "20 May 2025\n10:24:20 AM", multiline: true },
    {
      label: "Status",
      custom: (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 inline-flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
        </span>
      ),
    },
    { label: "Uptime", val: "2d 14h 35m" },
  ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-4 shadow-sm space-y-2">
      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Device Info</h2>
      <div className="space-y-2 text-xs divide-y divide-slate-100">
        {infoItems.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start pt-1.5 first:pt-0 gap-2">
            <span className="text-slate-400 font-medium text-[11px] shrink-0">{item.label}</span>
            {item.custom ? item.custom : <span className={`font-semibold text-slate-800 text-right ${item.multiline ? "whitespace-pre-line text-[10px] font-mono" : "text-[11px]"}`}>{item.val}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
