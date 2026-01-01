import { motion } from "framer-motion";
import { User, Mail, Coins, Shield, Clock, LogOut, ArrowRight, Zap } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ProfilePage() {
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <div className="container-custom py-32 px-6 sm:px-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md mx-auto space-y-8"
                >
                    <div className="w-20 h-20 bg-bg-surface border border-border-base rounded-3xl flex items-center justify-center mx-auto">
                        <Shield size={32} className="text-text-muted" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Unauthorized Access</h2>
                        <p className="text-text-muted font-light">Please authenticate to access your neural culinary profile and synthesis history.</p>
                    </div>
                    <Link to="/login" className="btn-primary w-full py-5 text-[10px]">
                        Sign In to Platform
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-bg-base min-h-screen">
            <div className="container-custom py-20 sm:py-32 px-6 sm:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-text-muted">
                                <div className="h-[1px] w-12 bg-border-base" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Neural Identity</span>
                            </div>
                            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none">
                                {user.username || "Anonymous"}
                            </h1>
                            <p className="text-text-muted text-lg font-light max-w-md">
                                Managing your biological parameters and synthesis credits.
                            </p>
                        </div>
                        <button
                            onClick={logout}
                            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors"
                        >
                            Terminate Session <LogOut size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Sidebar Stats */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="p-10 bg-bg-surface border border-border-base rounded-[2.5rem] space-y-10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-text-base/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-text-base/10 transition-colors" />

                                <div className="flex items-center justify-between relative z-10">
                                    <div className="w-12 h-12 bg-text-base text-bg-base rounded-2xl flex items-center justify-center shadow-xl">
                                        <Coins size={24} />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Status</p>
                                        <div className="flex items-center gap-2 justify-end">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-green-500">Active</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 relative z-10">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Synthesis Credits</p>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-7xl font-bold tabular-nums tracking-tighter">{user.tokens}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Units</span>
                                    </div>
                                </div>

                                <button className="btn-primary w-full py-5 text-[10px] shadow-none hover:shadow-2xl transition-all relative z-10">
                                    Recharge Credits <Zap size={14} />
                                </button>
                            </div>

                            <div className="p-8 border border-border-base rounded-3xl space-y-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Neural Activity</h4>
                                <div className="flex items-end gap-1.5 h-20 px-2">
                                    {[40, 70, 45, 90, 65, 80, 50, 85, 60, 75].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05, duration: 1 }}
                                            className="flex-1 bg-text-base/10 rounded-t-sm hover:bg-text-base/30 transition-colors"
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-text-muted/50 px-1">
                                    <span>Mon</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <User size={20} />, label: "Identifier", value: user.username || "Not Set", desc: "Your unique platform alias" },
                                    { icon: <Mail size={20} />, label: "Neural Link", value: user.email, desc: "Primary communication channel" },
                                    { icon: <Shield size={20} />, label: "Security Level", value: "Standard Protocol", desc: "Current encryption standard" },
                                    { icon: <Clock size={20} />, label: "Platform Age", value: "Since 2026.01.01", desc: "Account initialization date" },
                                ].map((item, i) => (
                                    <div key={i} className="p-10 border border-border-base rounded-[2rem] space-y-8 hover:border-text-base/20 transition-all group bg-bg-base">
                                        <div className="w-10 h-10 bg-bg-surface border border-border-base rounded-xl flex items-center justify-center text-text-muted group-hover:text-text-base transition-colors">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">{item.label}</p>
                                            <p className="text-xl font-bold tracking-tight">{item.value}</p>
                                            <p className="text-xs text-text-muted font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-10 border border-border-base rounded-[2rem] bg-bg-surface/50">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-lg font-bold tracking-tight">Recent Syntheses</h3>
                                    <Link to="/discovery" className="text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-text-base transition-colors flex items-center gap-2">
                                        New Discovery <ArrowRight size={12} />
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { title: "Mediterranean Fusion", date: "2 hours ago", tokens: "-1" },
                                        { title: "High-Protein Nordic", date: "Yesterday", tokens: "-1" },
                                        { title: "Keto Synthesis v4", date: "3 days ago", tokens: "-1" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-border-base bg-bg-base hover:border-text-base/10 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-2 h-2 rounded-full bg-text-base/20" />
                                                <div>
                                                    <p className="text-sm font-bold">{item.title}</p>
                                                    <p className="text-[10px] text-text-muted uppercase tracking-widest">{item.date}</p>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-bold tabular-nums text-text-muted">{item.tokens} Unit</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
