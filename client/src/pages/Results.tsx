import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Clock,
    Star,
    Share2,
    Heart,
    Sparkles
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
            <div className="container-custom min-h-[70vh] flex flex-col items-center justify-center text-center px-10">
                <h2 className="text-5xl font-bold tracking-tighter mb-6">NULL_RESULTS</h2>
                <p className="text-text-muted mb-12 max-w-lg text-lg font-light leading-relaxed">
                    The synthesis engine failed to find a match within your current parameters.
                    Broaden your framework and try again.
                </p>
                <Link to="/" className="btn-primary">
                    Return to Discovery
                </Link>
            </div>
        );
    }

    return (
        <div className="container-custom py-12 md:py-24 px-6 sm:px-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 pb-12 border-b border-border-base">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-text-base transition-colors text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                        <ArrowLeft size={14} />
                        Back to Discovery
                    </Link>
                    <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-[0.85] mb-8">
                        SYNTHESIZED<br />SELECTIONS.
                    </h1>
                    <p className="text-text-muted text-xl font-light leading-relaxed max-w-xl">
                        Curated culinary experiences derived from your neural profile and dietary framework.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4"
                >
                    <button className="btn-secondary w-full sm:w-auto">
                        <Share2 size={16} /> Share
                    </button>
                    <button className="btn-primary w-full sm:w-auto">
                        <Heart size={16} /> Save All
                    </button>
                </motion.div>
            </div>

            {/* Results Grid */}
            <div className="responsive-grid">
                {recommendations.map((rec, index) => (
                    <motion.div
                        key={rec.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="group"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8 bg-bg-surface border border-border-base">
                            <img
                                src={rec.image_url}
                                alt={rec.name}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            <div className="absolute top-6 right-6 bg-bg-base/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-border-base flex items-center gap-2">
                                <Star size={14} className="fill-text-base" />
                                <span className="text-xs font-bold tabular-nums">4.9</span>
                            </div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                                    <Sparkles size={12} />
                                    Top Synthesis
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-tighter leading-none">
                                    {rec.name}
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-6 px-2">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-3xl font-bold tracking-tighter group-hover:text-text-muted transition-colors leading-none uppercase">{rec.name}</h3>
                                <div className="flex items-baseline gap-1 font-bold text-2xl tabular-nums">
                                    <span className="text-xs text-text-muted">$</span>
                                    {rec.estimated_cost}
                                </div>
                            </div>

                            <p className="text-text-muted text-sm leading-relaxed font-light line-clamp-2">
                                {rec.description}
                            </p>

                            <div className="flex items-center gap-8 pt-6 border-t border-border-base">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-text-muted">Prep Time</span>
                                    <div className="flex items-center gap-2 text-xs font-bold">
                                        <Clock size={12} /> 25 MIN
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-text-muted">Intensity</span>
                                    <div className="flex items-center gap-2 text-xs font-bold">
                                        <Sparkles size={12} /> MODERATE
                                    </div>
                                </div>
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
                className="mt-48 py-32 border-t border-border-base text-center space-y-12 mb-24"
            >
                <div className="space-y-6">
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter">RE_SYNTHESIZE?</h2>
                    <p className="text-text-muted text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Our engine is iterative. If these results don't align with your vision,
                        we can adjust the neural parameters.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link to="/" className="btn-secondary px-12">Adjust Parameters</Link>
                    <button className="btn-primary px-12">Regenerate Menu</button>
                </div>
            </motion.section>
        </div>
    );
}
