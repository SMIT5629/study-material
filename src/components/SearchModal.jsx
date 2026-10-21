import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HiMagnifyingGlass, HiXMark, HiBookOpen, HiArrowRight } from "react-icons/hi2";
import { allSubjects } from "../utils/searchIndex";

export default function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setQuery("");
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const filtered = query.trim() === ""
        ? allSubjects.slice(0, 8)
        : allSubjects.filter((s) =>
            s.name.toLowerCase().includes(query.toLowerCase()) ||
            s.id.toLowerCase().includes(query.toLowerCase()) ||
            s.semName.toLowerCase().includes(query.toLowerCase())
        );

    const handleSelect = (subject) => {
        onClose();
        navigate(`/sem/${subject.semId}/subject/${subject.id}`);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Box */}
            <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
                {/* Search Bar Input */}
                <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
                    <HiMagnifyingGlass className="text-xl text-cyan-400 mr-3 shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search subjects, codes, or semesters (e.g., Data Structures, DBMS, Sem 3)..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-base focus:outline-none"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="p-1 text-slate-400 hover:text-white rounded mr-2"
                        >
                            <HiXMark className="w-5 h-5" />
                        </button>
                    )}
                    <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded shadow-inner">
                        ESC
                    </kbd>
                </div>

                {/* Results List */}
                <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
                    {query.trim() === "" && (
                        <div className="px-3 py-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                            Popular Subjects
                        </div>
                    )}

                    {filtered.length === 0 ? (
                        <div className="py-12 text-center">
                            <HiBookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                            <p className="text-slate-300 font-medium">No subjects found</p>
                            <p className="text-sm text-slate-500 mt-1">
                                Try searching for another keyword like &quot;Maths&quot;, &quot;Java&quot;, or &quot;Networks&quot;
                            </p>
                        </div>
                    ) : (
                        filtered.map((item) => (
                            <div
                                key={`${item.semId}-${item.id}`}
                                onClick={() => handleSelect(item)}
                                className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer border border-transparent hover:border-cyan-500/30 transition-all duration-150"
                            >
                                <div className="flex items-center space-x-3 min-w-0">
                                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-mono text-xs font-bold group-hover:bg-cyan-500/20">
                                        {item.id.slice(0, 3)}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-medium text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                                            {item.name}
                                        </div>
                                        <div className="flex items-center space-x-2 text-xs text-slate-400 mt-0.5">
                                            <span>{item.semName}</span>
                                            <span>•</span>
                                            <span className="text-cyan-400/90">{item.resourceCount} materials</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all pl-2 shrink-0">
                                    <HiArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer status */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Press <kbd className="text-slate-400 font-mono">ESC</kbd> to exit</span>
                    <span className="text-slate-400">Total 39 Subjects Indexed</span>
                </div>
            </div>
        </div>
    );
}
