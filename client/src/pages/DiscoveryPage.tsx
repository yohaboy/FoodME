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
    DollarSign,
    Sparkles
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

export default function DiscoveryPage() {
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
            setError("AUTHENTICATION_REQUIRED: Please sign in to access the AI engine.");
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
                setError("ERROR: The AI engine encountered an issue.");
            }
        } catch (error) {
            setError("CONNECTION_ERROR: Failed to communicate with the AI engine.");
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
            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all w-full text-left ${active
                ? "border-text-base bg-bg-surface shadow-sm"
                : "border-border-base text-text-muted hover:border-text-muted"
                }`}
        >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${active ? "border-text-base" : "border-border-base"
                }`}>
                {active && <div className="w-2 h-2 rounded-full bg-text-base animate-in fade-in zoom-in duration-300" />}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? "text-text-base" : "text-text-muted"}`}>
                {label}
            </span>
        </button>
    );

    return (
        <div className="container-custom py-12 sm:py-20 px-6 sm:px-10">
            <header className="mb-16 sm:mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-text-muted mb-4"
                        >
                            <Sparkles size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Recommendation Engine</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6"
                        >
                            Find Your <br />Perfect Meal.
                        </motion.h1>
                        <p className="text-text-muted text-base font-light max-w-lg">
                            Adjust the parameters below to help our AI find the perfect culinary matches for you.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-start md:items-end gap-4"
                    >
                        <div className="text-left md:text-right">
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Step</span>
                            <span className="text-2xl font-bold tabular-nums">0{step} / 03</span>
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`h-1 w-12 transition-all duration-500 ${step >= i ? 'bg-text-base' : 'bg-border-base'}`} />
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
                        className="mb-12 p-6 border-2 border-text-base bg-bg-surface text-[10px] font-bold uppercase tracking-widest text-center rounded-2xl flex flex-col items-center gap-4"
                    >
                        <span className="max-w-md leading-relaxed">{error}</span>
                        {!user && (
                            <Link to="/login" className="btn-primary py-3 px-8 text-[10px] text-white">
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
                                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Current Mood</h3>
                                        <p className="text-text-muted font-light leading-relaxed text-sm sm:text-base">Your current mood acts as the primary filter for our recommendation engine.</p>
                                    </div>
                                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {MOODS.map((mood) => (
                                            <div
                                                key={mood.value}
                                                onClick={() => setFormData({ ...formData, mood: mood.value })}
                                                className={`option-card group p-6 ${formData.mood === mood.value ? 'active' : ''}`}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="space-y-1">
                                                        <h4 className="font-bold text-lg uppercase tracking-tight">{mood.label}</h4>
                                                        <p className="text-xs text-text-muted font-medium leading-relaxed">{mood.desc}</p>
                                                    </div>
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.mood === mood.value ? 'bg-text-base border-text-base' : 'border-border-base'}`}>
                                                        {formData.mood === mood.value && <Check size={10} className="text-bg-base" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-end pt-12 border-t border-border-base">
                                    <button type="button" onClick={nextStep} className="btn-primary py-4 px-10 text-[14px]">
                                        Proceed to Diet <ArrowRight size={14} />
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
                                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Dietary Framework</h3>
                                        <p className="text-text-muted font-light leading-relaxed text-sm sm:text-base">Establish the nutritional boundaries for your recommendation set.</p>
                                    </div>
                                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {DIETS.map((diet) => (
                                            <div
                                                key={diet.value}
                                                onClick={() => setFormData({ ...formData, diet_type: diet.value })}
                                                className={`option-card group p-6 ${formData.diet_type === diet.value ? 'active' : ''}`}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="space-y-1">
                                                        <h4 className="font-bold text-lg uppercase tracking-tight">{diet.label}</h4>
                                                        <p className="text-xs text-text-muted font-medium leading-relaxed">{diet.desc}</p>
                                                    </div>
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.diet_type === diet.value ? 'bg-text-base border-text-base' : 'border-border-base'}`}>
                                                        {formData.diet_type === diet.value && <Check size={10} className="text-bg-base" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-12 border-t border-border-base">
                                    <button type="button" onClick={prevStep} className="btn-secondary py-4 px-10 text-[14px] order-2 sm:order-1">
                                        <ArrowLeft size={14} /> Back
                                    </button>
                                    <button type="button" onClick={nextStep} className="btn-primary py-4 px-10 text-[14px] order-1 sm:order-2">
                                        Finalize <ArrowRight size={14} />
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
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                    <div className="lg:col-span-4">
                                        <h3 className="text-2xl font-bold mb-3 tracking-tight">Technical Specs</h3>
                                        <p className="text-text-muted font-light leading-relaxed text-sm sm:text-base">Fine-tune the remaining variables for maximum precision.</p>
                                    </div>
                                    <div className="lg:col-span-8 space-y-12">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                            <div className="space-y-8">
                                                <div>
                                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">
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
                                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">
                                                        <Target size={12} /> Health Objective
                                                    </label>
                                                    <Select
                                                        value={formData.health_goal}
                                                        onValueChange={(v) => setFormData({ ...formData, health_goal: v })}
                                                    >
                                                        <SelectTrigger className="input-field h-14 text-[10px] font-bold uppercase tracking-widest">
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

                                            <div className="space-y-8">
                                                <div>
                                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">
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
                                                    <div className="flex justify-between items-center mb-6">
                                                        <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted">
                                                            <DollarSign size={12} /> Economic Range
                                                        </label>
                                                        <span className="text-xs font-bold tabular-nums">${formData.cost_range_min} — ${formData.cost_range_max}</span>
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
                                    <button type="button" onClick={prevStep} className="btn-secondary py-4 px-10 text-[14px] order-2 sm:order-1">
                                        <ArrowLeft size={14} /> Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary py-4 px-12 text-[10px] order-1 sm:order-2"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={16} />
                                                <span>Finding matches...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Generate Selections</span>
                                                <ArrowRight size={16} />
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
