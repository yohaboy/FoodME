import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Clock,
    Star,
    Share2,
    Heart,
    Sparkles,
    ChevronRight
} from "lucide-react";

interface Recommendation {
    id: number;
    name: string;
    description: string;
    image_url: string;
    estimated_cost: number;
}

export default function Results() {
    const location = useLocation();
    const recommendations = location.state?.recommendations as Recommendation[] || [];

    if (recommendations.length === 0) {
        return (
            <div className="container-custom min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <div className="w-16 h-16 bg-bg-surface rounded-2xl flex items-center justify-center mb-8 border border-border-base">
                    <Sparkles className="text-text-muted" size={32} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">No matches found</h2>
                <p className="text-text-muted mb-10 max-w-md text-sm sm:text-base font-light leading-relaxed">
                    The synthesis engine couldn't find a match with your current parameters.
                    Try broadening your search criteria.
                </p>
                <Link to="/" className="btn-primary py-4 px-8">
                    Return to Discovery
                </Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12 sm:py-20 px-6 sm:px-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-border-base">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-text-muted mb-4"
                    >
                        <Sparkles size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">AI Recommendations</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6"
                    >
                        Your Perfect <br />Matches.
                    </motion.h1>
                    <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed max-w-lg">
                        Curated culinary experiences derived from your preferences and dietary framework.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-3"
                >
                    <button className="btn-secondary py-3 px-6 text-[10px]">
                        <Share2 size={14} /> Share
                    </button>
                    <button className="btn-primary py-3 px-6 text-[10px]">
                        <Heart size={14} /> Save All
                    </button>
                </motion.div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((rec, index) => (
                    <motion.div
                        key={rec.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex flex-col"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-bg-surface border border-border-base">
                            <img
                                src={rec.image_url}
                                alt={rec.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute top-4 right-4 bg-bg-base/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border-base flex items-center gap-1.5 shadow-sm">
                                <Star size={12} className="fill-text-base" />
                                <span className="text-[10px] font-bold tabular-nums">4.9</span>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <div className="flex justify-between items-start gap-4 mb-3">
                                <h3 className="text-xl font-bold tracking-tight group-hover:text-text-muted transition-colors leading-tight">
                                    {rec.name}
                                </h3>
                                <div className="flex items-baseline gap-0.5 font-bold text-lg tabular-nums">
                                    <span className="text-[10px] text-text-muted">$</span>
                                    {rec.estimated_cost}
                                </div>
                            </div>

                            <p className="text-text-muted text-sm leading-relaxed font-light line-clamp-2 mb-6">
                                {rec.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-5 border-t border-border-base">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[8px] font-bold uppercase tracking-widest text-text-muted">Time</span>
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold">
                                            <Clock size={12} /> 25 MIN
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[8px] font-bold uppercase tracking-widest text-text-muted">Intensity</span>
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold">
                                            <Sparkles size={12} /> MODERATE
                                        </div>
                                    </div>
                                </div>
                                <button className="p-2 rounded-full bg-bg-surface border border-border-base hover:border-text-base transition-colors group/btn">
                                    <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Refinement Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 py-20 border-t border-border-base text-center space-y-8"
            >
                <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Re-synthesize?</h2>
                    <p className="text-text-muted text-base font-light max-w-xl mx-auto leading-relaxed">
                        Our engine is iterative. If these results don't align with your vision,
                        we can adjust the neural parameters.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/" className="btn-secondary py-4 px-10 text-[10px]">Adjust Parameters</Link>
                    <button className="btn-primary py-4 px-10 text-[10px]">Regenerate Menu</button>
                </div>
            </motion.section>
        </div>
    );
}
