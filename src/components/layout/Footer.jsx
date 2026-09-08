import React from "react";
import { CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export default function Footer({ className = "" }) {
  return (
    <footer
      className={`bg-white border-t border-slate-200/80 px-4 sm:px-6 py-3.5 mt-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 shadow-2xs ${className}`}
    >
      {/* Left Section: Copyright & System Status */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-center sm:text-left">
        <span className="font-semibold text-slate-700">
          © 2026 AR IoT Solutions.
        </span>
        <span className="hidden sm:inline text-slate-300">|</span>
        <span className="text-[11px] text-slate-400">
          Smart Energy. Smarter Future.
        </span>
        <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-[10px] font-bold">
          <span className="status-dot-live" style={{ width: 6, height: 6, minWidth: 6 }} />
          All Systems Operational
        </span>
      </div>

      {/* Right Section: Information Links & Timezone */}
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 text-[11px]">
        <a
          href="#privacy"
          onClick={(e) => e.preventDefault()}
          className="hover:text-blue-600 transition-colors font-medium text-slate-500"
        >
          Privacy Policy
        </a>
        <span className="text-slate-300">•</span>
        <a
          href="#terms"
          onClick={(e) => e.preventDefault()}
          className="hover:text-blue-600 transition-colors font-medium text-slate-500"
        >
          Terms of Service
        </a>
        <span className="text-slate-300">•</span>
        <a
          href="#support"
          onClick={(e) => e.preventDefault()}
          className="hover:text-blue-600 transition-colors font-medium text-slate-500"
        >
          Support
        </a>
        <span className="hidden lg:inline text-slate-300">•</span>
        <span className="hidden lg:inline text-slate-400 font-mono text-[10px]">
          Asia/Kolkata (IST) · v1.4.2
        </span>
      </div>
    </footer>
  );
}
