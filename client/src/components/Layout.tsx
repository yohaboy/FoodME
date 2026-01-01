import React from "react";
import { useLocation, Link } from "react-router-dom";
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
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Discovery", path: "/" },
        { name: "Intelligence", path: "/about" },
        { name: "Community", path: "/contact" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-bg-base text-text-base selection:bg-text-base selection:text-bg-base overflow-x-hidden">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-2xl border-b border-border-base">
                <div className="container-custom px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between">
                    <div className="flex items-center gap-12 lg:gap-16">
                        <Link to="/" className="flex items-center gap-3 group shrink-0">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-text-base text-bg-base rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
                                <ChefHat size={20} className="sm:size-[22px]" />
                            </div>
                            <span className="text-2xl sm:text-3xl font-bold tracking-tighter">
                                FoodME
                            </span>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'text-text-base' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-6">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 sm:p-3 rounded-2xl hover:bg-bg-surface transition-all border border-transparent hover:border-border-base"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={18} className="sm:size-[20px]" /> : <Sun size={18} className="sm:size-[20px]" />}
                        </button>

                        <div className="h-8 w-[1px] bg-border-base hidden sm:block" />

                        {user ? (
                            <div className="flex items-center gap-3 sm:gap-6">
                                <div className="flex items-center gap-3 sm:gap-6">
                                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-bg-surface border border-border-base rounded-xl">
                                        <Coins size={14} className="text-text-muted" />
                                        <span className="text-[10px] font-bold tabular-nums">{user.tokens}</span>
                                    </div>
                                    <Link to="/profile" className="flex items-center gap-3 group">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bg-surface border border-border-base flex items-center justify-center group-hover:border-text-base transition-colors overflow-hidden">
                                            <User size={16} className="text-text-muted group-hover:text-text-base transition-colors" />
                                        </div>
                                        <span className="hidden xl:inline text-[10px] font-bold uppercase tracking-[0.2em]">{user.username || user.email}</span>
                                    </Link>
                                </div>
                                <button
                                    onClick={logout}
                                    className="p-2.5 sm:p-3 rounded-2xl hover:bg-bg-surface text-text-muted hover:text-text-base transition-all border border-transparent hover:border-border-base"
                                    title="Logout"
                                >
                                    <LogOut size={18} className="sm:size-[20px]" />
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="hidden sm:flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.3em] bg-text-base text-blue-600 px-8 py-3.5 sm:py-4 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95">
                                Sign In
                            </Link>
                        )}

                        <button
                            className="lg:hidden p-2.5 sm:p-3 rounded-2xl hover:bg-bg-surface border border-border-base"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={18} className="sm:size-[20px]" /> : <Menu size={18} className="sm:size-[20px]" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-bg-base pt-32 px-10 lg:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-8 sm:gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-4xl sm:text-5xl font-bold tracking-tighter"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {user ? (
                                <>
                                    <Link
                                        to="/profile"
                                        className="text-4xl sm:text-5xl font-bold tracking-tighter flex items-center gap-4"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Profile <div className="px-3 py-1 bg-bg-surface border border-border-base rounded-xl text-sm tabular-nums flex items-center gap-2"><Coins size={14} /> {user.tokens}</div>
                                    </Link>
                                    <button
                                        onClick={() => { logout(); setMobileMenuOpen(false); }}
                                        className="text-4xl sm:text-5xl font-bold tracking-tighter text-red-500 text-left"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="text-4xl sm:text-5xl font-bold tracking-tighter text-blue-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
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
