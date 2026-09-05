import React from "react";
import { Mail, MessageSquare, ShieldAlert, Bell } from "lucide-react";

export default function NotificationPreferences() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
      <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Notification Preferences</h2>

      <div className="space-y-3.5 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800">Email Notifications</p>
              <p className="text-[10px] text-slate-400">Receive alerts via email</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="accent-blue-600 w-4 h-4 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800">SMS Notifications</p>
              <p className="text-[10px] text-slate-400">Receive alerts via SMS</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="accent-blue-600 w-4 h-4 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800">Critical Alerts</p>
              <p className="text-[10px] text-slate-400">Immediate critical alerts</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="accent-blue-600 w-4 h-4 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <Bell className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800">Weekly Reports</p>
              <p className="text-[10px] text-slate-400">Receive weekly reports</p>
            </div>
          </div>
          <input type="checkbox" defaultChecked className="accent-blue-600 w-4 h-4 cursor-pointer" />
        </div>

        <div className="flex justify-center pt-2">
          <button className="text-xs font-bold text-blue-600 hover:underline">Manage Preferences</button>
        </div>
      </div>
    </div>
  );
}
