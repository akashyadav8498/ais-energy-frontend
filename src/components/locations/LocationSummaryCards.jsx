

export default function LocationSummaryCards({ summaryCards }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3.5">
      {summaryCards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${card.bg} ${card.color} flex items-center justify-center shrink-0`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{card.title}</div>
              <div className="text-base font-black text-slate-900 leading-tight truncate">{card.val}</div>
              <div className="text-[9px] font-semibold text-slate-500 truncate mt-0.5">{card.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
