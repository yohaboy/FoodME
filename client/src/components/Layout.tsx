import React from "react";
import { Link } from "react-router-dom";
import {
    User,
    LogOut,
    Sun,
    Moon,
    ChefHat,
    Menu,
    X,
    Coins
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-bg-base text-text-base selection:bg-text-base selection:text-bg-base overflow-x-hidden">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-bg-base/90 backdrop-blur-xl border-b border-border-base px-6 sm:px-10 py-6 flex items-center justify-between mx-auto">
                <div className="flex items-center gap-16">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-text-base text-bg-base rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
                            <ChefHat size={22} />
                        </div>
                        <span className="text-3xl font-bold tracking-tighter">
                            FoodME
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-12">
                        <Link to="/" className="nav-link">Discovery</Link>
                        <Link to="/about" className="nav-link">Intelligence</Link>
                        <Link to="/contact" className="nav-link">Community</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4 sm:gap-8">
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-2xl hover:bg-bg-surface transition-all border border-transparent hover:border-border-base"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <div className="h-8 w-[1px] bg-border-base hidden sm:block" />

                    {user ? (
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-6">
                                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-bg-surface border border-border-base rounded-2xl">
                                    <Coins size={14} className="text-text-muted" />
                                    <span className="text-[10px] font-bold tabular-nums">{user.tokens}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-bg-surface border border-border-base flex items-center justify-center">
                                        <User size={16} className="text-text-muted" />
                                    </div>
                                    <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-[0.2em]">{user.username || user.email}</span>
                                </div>
                            </div>
                            <button
                                onClick={logout}
                                className="p-3 rounded-2xl hover:bg-bg-surface text-text-muted hover:text-text-base transition-all border border-transparent hover:border-border-base"
                                title="Logout"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.3em] bg-text-base text-bg-base px-10 py-4 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95 text-blue-600">
                            Sign In
                        </Link>
                    )}

                    <button
                        className="lg:hidden p-3 rounded-2xl hover:bg-bg-surface border border-border-base"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-bg-base pt-32 px-10 lg:hidden"
                    >
                        <nav className="flex flex-col gap-10">
                            <Link to="/" className="text-5xl font-bold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>Discovery</Link>
                            <Link to="/about" className="text-5xl font-bold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>Intelligence</Link>
                            <Link to="/contact" className="text-5xl font-bold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>Community</Link>
                            {!user && (
                                <Link to="/login" className="text-5xl font-bold tracking-tighter text-text-muted text-blue-600" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
}
