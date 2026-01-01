import { motion } from "framer-motion";
import { Brain, Cpu, Zap, Shield } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container-custom py-24 px-6 sm:px-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-none mb-12">INTELLIGENCE.</h1>
                <p className="text-text-muted text-xl font-light leading-relaxed mb-24 max-w-2xl">
                    FoodME is not just a recommendation engine. It is a neural framework designed to understand the complex relationship between human psychology, physiology, and flavor.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Neural Synthesis</h3>
                        <p className="text-text-muted font-light leading-relaxed">
                            Our proprietary algorithms process thousands of flavor profiles to find the exact match for your current emotional and physical state.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Cpu size={24} />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Multi-Model Failover</h3>
                        <p className="text-text-muted font-light leading-relaxed">
                            We leverage a distributed network of Large Language Models to ensure 100% uptime and the highest precision in every recommendation.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Real-time Economics</h3>
                        <p className="text-text-muted font-light leading-relaxed">
                            Integration with global market data allows us to provide accurate, real-time pricing for every dish we suggest.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-text-base text-bg-base rounded-xl flex items-center justify-center">
                            <Shield size={24} />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Privacy Protocol</h3>
                        <p className="text-text-muted font-light leading-relaxed">
                            Your dietary preferences and habits are encrypted and processed with the highest level of security. We never sell your data.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
