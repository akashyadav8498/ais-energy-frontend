import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Zap,
    BarChart3,
    Leaf,
    Bell,
    Sliders,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
} from "lucide-react";
import { loginUser } from "../utils/auth";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const result = loginUser(email, password, keepSignedIn);
        if (result.success) {
            if (result.user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } else {
            setError(result.message || "Invalid email or password.");
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#F8FAFC] font-sans text-[#0B132B] antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
            {/* ================= LEFT PANEL - Hero Branding & Features ================= */}
            <div className="w-full lg:w-[54%] bg-gradient-to-br from-[#EEF4FF] via-[#F4F8FF] to-[#E5EDFF] px-6 sm:px-10 lg:px-12 xl:px-16 pt-5 sm:pt-7 lg:pt-8 pb-5 sm:pb-6 lg:pb-7 flex flex-col justify-between relative overflow-hidden min-h-screen lg:h-screen">
                {/* Soft Ambient Background Glows */}
                <div className="absolute top-28 -right-12 w-80 h-80 bg-blue-200/40 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

                {/* Ambient Subtle Wave Curves at Bottom */}
                <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-44 sm:h-52">
                    <svg
                        viewBox="0 0 1200 200"
                        preserveAspectRatio="none"
                        className="w-full h-full opacity-65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,110 C240,175 440,65 680,130 C920,195 1040,85 1200,135 L1200,200 L0,200 Z"
                            fill="#DCEBFE"
                            opacity="0.6"
                        />
                        <path
                            d="M0,145 C200,85 410,185 640,130 C860,75 1040,165 1200,120 L1200,200 L0,200 Z"
                            fill="#E9F2FE"
                            opacity="0.9"
                        />
                    </svg>
                </div>

                {/* Top Header Row (Logo + Tagline Pill) */}
                <div className="flex items-center justify-between z-10 w-full min-h-[44px]">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-[#1A62F8] flex items-center justify-center text-white shadow-lg shadow-blue-500/25 shrink-0">
                            <Zap className="w-5 h-5 fill-current text-white" />
                        </div>
                        <div>
                            <h1 className="font-black text-[#0B132B] tracking-tight leading-none text-lg sm:text-xl">
                                AR IOT SOLUTIONS
                            </h1>
                            <p className="text-[11px] font-bold text-[#1A62F8] tracking-normal mt-1">
                                Smart Energy. Smarter Future.
                            </p>
                        </div>
                    </div>

                    {/* Right Tagline */}
                    <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                        <div className="w-5 h-[2px] bg-[#1A62F8] rounded-full" />
                        <span>Reliable &nbsp;•&nbsp; Connected &nbsp;•&nbsp; Sustainable</span>
                    </div>
                </div>

                {/* Middle Hero Section */}
                <div className="my-auto py-6 sm:py-8 z-10 w-full max-w-xl">
                    {/* Main Title & Description */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold text-[#0B132B] tracking-tight leading-[1.14]">
                            Intelligent Monitoring <br />
                            for a <span className="text-[#1A62F8]">Greener Tomorrow</span>
                        </h2>
                        <p className="mt-3.5 text-[#64748B] text-sm sm:text-[15px] font-normal leading-relaxed max-w-lg">
                            Real-time energy monitoring, smarter insights and reliable operations — all in one platform.
                        </p>
                    </div>

                    {/* 4 Feature Items (Vertical Stack) */}
                    <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-3.5 group cursor-default">
                            <div className="w-12 h-12 rounded-2xl bg-[#EBF2FE] text-[#1A62F8] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                                <BarChart3 className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-[15px] font-bold text-[#0B132B] leading-snug">
                                    Real-time Monitoring
                                </h4>
                                <p className="text-xs text-[#64748B] mt-0.5 font-normal">
                                    Track energy usage across all locations
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-3.5 group cursor-default">
                            <div className="w-12 h-12 rounded-2xl bg-[#E6F9F0] text-[#10B981] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                                <Leaf className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-[15px] font-bold text-[#0B132B] leading-snug">
                                    Improve Efficiency
                                </h4>
                                <p className="text-xs text-[#64748B] mt-0.5 font-normal">
                                    Make data-driven decisions
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-3.5 group cursor-default">
                            <div className="w-12 h-12 rounded-2xl bg-[#F4EDFE] text-[#8B5CF6] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                                <Bell className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-[15px] font-bold text-[#0B132B] leading-snug">
                                    Instant Alerts
                                </h4>
                                <p className="text-xs text-[#64748B] mt-0.5 font-normal">
                                    Stay informed, always
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-3.5 group cursor-default">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFF5E6] text-[#F59E0B] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                                <Sliders className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-[15px] font-bold text-[#0B132B] leading-snug">
                                    Smarter Operations
                                </h4>
                                <p className="text-xs text-[#64748B] mt-0.5 font-normal">
                                    Build a more sustainable future
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Brand Line */}
                <div className="z-10 flex items-center gap-2.5 text-xs text-[#64748B] font-semibold tracking-wide min-h-[28px]">
                    <div className="w-6 h-[2px] bg-[#1A62F8] rounded-full" />
                    <span>Powering a Smarter, Cleaner Tomorrow</span>
                </div>
            </div>

            {/* ================= RIGHT PANEL - Authentication Form ================= */}
            <div className="w-full lg:w-[46%] px-6 sm:px-10 lg:px-12 xl:px-16 pt-5 sm:pt-7 lg:pt-8 pb-5 sm:pb-6 lg:pb-7 flex flex-col justify-between items-center bg-white relative min-h-screen lg:h-screen">
                {/* Soft Right Edge Ambient Glow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-96 bg-blue-100/30 rounded-l-full blur-3xl pointer-events-none" />

                {/* Contact Admin Header */}
                <div className="w-full flex items-center justify-end text-xs sm:text-sm text-[#64748B] z-10 min-h-[44px]">
                    <span>Don’t have an account?</span>
                    <a
                        href="#contact"
                        className="ml-1.5 font-semibold text-[#1A62F8] hover:underline"
                    >
                        Contact Admin
                    </a>
                </div>

                {/* Centered Login Card */}
                <div className="w-full max-w-[440px] my-auto py-6 sm:py-8 z-10">
                    <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-600 text-xs rounded-xl font-medium flex items-center justify-between">
                                    <span>{error}</span>
                                </div>
                            )}

                            {/* Email Input */}
                            <div>
                                <label className="block text-xs font-bold text-[#0B132B] mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-3.5 py-3 bg-white border border-[#E2E8F0] rounded-xl text-xs font-medium text-[#0B132B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1A62F8] focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-xs font-bold text-[#0B132B]">
                                        Password
                                    </label>
                                    <a
                                        href="#forgot"
                                        className="text-xs font-semibold text-[#1A62F8] hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full pl-10 pr-10 py-3 bg-white border border-[#E2E8F0] rounded-xl text-xs font-medium text-[#0B132B] placeholder-[#94A3B8] focus:outline-none focus:border-[#1A62F8] focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#94A3B8] hover:text-[#475569] cursor-pointer"
                                    >
                                        {showPassword ? (
                                            <Eye className="w-4 h-4" />
                                        ) : (
                                            <EyeOff className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Keep me signed in Checkbox */}
                            <div className="flex items-center gap-2 pt-1">
                                <input
                                    type="checkbox"
                                    id="keepSignedIn"
                                    checked={keepSignedIn}
                                    onChange={(e) => setKeepSignedIn(e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-300 text-[#1A62F8] focus:ring-[#1A62F8] cursor-pointer"
                                />
                                <label
                                    htmlFor="keepSignedIn"
                                    className="text-xs font-medium text-[#475569] cursor-pointer select-none"
                                >
                                    Keep me signed in
                                </label>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-[#1A62F8] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-[0_4px_16px_rgba(26,98,248,0.25)] hover:shadow-[0_6px_20px_rgba(26,98,248,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
                            >
                                <span>Sign In</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        {/* Subtle Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#E2E8F0]" />
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-white px-2.5 text-[#94A3B8] font-normal">
                                    or
                                </span>
                            </div>
                        </div>

                        {/* Google Sign In Button */}
                        <button
                            type="button"
                            className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#334155] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-xs"
                        >
                            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                />
                            </svg>
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </div>

                {/* Footer Legal Terms */}
                <div className="w-full flex flex-row items-center justify-between text-[11px] text-[#94A3B8] font-normal z-10 min-h-[28px]">
                    <p>© 2026 AR IoT Solutions. All Rights Reserved.</p>
                    <div className="flex items-center gap-2">
                        <a href="#privacy" className="hover:text-[#475569] transition-colors">
                            Privacy
                        </a>
                        <span>|</span>
                        <a href="#terms" className="hover:text-[#475569] transition-colors">
                            Terms
                        </a>
                        <span>|</span>
                        <a href="#support" className="hover:text-[#475569] transition-colors">
                            Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}