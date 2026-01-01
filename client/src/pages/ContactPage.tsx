import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container-custom py-24 px-6 sm:px-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-none mb-12">COMMUNITY.</h1>
                <p className="text-text-muted text-xl font-light leading-relaxed mb-24 max-w-2xl">
                    Connect with the minds behind FoodME. Whether you have technical inquiries or want to discuss the future of food intelligence, we are here.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="p-10 border-2 border-border-base rounded-3xl space-y-6 hover:border-text-base transition-colors">
                        <Mail size={32} />
                        <h3 className="text-2xl font-bold tracking-tight">Email Lab</h3>
                        <p className="text-text-muted font-light">Direct inquiries to our core research team.</p>
                        <a href="mailto:lab@foodme.ai" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                            lab@foodme.ai <ArrowRight size={14} />
                        </a>
                    </div>

                    <div className="p-10 border-2 border-border-base rounded-3xl space-y-6 hover:border-text-base transition-colors">
                        <MessageSquare size={32} />
                        <h3 className="text-2xl font-bold tracking-tight">Discord Nexus</h3>
                        <p className="text-text-muted font-light">Join the conversation with thousands of other users.</p>
                        <a href="#" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                            Join Server <ArrowRight size={14} />
                        </a>
                    </div>
                </div>

                <form className="space-y-12 max-w-2xl">
                    <div className="space-y-4">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted ml-2">Your Identity</label>
                        <input type="text" className="input-field h-20 text-lg" placeholder="Name or Alias" />
                    </div>
                    <div className="space-y-4">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted ml-2">Communication Channel</label>
                        <input type="email" className="input-field h-20 text-lg" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-4">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted ml-2">Transmission</label>
                        <textarea className="input-field min-h-[200px] py-6 text-lg resize-none" placeholder="Your message..."></textarea>
                    </div>
                    <button type="button" className="btn-primary w-full h-20 text-base">
                        Send Transmission
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
