import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-bg-base overflow-hidden px-6">
            {/* Abstract CSS Centerpiece (No Image) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="relative w-64 h-64 mb-16 flex items-center justify-center"
            >
                {/* Rotating Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-text-base/5 rounded-[38%_62%_63%_37%/41%_44%_56%_59%]"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-text-base/10 rounded-[50%_50%_30%_70%/50%_50%_70%_30%]"
                />

                {/* The "Core" */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-4 h-4 bg-text-base rounded-full shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                />
            </motion.div>

            <div className="text-center max-w-3xl relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl sm:text-7xl font-light tracking-[0.15em] uppercase leading-none">
                        Neural <br />
                        <span className="font-bold">Gastronomy</span>
                    </h1>

                    <div className="h-[1px] w-12 bg-text-base/20 mx-auto" />

                    <p className="text-text-muted text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase max-w-md mx-auto leading-loose">
                        Synthesizing the future of <br />
                        personalized culinary roadmaps.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-16"
                >
                    <button
                        onClick={onStart}
                        className="group relative inline-flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.5em] py-5 px-12 border border-text-base/10 rounded-full hover:bg-text-base hover:text-bg-base transition-all duration-700 ease-in-out"
                    >
                        Begin Synthesis
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </button>
                </motion.div>
            </div>

            {/* Subtle background markers */}
            <div className="absolute bottom-12 left-12 hidden lg:block">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-text-base/10" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-text-muted/40">
                        V2.0.4 / CORE
                    </span>
                </div>
            </div>
        </section>
    );
}
