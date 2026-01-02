import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-white overflow-hidden px-6 py-20">
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "15vh", opacity: 0.1 }}
                transition={{ duration: 2, ease: "circOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-black z-10"
            />

            <div className="text-center max-w-4xl relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10 sm:space-y-12"
                >
                    <div className="relative inline-block">
                        <h1 className="text-6xl sm:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] sm:leading-[0.75] uppercase select-none">
                            Food.
                            <motion.span
                                initial={{ opacity: 0.1 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className="italic text-black/20"
                            >
                                Me.
                            </motion.span>
                        </h1>

                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"
                        />
                    </div>

                    <div className="space-y-8 sm:space-y-10 max-w-lg mx-auto">
                        <div className="space-y-4">
                            <p className="text-black/40 text-[9px] sm:text-xs font-bold tracking-[0.4em] sm:tracking-[0.8em] uppercase leading-relaxed">
                                Intelligent Selection
                            </p>
                            <p className="text-base sm:text-xl font-medium leading-tight tracking-tight text-black/80 font-serif px-4 sm:px-0">
                                Generate your perfect food choices based on your current mood, dietary framework, and real-time cravings. We simplify the decision, so you can focus on the flavor.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                        >
                            <button
                                onClick={onStart}
                                className="group relative inline-flex items-center gap-4 sm:gap-8 text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] py-6 px-10 sm:py-8 sm:px-16 border border-black/10 rounded-full bg-black text-white transition-all duration-700 ease-in-out overflow-hidden"
                            >
                                <span className="relative z-10">Start Discovery</span>
                                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
