import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/semesters.json";
import ResourceCard from "../components/ResourceCard";
import {
    HiChevronRight,
    HiArrowLeft,
    HiAcademicCap,
    HiInformationCircle,
    HiFolderOpen,
    HiSparkles,
    HiCheckCircle
} from "react-icons/hi2";

export default function SubjectPage() {
    const { semId, subjectId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState("all");

    const semester = data.semesters.find((s) => String(s.id) === String(semId));
    const subject = semester ? semester.subjects?.find((sub) => sub.id === subjectId) : null;
    const materialTypes = data.materialTypes || {};

    if (!semester || !subject) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 mb-4">
                    <HiAcademicCap className="w-12 h-12" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Subject Not Found</h1>
                <p className="text-slate-400 mb-6 max-w-md">
                    We could not locate this subject in the curriculum. It might have been updated or moved.
                </p>
                <Link
                    to={semester ? `/sem/${semId}` : "/"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
                >
                    <HiArrowLeft className="w-4 h-4" />
                    <span>Back to {semester ? semester.name : "Home"}</span>
                </Link>
            </div>
        );
    }

    // Separate valid URL materials and special text notes
    const rawMaterials = subject.materials || {};
    const textNote = rawMaterials.description && !rawMaterials.description.startsWith("http")
        ? rawMaterials.description
        : null;

    const validMaterials = Object.entries(rawMaterials).filter(
        ([key, val]) => key !== "description" && typeof val === "string" && val.startsWith("http")
    );

    // Filter categories
    const categories = [
        { id: "all", label: "All Resources", count: validMaterials.length },
        {
            id: "papers",
            label: "Papers & Solutions",
            matcher: (k) => k.toLowerCase().includes("paper") || k.toLowerCase().includes("solution"),
        },
        {
            id: "books",
            label: "Books & Syllabus",
            matcher: (k) => k.toLowerCase().includes("book") || k.toLowerCase().includes("syllabus"),
        },
        {
            id: "playlists",
            label: "Playlists & Lectures",
            matcher: (k) => k.toLowerCase().includes("playlist") || k.toLowerCase().includes("video"),
        },
        {
            id: "notes",
            label: "IMP & QNA",
            matcher: (k) => k.toLowerCase().includes("imp") || k.toLowerCase().includes("qna"),
        },
        {
            id: "labs",
            label: "Labs & PPTs",
            matcher: (k) => k.toLowerCase().includes("lab") || k.toLowerCase().includes("ppt") || k.toLowerCase().includes("sheet"),
        },
    ];

    // Compute item counts for each category
    const categoriesWithCount = categories.map((cat) => {
        if (cat.id === "all") return cat;
        const count = validMaterials.filter(([k]) => cat.matcher(k)).length;
        return { ...cat, count };
    }).filter((cat) => cat.count > 0);

    const filteredMaterials = selectedCategory === "all"
        ? validMaterials
        : validMaterials.filter(([k]) => {
              const activeCat = categories.find((c) => c.id === selectedCategory);
              return activeCat && activeCat.matcher ? activeCat.matcher(k) : true;
          });

    // Other subjects in the same semester
    const siblingSubjects = (semester.subjects || []).filter((s) => s.id !== subject.id);

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb Navigation */}
                <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-400 mb-6">
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                    <HiChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <Link to="/#semesters" className="hover:text-cyan-400 transition-colors">Semesters</Link>
                    <HiChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <Link to={`/sem/${semId}`} className="hover:text-cyan-400 transition-colors">{semester.name}</Link>
                    <HiChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-none">{subject.name}</span>
                </nav>

                {/* Hero Header Card */}
                <div className="relative rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 mb-8 overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                CODE: {subject.id}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                                {semester.name}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                                <HiCheckCircle className="w-3.5 h-3.5" />
                                {validMaterials.length} Study Kits Available
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                            {subject.name}
                        </h1>

                        {/* Description / About */}
                        {subject.about && (
                            <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
                                {subject.about}
                            </p>
                        )}

                        {/* Special text note alert if present */}
                        {textNote && (
                            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                                <HiInformationCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-amber-300">Course Note: </span>
                                    <span>{textNote}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Filter Tabs for Resources */}
                {categoriesWithCount.length > 2 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
                        {categoriesWithCount.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                                    selectedCategory === cat.id
                                        ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                                        : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
                                }`}
                            >
                                {cat.label} ({cat.count})
                            </button>
                        ))}
                    </div>
                )}

                {/* Section Title */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        <HiFolderOpen className="w-6 h-6 text-cyan-400" />
                        <span>Available Study Materials</span>
                    </h2>
                    <span className="text-xs text-slate-400">
                        Showing {filteredMaterials.length} of {validMaterials.length} items
                    </span>
                </div>

                {/* Materials Grid */}
                {filteredMaterials.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
                        No materials found under this category filter.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                        {filteredMaterials.map(([key, value]) => (
                            <ResourceCard
                                key={key}
                                typeKey={key}
                                title={materialTypes[key] || key}
                                url={value}
                            />
                        ))}
                    </div>
                )}

                {/* Sibling Subjects Navigation */}
                {siblingSubjects.length > 0 && (
                    <div className="border-t border-slate-800/80 pt-10 mt-10">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <HiSparkles className="w-4 h-4 text-cyan-400" />
                                    <span>Other Subjects in {semester.name}</span>
                                </h3>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    Quick switch to another subject in your semester
                                </p>
                            </div>
                            <Link
                                to={`/sem/${semId}`}
                                className="text-xs text-cyan-400 hover:text-cyan-300 font-medium"
                            >
                                View All ({semester.subjects.length}) →
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {siblingSubjects.slice(0, 6).map((sub) => (
                                <Link
                                    key={sub.id}
                                    to={`/sem/${semId}/subject/${sub.id}`}
                                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-500/40 text-center transition-all group"
                                >
                                    <div className="font-mono text-[11px] font-bold text-cyan-400 group-hover:text-cyan-300">
                                        {sub.id}
                                    </div>
                                    <div className="text-xs text-slate-300 font-medium truncate mt-1">
                                        {sub.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back to Semester Link */}
                <div className="mt-12 flex items-center justify-between border-t border-slate-800/80 pt-6">
                    <Link
                        to={`/sem/${semId}`}
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <HiArrowLeft className="w-4 h-4" />
                        <span>Back to {semester.name} Subject List</span>
                    </Link>

                    <Link
                        to="/contact"
                        className="text-xs text-slate-400 hover:text-cyan-400"
                    >
                        Report missing link or request notes →
                    </Link>
                </div>

            </div>
        </div>
    );
}
