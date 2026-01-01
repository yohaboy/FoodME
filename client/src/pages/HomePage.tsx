import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowLeft,
    Loader2,
    Check,
    Clock,
    Target,
    Flame,
    DollarSign
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { useAuth } from "../context/AuthContext";

const MOODS = [
    { value: "energized", label: "Energized", desc: "High energy, hearty meal" },
    { value: "lazy_day", label: "Lazy Day", desc: "Minimal effort, comfort" },
    { value: "comfort_craving", label: "Comfort", desc: "Warm and satisfying" },
    { value: "explorative", label: "Explore", desc: "Unique and adventurous" },
    { value: "health_focused", label: "Healthy", desc: "Clean and nutritious" },
];

const DIETS = [
    { value: "balanced", label: "Balanced", desc: "A bit of everything" },
    { value: "low_carb", label: "Low Carb", desc: "Proteins and healthy fats" },
    { value: "high_protein", label: "High Protein", desc: "Muscle fuel" },
    { value: "vegan", label: "Vegan", desc: "100% plant-based" },
    { value: "vegetarian", label: "Vegetarian", desc: "Meat-free selections" },
    { value: "keto", label: "Keto", desc: "High fat, very low carb" },
];

export default function HomePage() {
    const navigate = useNavigate();
    const { user, token, refreshUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        mood: "energized",
        diet_type: "balanced",
        preferred_time: "lunch",
        serving_size: "solo",
        health_goal: "general_wellness",
        spice_level: "medium",
        cost_range_min: 10,
        cost_range_max: 50,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            setError("AUTHENTICATION_REQUIRED: Please sign in to access the neural engine.");
            return;
        }
        setLoading(true);
        setError("");

        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/recommendation/", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                await refreshUser();
                navigate("/results", { state: { recommendations: data } });
            } else if (response.status === 403) {
                const data = await response.json();
                setError(data.error || "OUT_OF_TOKENS: Please recharge your account.");
            } else {
                setError("SYNTHESIS_ERROR: The neural engine encountered an issue.");
            }
        } catch (error) {
            setError("CONNECTION_ERROR: Failed to communicate with the neural engine.");
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const RadioOption = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center gap-3 p-4 sm:p-5 rounded-2xl border-2 transition-all w-full text-left ${active
                ? "border-text-base bg-bg-surface shadow-md"
                : "border-border-base text-text-muted hover:border-text-muted"
                }`}
        >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${active ? "border-text-base" : "border-border-base"
                }`}>
                {active && <div className="w-2.5 h-2.5 rounded-full bg-text-base animate-in fade-in zoom-in duration-300" />}
            </div>
            <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${active ? "text-text-base" : "text-text-muted"}`}>
                {label}
            </span>
        </button>
    );

    return (
        <div className="container-custom py-8 sm:py-12 md:py-24 px-6 sm:px-10">
            <header className="mb-16 sm:mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-text-muted mb-4 sm:mb-6"
                        >
                            <div className="h-[1px] w-6 sm:w-8 bg-border-base" />
                            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em]">Neural Gastronomy v2.0</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 sm:mb-12"
                        >
                            FOOD<br />INTELLIGENCE.
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-start md:items-end gap-4"
                    >
                        <div className="text-left md:text-right">
                            <span className="block text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Current Phase</span>
                            <span className="text-xl sm:text-2xl font-bold tabular-nums">0{step} / 03</span>
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`h-1 w-10 sm:w-12 transition-all duration-500 ${step >= i ? 'bg-text-base' : 'bg-border-base'}`} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="max-w-5xl">
                {error && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-12 p-6 sm:p-8 border-2 border-text-base bg-bg-surface text-[10px] font-bold uppercase tracking-[0.3em] text-center rounded-3xl flex flex-col items-center gap-4 sm:gap-6"
                    >
                        <span className="max-w-md leading-relaxed">{error}</span>
                        {!user && (
                            <Link to="/login" className="btn-primary py-3 px-8 text-[10px] text-blue-600">
                                Sign In Now
                            </Link>
                        )}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-12"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                                    <div className="lg:col-span-4">
                                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Current Mood</h2>
                                        <p className="text-text-muted font-light leading-relaxed text-base sm:text-lg">Your current mood acts as the primary filter for our flavor synthesis engine.</p>
                                    </div>
                                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {MOODS.map((mood) => (
                                            <div
                                                key={mood.value}
                                                onClick={() => setFormData({ ...formData, mood: mood.value })}
                                                className={`option-card group p-6 sm:p-8 ${formData.mood === mood.value ? 'active' : ''}`}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="space-y-1">
                                                        <h3 className="font-bold text-lg sm:text-xl uppercase tracking-tight">{mood.label}</h3>
                                                        <p className="text-xs sm:text-sm text-text-muted font-medium leading-relaxed">{mood.desc}</p>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.mood === mood.value ? 'bg-text-base border-text-base' : 'border-border-base'}`}>
                                                        {formData.mood === mood.value && <Check size={12} className="text-bg-base" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-end pt-12 border-t border-border-base">
                                    <button type="button" onClick={nextStep} className="btn-primary w-full sm:w-auto">
                                        Proceed to Diet <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-12"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                                    <div className="lg:col-span-4">
                                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Dietary Framework</h2>
                                        <p className="text-text-muted font-light leading-relaxed text-base sm:text-lg">Establish the nutritional boundaries for your recommendation set.</p>
                                    </div>
                                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {DIETS.map((diet) => (
                                            <div
                                                key={diet.value}
                                                onClick={() => setFormData({ ...formData, diet_type: diet.value })}
                                                className={`option-card group p-6 sm:p-8 ${formData.diet_type === diet.value ? 'active' : ''}`}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="space-y-1">
                                                        <h3 className="font-bold text-lg sm:text-xl uppercase tracking-tight">{diet.label}</h3>
                                                        <p className="text-xs sm:text-sm text-text-muted font-medium leading-relaxed">{diet.desc}</p>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.diet_type === diet.value ? 'bg-text-base border-text-base' : 'border-border-base'}`}>
                                                        {formData.diet_type === diet.value && <Check size={12} className="text-bg-base" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-12 border-t border-border-base">
                                    <button type="button" onClick={prevStep} className="btn-secondary w-full sm:w-auto order-2 sm:order-1">
                                        <ArrowLeft size={16} /> Back
                                    </button>
                                    <button type="button" onClick={nextStep} className="btn-primary w-full sm:w-auto order-1 sm:order-2">
                                        Finalize <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-12"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
                                    <div className="lg:col-span-4">
                                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Technical Specs</h2>
                                        <p className="text-text-muted font-light leading-relaxed text-base sm:text-lg">Fine-tune the remaining variables for maximum precision.</p>
                                    </div>
                                    <div className="lg:col-span-8 space-y-12 sm:space-y-16">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
                                            <div className="space-y-8 sm:space-y-10">
                                                <div>
                                                    <label className="flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-4 sm:mb-6">
                                                        <Clock size={12} /> Temporal Context
                                                    </label>
                                                    <div className="grid grid-cols-1 gap-3">
                                                        {["breakfast", "lunch", "dinner", "snack"].map(t => (
                                                            <RadioOption
                                                                key={t}
                                                                label={t}
                                                                active={formData.preferred_time === t}
                                                                onClick={() => setFormData({ ...formData, preferred_time: t })}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-4 sm:mb-6">
                                                        <Target size={12} /> Health Objective
                                                    </label>
                                                    <Select
                                                        value={formData.health_goal}
                                                        onValueChange={(v) => setFormData({ ...formData, health_goal: v })}
                                                    >
                                                        <SelectTrigger className="input-field h-14 sm:h-16 text-[10px] sm:text-sm font-bold uppercase tracking-widest">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-bg-surface border-border-base">
                                                            <SelectItem value="weight_loss">Weight Loss</SelectItem>
                                                            <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                                                            <SelectItem value="maintenance">Maintenance</SelectItem>
                                                            <SelectItem value="energy_boost">Energy Boost</SelectItem>
                                                            <SelectItem value="general_wellness">General Wellness</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-8 sm:space-y-10">
                                                <div>
                                                    <label className="flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-4 sm:mb-6">
                                                        <Flame size={12} /> Spice Intensity
                                                    </label>
                                                    <div className="grid grid-cols-1 gap-3">
                                                        {["none", "mild", "medium", "hot"].map((level) => (
                                                            <RadioOption
                                                                key={level}
                                                                label={level}
                                                                active={formData.spice_level === level}
                                                                onClick={() => setFormData({ ...formData, spice_level: level })}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex justify-between items-center mb-6 sm:mb-8">
                                                        <label className="flex items-center gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                                                            <DollarSign size={12} /> Economic Range
                                                        </label>
                                                        <span className="text-xs sm:text-sm font-bold tabular-nums">${formData.cost_range_min} — ${formData.cost_range_max}</span>
                                                    </div>
                                                    <Slider
                                                        defaultValue={[formData.cost_range_min, formData.cost_range_max]}
                                                        max={200}
                                                        step={5}
                                                        onValueChange={([min, max]) => setFormData({ ...formData, cost_range_min: min, cost_range_max: max })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-12 border-t border-border-base">
                                    <button type="button" onClick={prevStep} className="btn-secondary w-full sm:w-auto order-2 sm:order-1">
                                        <ArrowLeft size={16} /> Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary w-full sm:w-auto px-12 sm:px-16 order-1 sm:order-2"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                <span>Synthesizing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Generate Selections</span>
                                                <ArrowRight size={20} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </div>
    );
}
