import React from "react";
import { ShieldCheck, LogOut, ArrowLeft } from "lucide-react";
import { getCurrentUser, logoutUser } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function AdminPage() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-500 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">Admin Console</h1>
        <p className="text-xs text-slate-400 mt-1">
          Welcome, <span className="text-blue-400 font-semibold">{user?.name || "Admin"}</span> ({user?.email})
        </p>
        <div className="my-6 p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-left text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-400">Role:</span>
            <span className="font-bold text-emerald-400 uppercase tracking-wider">{user?.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Status:</span>
            <span className="font-semibold text-slate-200">Authenticated (Admin)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go to Dashboard</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex-1 py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
