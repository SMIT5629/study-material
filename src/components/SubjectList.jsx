import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/semesters.json";
import {
    HiAcademicCap,
    HiBookOpen,
    HiArrowRight,
    HiMagnifyingGlass,
    HiChevronRight,
    HiArrowLeft,
    HiBriefcase,
    HiDocumentCheck,
    HiLightBulb,
    HiCheckCircle,
    HiSparkles
} from "react-icons/hi2";

export default function SubjectList() {
    const { semId } = useParams();
    const [searchFilter, setSearchFilter] = useState("");

    const semester = data.semesters.find((s) => String(s.id) === String(semId));

    if (!semester) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 mb-4">
                    <HiAcademicCap className="w-12 h-12" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Semester Not Found</h1>
                <p className="text-slate-400 mb-6 max-w-md">
                    We could not find the semester you are looking for. Please select a valid semester from the home page.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
                >
                    <HiArrowLeft className="w-4 h-4" />
                    <span>Return to Home</span>
                </Link>
            </div>
        );
    }

    // Special Case: Semester 8 (Internship & Final Project)
    if (String(semester.id) === "8") {
        return (
            <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-8 sm:py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-6">
                        <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                        <HiChevronRight className="w-3.5 h-3.5 text-slate-600" />
                        <Link to="/#semesters" className="hover:text-cyan-400 transition-colors">Semesters</Link>
                        <HiChevronRight className="w-3.5 h-3.5 text-slate-600" />
                        <span className="text-slate-200 font-medium">Semester 8</span>
                    </nav>

                    {/* Capstone Header Card */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-8 sm:p-12 mb-8 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 mb-4">
                                <HiBriefcase className="w-3.5 h-3.5" />
                                GTU FINAL YEAR CAPSTONE
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                                Semester 8 — Industry Internship & Project
                            </h1>
                            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                                Semester 8 of GTU Computer Engineering and IT is fully dedicated to real-world industrial practice or an advanced capstone software project.
                            </p>
                        </div>
                    </div>

                    {/* Key Objectives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20">
                                <HiBriefcase className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-base mb-2">Industry Internship</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Join a registered company for minimum 14-16 weeks. Gain hands-on production code, backend systems, or client software experience.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/20">
                                <HiDocumentCheck className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-base mb-2">Reports & Documentation</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Prepare periodic diary submissions, mid-term progress reports, certificate of completion, and comprehensive final project thesis.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                                <HiSparkles className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-white text-base mb-2">External University Viva</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Demonstrate working architecture, database design, API endpoints, testing methodologies, and answer university examiner questions.
                            </p>
                        </div>
                    </div>

                    {/* Milestone Checklist */}
                    <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 mb-10">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <HiCheckCircle className="w-5 h-5 text-emerald-400" />
                            Semester 8 Milestone Checklist
                        </h2>
                        <ul className="space-y-4 text-sm text-slate-300">
                            {[
                                "Company offer letter submission and GTU PMMS portal registration",
                                "Approval of project domain, tech stack (Node, Python, Go, Java, Cloud, etc.), and problem statement",
                                "Bi-weekly progress tracking and company mentor sign-offs",
                                "Mid-semester internal presentation and guide feedback",
                                "Final report formatting according to official GTU Computer Engineering guidelines",
                                "Viva defense presentation with architecture diagram and live demonstration",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Back link */}
                    <div className="flex items-center justify-between">
                        <Link
                            to="/#semesters"
                            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                            <HiArrowLeft className="w-4 h-4" />
                            <span>Back to Semesters Overview</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                        >
                            <HiLightBulb className="w-4 h-4 text-amber-400" />
                            <span>Request Project Guidance</span>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }

    // Standard Semesters (Sem 1-2, 3, 4, 5, 7)
    const subjects = semester.subjects || [];
    const filteredSubjects = searchFilter.trim()
        ? subjects.filter(
              (s) =>
                  s.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                  s.id.toLowerCase().includes(searchFilter.toLowerCase())
          )
        : subjects;

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-6">
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                    <HiChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <Link to="/#semesters" className="hover:text-cyan-400 transition-colors">Semesters</Link>
                    <HiChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-slate-200 font-medium">{semester.name}</span>
                </nav>

                {/* Header Banner */}
                <div className="relative rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 mb-10 overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                                <HiAcademicCap className="w-3.5 h-3.5" />
                                GTU COMPUTER & IT CURRICULUM
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                                {semester.name} Subjects
                            </h1>
                            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
                                Select any subject below to view official syllabi, university question papers, textbook PDFs, lab programs, and video playlists.
                            </p>
                        </div>

                        {/* Search Filter Box */}
                        <div className="w-full md:w-80 shrink-0">
                            <div className="relative flex items-center bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 focus-within:border-cyan-500 transition-all">
                                <HiMagnifyingGlass className="w-4 h-4 text-cyan-400 mr-2 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Filter subjects in this sem..."
                                    value={searchFilter}
                                    onChange={(e) => setSearchFilter(e.target.value)}
                                    className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                                />
                                {searchFilter && (
                                    <button
                                        onClick={() => setSearchFilter("")}
                                        className="text-xs text-slate-400 hover:text-white ml-2"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            <div className="mt-1.5 text-right text-xs text-slate-500">
                                Showing {filteredSubjects.length} of {subjects.length} subjects
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subjects Grid */}
                {filteredSubjects.length === 0 ? (
                    <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
                        <HiBookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-white">No matching subjects</h3>
                        <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto">
                            No subjects matched &quot;{searchFilter}&quot; in {semester.name}.
                        </p>
                        <button
                            onClick={() => setSearchFilter("")}
                            className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                        >
                            Reset Filter
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSubjects.map((sub) => {
                            const materialKeys = Object.keys(sub.materials || {}).filter(
                                (k) => k !== "description" && typeof sub.materials[k] === "string" && sub.materials[k].startsWith("http")
                            );
                            const resourceCount = materialKeys.length;

                            return (
                                <Link
                                    key={sub.id}
                                    to={`/sem/${semId}/subject/${sub.id}`}
                                    className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 shadow-lg shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                >
                                    <div>
                                        {/* Card Top: Code badge and resources count */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                                {sub.id}
                                            </span>
                                            <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60">
                                                {resourceCount} Resources
                                            </span>
                                        </div>

                                        {/* Subject Name */}
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                                            {sub.name}
                                        </h3>

                                        {/* Snippet / Description */}
                                        <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6">
                                            {sub.about || "Comprehensive subject study materials, question papers, and playlists for GTU exams."}
                                        </p>
                                    </div>

                                    {/* Action footer */}
                                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                                        <span className="flex items-center gap-1.5">
                                            <HiBookOpen className="w-3.5 h-3.5" />
                                            <span>Access Study Kit</span>
                                        </span>
                                        <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Back navigation */}
                <div className="mt-12 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <Link
                        to="/#semesters"
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <HiArrowLeft className="w-4 h-4" />
                        <span>Back to All Semesters</span>
                    </Link>

                    <p className="text-xs text-slate-500">
                        {semester.name} • GTU Engineering Hub
                    </p>
                </div>

            </div>
        </div>
    );
}
