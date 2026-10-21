import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubjectList from "./components/SubjectList";
import SubjectPage from "./components/SubjectPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchModal from "./components/SearchModal";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Global keyboard shortcut: Ctrl+K or Cmd+K to open search modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setIsSearchOpen((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
                <Header onOpenSearch={openSearch} />

                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home onOpenSearch={openSearch} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/sem/:semId" element={<SubjectList />} />
                        <Route path="/sem/:semId/subject/:subjectId" element={<SubjectPage />} />
                        {/* Fallback to home */}
                        <Route path="*" element={<Home onOpenSearch={openSearch} />} />
                    </Routes>
                </main>

                <Footer />
            </div>

            {/* Global Quick Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
        </BrowserRouter>
    );
}

export default App;
