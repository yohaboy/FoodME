import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="container-custom min-h-[80vh] flex flex-col items-center justify-center text-center px-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-12"
            >
                <div className="relative inline-block">
                    <h1 className="text-[12rem] sm:text-[18rem] font-bold tracking-tighter leading-none opacity-5">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Search size={80} className="text-text-muted opacity-20" />
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter">PATH_NOT_FOUND</h2>
                    <p className="text-text-muted text-xl font-light max-w-md mx-auto leading-relaxed">
                        The neural coordinates you provided do not exist within our current framework.
                    </p>
                </div>

                <Link to="/" className="btn-primary inline-flex items-center gap-3">
                    <ArrowLeft size={18} />
                    Return to Nexus
                </Link>
            </motion.div>
        </div>
    );
}
