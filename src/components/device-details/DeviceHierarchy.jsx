import { MapPin, Cpu, Activity } from "lucide-react";

export default function DeviceHierarchy({ location, selectedMeterId, onSelectMeter }) {
  if (!location) return null;

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-4 shadow-sm space-y-3">
      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-tight">Device Hierarchy</h2>

      <div className="text-xs font-medium text-slate-700 space-y-2">
        {/* 1. Location Level */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="font-semibold text-slate-900">{location.name}</span>
        </div>

        {/* 2. Gateways Loop */}
        <div className="pl-3 sm:pl-4 space-y-3 border-l border-slate-200 ml-2">
          {location.gateways?.map((gw) => (
            <div key={gw.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="font-medium text-slate-800">{gw.name}</span>
                </div>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">• {gw.status || "Online"}</span>
              </div>

              {/* 3. DCUs Loop */}
              <div className="pl-3 sm:pl-4 space-y-2 border-l border-slate-200 ml-1.5">
                {gw.dcus?.map((dcu) => (
                  <div key={dcu.id} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="font-medium text-slate-700">{dcu.name}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">• {dcu.status || "Online"}</span>
                    </div>

                    {/* 4. Meters Loop (Clickable) */}
                    <div className="pl-3 sm:pl-4 space-y-1 border-l border-slate-200 ml-1.5 pt-1">
                      {dcu.meters?.map((m) => {
                        const isSelected = m.id === selectedMeterId;
                        const isOnline = m.status === "Online";

                        return (
                          <div
                            key={m.id}
                            onClick={() => onSelectMeter?.(m.id)}
                            className={`flex items-center justify-between px-2 py-1.5 rounded-md text-xs cursor-pointer transition-colors duration-150 ${
                              isSelected ? "bg-blue-50/80 text-blue-600 font-bold border border-blue-100/60" : "text-slate-600 hover:bg-slate-100/70"
                            }`}
                          >
                            <span>{m.name || m.id}</span>
                            <span className="flex items-center gap-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-emerald-500" : "bg-red-500"}`} />
                              <span className={`text-[10px] font-semibold ${isOnline ? "text-emerald-600" : "text-red-500"}`}>{m.status}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
