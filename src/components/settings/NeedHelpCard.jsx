import { HelpCircle, ExternalLink } from "lucide-react";

export default function NeedHelpCard() {
  return (
    <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex flex-col items-center text-center">
      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
        <HelpCircle className="w-5 h-5" />
      </div>
      <h3 className="text-xs font-bold text-slate-900">Need Help?</h3>
      <p className="text-[11px] text-slate-500 mt-0.5">
        Our support team is here to help you.
      </p>
      <a href="mailto:support@ariotsolutions.com" className="text-[11px] font-bold text-blue-600 hover:underline mt-1">
        support@ariotsolutions.com
      </a>
      <span className="text-[11px] font-semibold text-slate-700">+91 98765 43210</span>

      <button className="w-full mt-3 flex items-center justify-center gap-1.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs">
        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
        <span>Contact Support</span>
      </button>
    </div>
  );
}