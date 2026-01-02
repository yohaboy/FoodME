import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DiscoveryPage from "./pages/DiscoveryPage";
import Results from "./pages/Results";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/discovery" element={<DiscoveryPage />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/features" element={<AboutPage />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

export default App;
