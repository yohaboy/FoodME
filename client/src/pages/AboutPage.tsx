import { motion } from "framer-motion";
import { Brain, Cpu, Zap, Shield } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container-custom py-16 sm:py-24 px-6 sm:px-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <h1 className="text-5xl sm:text-8xl font-bold tracking-tighter leading-none mb-8 sm:mb-12">INTELLIGENCE.</h1>
                <p className="text-text-muted text-lg sm:text-xl font-light leading-relaxed mb-16 sm:mb-24 max-w-2xl">
                    FoodME is not just a recommendation engine. It is a neural framework designed to understand the complex relationship between human psychology, physiology, and flavor.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Brain size={20} className="sm:size-[24px]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Neural Synthesis</h3>
                        <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                            Our proprietary algorithms process thousands of flavor profiles to find the exact match for your current emotional and physical state.
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Cpu size={20} className="sm:size-[24px]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Multi-Model Failover</h3>
                        <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                            We leverage a distributed network of Large Language Models to ensure 100% uptime and the highest precision in every recommendation.
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Zap size={20} className="sm:size-[24px]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Real-time Economics</h3>
                        <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                            Integration with global market data allows us to provide accurate, real-time pricing for every dish we suggest.
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Shield size={20} className="sm:size-[24px]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Privacy Protocol</h3>
                        <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                            Your dietary preferences and habits are encrypted and processed with the highest level of security. We never sell your data.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
