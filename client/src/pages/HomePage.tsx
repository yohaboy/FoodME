import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

export default function HomePage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/discovery");
    };

    return (
        <div className="flex flex-col">
            <Hero onStart={handleStart} />
        </div>
    );
}
