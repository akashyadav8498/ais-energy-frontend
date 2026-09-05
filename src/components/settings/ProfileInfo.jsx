import React from "react";
import { Building2, Camera, Edit2 } from "lucide-react";

export default function ProfileInfo() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
      {/* Title */}
      <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5">
        Profile & Company Information
      </h2>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Left Side: Large Avatar + Camera Badge */}
        <div className="relative shrink-0 self-start">
          <div className="w-24 h-24 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
            <Building2 className="w-12 h-12 text-blue-500 stroke-[1.5]" />
          </div>
          <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-slate-200 rounded-full shadow-xs hover:bg-slate-50 cursor-pointer">
            <Camera className="w-3.5 h-3.5 text-slate-600" />
          </button>
        </div>

        {/* Right Side: Two-Column Label Value Grid */}
        <div className="flex-1 space-y-3 text-xs">
          {/* Company Name */}
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
            <span className="text-slate-500 font-medium">Company Name</span>
            <span className="font-semibold text-slate-900">AR IoT Solutions</span>
          </div>

          {/* Website */}
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
            <span className="text-slate-500 font-medium">Website</span>
            <a
              href="https://www.ariotsolutions.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              www.ariotsolutions.com
            </a>
          </div>

          {/* Email */}
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
            <span className="text-slate-500 font-medium">Email</span>
            <span className="font-semibold text-slate-900">info@ariotsolutions.com</span>
          </div>

          {/* Phone */}
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
            <span className="text-slate-500 font-medium">Phone</span>
            <span className="font-semibold text-slate-900">+91 98765 43210</span>
          </div>

          {/* Address */}
          <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
            <span className="text-slate-500 font-medium pt-0.5">Address</span>
            <span className="font-semibold text-slate-900 leading-normal">
              502, Smart Tower, Tech Park,<br />
              Andheri East, Mumbai – 400093, India
            </span>
          </div>

          {/* Timezone */}
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center pt-1">
            <span className="text-slate-500 font-medium">Timezone</span>
            <span className="font-semibold text-slate-900">(GMT+05:30) Asia/Kolkata</span>
          </div>

          {/* Currency */}
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
            <span className="text-slate-500 font-medium">Currency</span>
            <span className="font-semibold text-slate-900">INR (₹)</span>
          </div>

          {/* Edit Profile Button */}
          <div className="pt-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-xs font-semibold text-blue-600 transition-colors shadow-2xs cursor-pointer">
              <Edit2 className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}