import { motion } from "framer-motion";
import { Brain, Cpu, Zap, Shield, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-bg-base min-h-screen">
            <div className="container-custom py-24 sm:py-32 px-6 sm:px-10">
                <header className="mb-32 overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[clamp(3rem,10vw,12rem)] font-bold tracking-tighter leading-[0.8] w-full whitespace-nowrap"
                    >
                        Mapping the <span className="text-text-muted italic font-light">Human Palate.</span>
                    </motion.h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-base border border-border-base rounded-[2rem] overflow-hidden">
                    <div className="bg-bg-base p-12 sm:p-16 space-y-8 hover:bg-bg-surface transition-colors group">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Brain size={24} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold tracking-tight">Neural Synthesis</h3>
                            <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                                Our proprietary algorithms process thousands of flavor profiles to find the exact match for your current emotional and physical state.
                            </p>
                        </div>
                    </div>

                    <div className="bg-bg-base p-12 sm:p-16 space-y-8 hover:bg-bg-surface transition-colors group">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Cpu size={24} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold tracking-tight">Distributed Precision</h3>
                            <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                                We leverage a distributed network of Large Language Models to ensure 100% uptime and the highest precision in every recommendation.
                            </p>
                        </div>
                    </div>

                    <div className="bg-bg-base p-12 sm:p-16 space-y-8 hover:bg-bg-surface transition-colors group">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Zap size={24} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold tracking-tight">Real-time Data</h3>
                            <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                                Integration with global market data allows us to provide accurate, real-time pricing and availability for every dish we suggest.
                            </p>
                        </div>
                    </div>

                    <div className="bg-bg-base p-12 sm:p-16 space-y-8 hover:bg-bg-surface transition-colors group">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield size={24} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold tracking-tight">Privacy Protocol</h3>
                            <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                                Your dietary preferences and habits are encrypted and processed with the highest level of security. We never sell your data.
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="mt-32 pt-16 border-t border-border-base flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="max-w-md">
                        <h4 className="text-xl font-bold mb-4">Ready to begin?</h4>
                        <p className="text-text-muted text-sm font-light">Join thousands of others who have optimized their culinary life with FoodME.</p>
                    </div>
                    <button className="btn-primary px-12 py-6 text-xs">
                        Start Discovery <ArrowRight size={16} />
                    </button>
                </footer>
            </div>
        </div>
    );
}
