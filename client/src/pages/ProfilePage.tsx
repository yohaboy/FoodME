import { motion } from "framer-motion";
import { User, Mail, Coins, Shield, Clock, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ProfilePage() {
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <div className="container-custom py-24 px-6 sm:px-10 text-center">
                <h2 className="text-4xl font-bold tracking-tighter mb-6">UNAUTHORIZED_ACCESS</h2>
                <p className="text-text-muted mb-12">Please sign in to view your neural profile.</p>
                <Link to="/login" className="btn-primary inline-flex">Sign In</Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12 md:py-24 px-6 sm:px-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 pb-12 border-b border-border-base">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-text-muted">
                            <div className="h-[1px] w-8 bg-border-base" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">User Profile</span>
                        </div>
                        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-none uppercase">
                            {user.username || "ANONYMOUS"}
                        </h1>
                    </div>
                    <button
                        onClick={logout}
                        className="btn-secondary text-red-500 border-red-500/20 hover:bg-red-500/5"
                    >
                        <LogOut size={16} /> Terminate Session
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Stats Card */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-10 bg-bg-surface border-2 border-border-base rounded-[2.5rem] space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="w-12 h-12 bg-text-base text-bg-base rounded-2xl flex items-center justify-center">
                                    <Coins size={24} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Available Tokens</span>
                            </div>
                            <div>
                                <span className="text-7xl font-bold tabular-nums">{user.tokens}</span>
                                <span className="text-text-muted ml-4 font-medium uppercase tracking-widest text-xs">Credits</span>
                            </div>
                            <button className="btn-primary w-full py-4 text-[10px] bg-blue-600">Recharge Neural Credits</button>
                        </div>
                    </div>

                    {/* Details Card */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: <User size={20} />, label: "Identifier", value: user.username || "Not Set" },
                            { icon: <Mail size={20} />, label: "Neural Link", value: user.email },
                            { icon: <Shield size={20} />, label: "Security Level", value: "Standard Protocol" },
                            { icon: <Clock size={20} />, label: "Member Since", value: "2026.01.01" },
                        ].map((item, i) => (
                            <div key={i} className="p-8 border-2 border-border-base rounded-3xl space-y-4 hover:border-text-muted transition-colors">
                                <div className="text-text-muted">{item.icon}</div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-1">{item.label}</p>
                                    <p className="text-lg font-bold tracking-tight">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
