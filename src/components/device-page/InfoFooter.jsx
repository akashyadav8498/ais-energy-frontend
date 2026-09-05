import { Info as InfoIcon } from "lucide-react";

export default function InfoFooter() {
  return (
    <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3 flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
        <InfoIcon className="w-4 h-4 fill-white text-blue-600" />
      </div>
      <div>
        <h4 className="text-xs font-black text-slate-900">About Devices</h4>
        <p className="text-[11px] font-medium text-slate-600 mt-0.5">
          Gateways collect data from DCUs and forward it to the cloud. DCUs manage and aggregate data from energy meters. Click on any device to view detailed information, configuration and real-time
          data.
        </p>
      </div>
    </div>
  );
}
