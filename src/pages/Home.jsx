import { useState } from "react";
import { Link } from "react-router-dom";
import SemesterList from "../components/SemesterList";
import {
    HiAcademicCap,
    HiSparkles,
    HiMagnifyingGlass,
    HiArrowDown,
    HiDocumentText,
    HiVideoCamera,
    HiCheckBadge,
    HiFolderOpen,
    HiBookOpen,
    HiCommandLine,
    HiPencilSquare,
    HiShieldCheck,
    HiLightBulb,
    HiArrowRight
} from "react-icons/hi2";
import { allSubjects } from "../utils/searchIndex";

export default function Home({ onOpenSearch }) {
    const [inlineQuery, setInlineQuery] = useState("");

    const quickSearchResults = inlineQuery.trim()
        ? allSubjects.filter(
              (s) =>
                  s.name.toLowerCase().includes(inlineQuery.toLowerCase()) ||
                  s.id.toLowerCase().includes(inlineQuery.toLowerCase())
          ).slice(0, 5)
        : [];

    const resourceHighlights = [
        {
            title: "GTU Papers & Solved",
            desc: "Previous 5+ years university question papers with step-by-step solved solutions.",
            icon: <HiDocumentText className="w-6 h-6 text-cyan-400" />,
            badge: "Exam Ready",
            gradient: "from-cyan-500/10 to-transparent",
        },
        {
            title: "Curated Playlists",
            desc: "Topic-by-topic YouTube video lectures from the best GTU and tech educators.",
            icon: <HiVideoCamera className="w-6 h-6 text-rose-400" />,
            badge: "Concept Clarity",
            gradient: "from-rose-500/10 to-transparent",
        },
        {
            title: "Standard GTU Books",
            desc: "Prescribed university textbooks and standard foreign author reference PDFs.",
            icon: <HiBookOpen className="w-6 h-6 text-indigo-400" />,
            badge: "Complete Books",
            gradient: "from-indigo-500/10 to-transparent",
        },
        {
            title: "IMP & MIMP Questions",
            desc: "Repeated GTU exam questions with answers for high-yield, quick revision.",
            icon: <HiSparkles className="w-6 h-6 text-amber-400" />,
            badge: "High Weightage",
            gradient: "from-amber-500/10 to-transparent",
        },
        {
            title: "Lab Manuals & Code",
            desc: "Complete practical programs, write-ups, and lab files for submission & viva.",
            icon: <HiCommandLine className="w-6 h-6 text-emerald-400" />,
            badge: "Practicals",
            gradient: "from-emerald-500/10 to-transparent",
        },
        {
            title: "Handwritten Notes",
            desc: "Crisp faculty and topper handwritten notes covering the entire GTU syllabus.",
            icon: <HiPencilSquare className="w-6 h-6 text-fuchsia-400" />,
            badge: "Short Notes",
            gradient: "from-fuchsia-500/10 to-transparent",
        },
    ];

    const stats = [
        { value: "6", label: "Semesters Covered", detail: "Sem 1 to Sem 8" },
        { value: "39+", label: "Computer Subjects", detail: "Full GTU Curriculum" },
        { value: "250+", label: "Direct Drive Links", detail: "Fast 1-Click Access" },
        { value: "100%", label: "Free & Open Access", detail: "No Paywalls, Ever" },
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col items-center">
            
            {/* Ambient Background Glow Orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/15 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full" />
                <div className="absolute top-[650px] left-1/4 w-[500px] h-[300px] bg-cyan-700/10 blur-[140px] rounded-full" />
            </div>

            {/* HERO SECTION */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 text-center">
                
                {/* Announcement Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-cyan-500/10">
                    <HiSparkles className="w-4 h-4 text-cyan-400" />
                    <span>Free Open Educational Platform for GTU Computer & IT</span>
                    <span className="hidden sm:inline text-slate-500">•</span>
                    <span className="hidden sm:inline text-slate-300 font-mono">v2.0</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
                    Master GTU Computer Science{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                        Without The Chaos
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Syllabi, solved papers, standard textbooks, handwritten notes, and playlist links for every subject — 
                    semester-wise, well-organized, and 100% free.
                </p>

                {/* Instant Inline Search & Jump */}
                <div className="mt-8 max-w-xl mx-auto relative text-left">
                    <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-xl shadow-black/40 focus-within:border-cyan-500/60 transition-all p-1.5">
                        <HiMagnifyingGlass className="w-5 h-5 text-cyan-400 ml-3 shrink-0" />
                        <input
                            type="text"
                            placeholder="Jump directly to a subject (e.g. Data Structures, OS, DBMS)..."
                            value={inlineQuery}
                            onChange={(e) => setInlineQuery(e.target.value)}
                            className="w-full px-3 py-2 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                        />
                        {inlineQuery && (
                            <button
                                onClick={() => setInlineQuery("")}
                                className="px-2 text-xs text-slate-400 hover:text-white"
                            >
                                Clear
                            </button>
                        )}
                        <button
                            onClick={onOpenSearch}
                            className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 rounded-xl transition-colors shrink-0 border border-slate-700"
                        >
                            <span>Browse All</span>
                        </button>
                    </div>

                    {/* Quick search popup results */}
                    {inlineQuery.trim() && (
                        <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900/95 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-30 p-2 space-y-1">
                            {quickSearchResults.length > 0 ? (
                                quickSearchResults.map((subj) => (
                                    <Link
                                        key={`${subj.semId}-${subj.id}`}
                                        to={`/sem/${subj.semId}/subject/${subj.id}`}
                                        onClick={() => setInlineQuery("")}
                                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800 text-sm text-slate-200 transition-colors"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                                                {subj.id}
                                            </span>
                                            <span className="font-medium">{subj.name}</span>
                                        </div>
                                        <span className="text-xs text-slate-400">{subj.semName} →</span>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-4 text-center text-sm text-slate-400">
                                    No direct match for &quot;{inlineQuery}&quot;. Press &quot;Browse All&quot; to search.
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Hero CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#semesters"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    >
                        <span>Explore Semesters</span>
                        <HiArrowDown className="w-4 h-4 animate-bounce" />
                    </a>

                    <Link
                        to="/about"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-800/80"
                    >
                        <span>Learn About The Platform</span>
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Quick Stats Grid */}
                <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((s, idx) => (
                        <div
                            key={idx}
                            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center"
                        >
                            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                                {s.value}
                            </div>
                            <div className="text-sm font-semibold text-slate-200 mt-1">{s.label}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{s.detail}</div>
                        </div>
                    ))}
                </div>

            </section>

            {/* CURATED STUDY RESOURCES SHOWCASE */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                        Comprehensive Toolset
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                        Everything You Need To Crack GTU
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base mt-2">
                        Verified materials organized so you spend less time searching and more time understanding concepts.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resourceHighlights.map((res, i) => (
                        <div
                            key={i}
                            className="relative group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${res.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                            
                            <div className="relative z-10 flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                                    {res.icon}
                                </div>
                                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                                    {res.badge}
                                </span>
                            </div>

                            <h3 className="relative z-10 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                                {res.title}
                            </h3>
                            <p className="relative z-10 text-sm text-slate-400 leading-relaxed">
                                {res.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEMESTERS SELECTION SECTION */}
            <section
                id="semesters"
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80 scroll-mt-20"
            >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                            <HiAcademicCap className="w-4 h-4" />
                            Curriculum Navigation
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                            Select Your Semester
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base mt-1">
                            Choose your semester to explore subjects, syllabi, papers, and resource drives.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>All 6 Active Semesters Available</span>
                    </div>
                </div>

                <SemesterList />
            </section>

            {/* COMMUNITY / WHY THIS PLATFORM BANNER */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-8">
                <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 p-8 sm:p-12 overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
                            <HiShieldCheck className="w-4 h-4 text-indigo-400" />
                            <span>100% Free • Open & Community Focused</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                            Built by Students, for GTU Engineering Students
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                            No spammy redirects, no ad popups, no premium paywalls. Just clean access to the exact resources you need to clear your GTU mid-sems and end-sems with top grades.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                            >
                                <HiLightBulb className="w-4 h-4" />
                                <span>Request New Study Material</span>
                            </Link>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-700 transition-colors"
                            >
                                <span>Read Our Story</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
