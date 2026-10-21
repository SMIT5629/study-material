import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HiMagnifyingGlass, HiBars3, HiXMark, HiAcademicCap, HiSparkles } from "react-icons/hi2";

export default function Header({ onOpenSearch }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
    ];

    const handleSemesterClick = (e) => {
        setMobileOpen(false);
        if (window.location.pathname === "/") {
            const el = document.getElementById("semesters");
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/#semesters");
        }
    };

    return (
        <header className="sticky top-0 z-40 w-full bg-[#0b0f19]/85 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    
                    {/* Brand Logo */}
                    <Link
                        to="/"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center space-x-3 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all duration-300">
                            <HiAcademicCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                                PadhLe<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Beta</span>
                            </span>
                            <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase -mt-1 flex items-center gap-1">
                                GTU Engineering Hub
                                <HiSparkles className="w-2.5 h-2.5 text-cyan-400" />
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                className={({ isActive }) =>
                                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 shadow-sm shadow-cyan-500/10"
                                            : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button
                            onClick={handleSemesterClick}
                            className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 cursor-pointer"
                        >
                            Semesters
                        </button>
                    </nav>

                    {/* Right actions: Search button & Mobile Menu trigger */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={onOpenSearch}
                            className="flex items-center space-x-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 cursor-pointer group shadow-inner"
                            title="Search subjects across all semesters"
                        >
                            <HiMagnifyingGlass className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span className="hidden sm:inline text-slate-300">Quick Search...</span>
                            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
                                ⌘K
                            </kbd>
                        </button>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 focus:outline-none transition-colors"
                            aria-label="Toggle navigation menu"
                        >
                            {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileOpen && (
                <div className="md:hidden border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
                    <button
                        onClick={() => {
                            setMobileOpen(false);
                            onOpenSearch();
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/70 text-slate-300 text-sm"
                    >
                        <span className="flex items-center space-x-2">
                            <HiMagnifyingGlass className="w-4 h-4 text-cyan-400" />
                            <span>Search all subjects...</span>
                        </span>
                        <span className="text-xs text-slate-500">Tap to search</span>
                    </button>

                    <div className="grid grid-cols-1 gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                        isActive
                                            ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                                            : "text-slate-300 hover:bg-slate-800/60"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button
                            onClick={handleSemesterClick}
                            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/60"
                        >
                            All Semesters
                        </button>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-1">
                        <span>GTU Computer / IT Engineering Hub</span>
                        <span className="text-cyan-400 font-medium">Free & Open</span>
                    </div>
                </div>
            )}
        </header>
    );
}
