import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.access);
                navigate("/");
            } else {
                setError("Invalid credentials. Access denied.");
            }
        } catch (err) {
            setError("Connection failed. Verify server status.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-custom pt-24 sm:pt-32 pb-24 px-6 sm:px-10">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12 sm:space-y-20"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">Sign In</h1>
                        <p className="text-text-muted text-base sm:text-lg font-light max-w-md">Authenticate to access yourself by signing in.</p>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-base bg-bg-surface py-5 sm:py-6 px-6 sm:px-8 border border-border-base rounded-2xl"
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
                        <div className="space-y-4">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Email Identifier</label>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                <input
                                    type="email"
                                    required
                                    className="input-field pl-14 h-14 text-sm"
                                    placeholder="identity@food.me"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-text-muted ml-2">Security Key</label>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                <input
                                    type="password"
                                    required
                                    className="input-field pl-14 h-14 text-sm"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full h-14 text-xs"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : (
                                <div className="flex items-center gap-3">
                                    <span>Enter Platform</span>
                                    <ArrowRight size={16} />
                                </div>
                            )}
                        </button>
                    </form>

                    <div className="pt-12 border-t border-border-base">
                        <p className="text-sm text-text-muted font-light">
                            New to the network?{" "}
                            <Link to="/register" className="text-text-base font-bold hover:underline underline-offset-8">
                                Register Identity
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
