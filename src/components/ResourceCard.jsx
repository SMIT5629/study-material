import { useState } from "react";
import {
    HiDocumentText,
    HiVideoCamera,
    HiBookOpen,
    HiAcademicCap,
    HiSparkles,
    HiCommandLine,
    HiPresentationChartBar,
    HiFolderOpen,
    HiArrowTopRightOnSquare,
    HiClipboardDocument,
    HiCheck
} from "react-icons/hi2";

export default function ResourceCard({ typeKey, title, url }) {
    const [copied, setCopied] = useState(false);

    if (!url || typeof url !== "string" || !url.startsWith("http")) {
        return null;
    }

    const handleCopy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Determine visual style according to resource type
    const getTheme = () => {
        const key = (typeKey || "").toLowerCase();
        if (key.includes("playlist") || key.includes("video")) {
            return {
                icon: <HiVideoCamera className="w-5 h-5 text-rose-400" />,
                badge: "Video Course",
                badgeClass: "bg-rose-500/10 text-rose-400 border-rose-500/20",
                accentGlow: "hover:border-rose-500/40 hover:shadow-rose-500/10",
                btnClass: "bg-rose-500/10 hover:bg-rose-500 text-rose-300 hover:text-white border-rose-500/30",
            };
        }
        if (key.includes("paper") || key.includes("solution")) {
            return {
                icon: <HiDocumentText className="w-5 h-5 text-cyan-400" />,
                badge: "Question Papers",
                badgeClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                accentGlow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
                btnClass: "bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border-cyan-500/30",
            };
        }
        if (key.includes("book")) {
            return {
                icon: <HiBookOpen className="w-5 h-5 text-indigo-400" />,
                badge: "Textbook PDF",
                badgeClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                accentGlow: "hover:border-indigo-500/40 hover:shadow-indigo-500/10",
                btnClass: "bg-indigo-500/10 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-500/30",
            };
        }
        if (key.includes("imp") || key.includes("qna")) {
            return {
                icon: <HiSparkles className="w-5 h-5 text-amber-400" />,
                badge: "IMP Questions",
                badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                accentGlow: "hover:border-amber-500/40 hover:shadow-amber-500/10",
                btnClass: "bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border-amber-500/30",
            };
        }
        if (key.includes("lab") || key.includes("practical")) {
            return {
                icon: <HiCommandLine className="w-5 h-5 text-emerald-400" />,
                badge: "Lab Files",
                badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                accentGlow: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
                btnClass: "bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border-emerald-500/30",
            };
        }
        if (key.includes("ppt") || key.includes("sheet")) {
            return {
                icon: <HiPresentationChartBar className="w-5 h-5 text-orange-400" />,
                badge: "Slides & PPT",
                badgeClass: "bg-orange-500/10 text-orange-400 border-orange-500/20",
                accentGlow: "hover:border-orange-500/40 hover:shadow-orange-500/10",
                btnClass: "bg-orange-500/10 hover:bg-orange-500 text-orange-300 hover:text-slate-950 border-orange-500/30",
            };
        }
        if (key.includes("syllabus")) {
            return {
                icon: <HiAcademicCap className="w-5 h-5 text-sky-400" />,
                badge: "GTU Syllabus",
                badgeClass: "bg-sky-500/10 text-sky-400 border-sky-500/20",
                accentGlow: "hover:border-sky-500/40 hover:shadow-sky-500/10",
                btnClass: "bg-sky-500/10 hover:bg-sky-500 text-sky-300 hover:text-slate-950 border-sky-500/30",
            };
        }

        return {
            icon: <HiFolderOpen className="w-5 h-5 text-cyan-400" />,
            badge: "Study Drive",
            badgeClass: "bg-slate-800 text-slate-300 border-slate-700",
            accentGlow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
            btnClass: "bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border-cyan-500/30",
        };
    };

    const theme = getTheme();

    return (
        <div
            className={`group flex flex-col justify-between p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-1 ${theme.accentGlow}`}
        >
            <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                        {theme.icon}
                    </div>

                    <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${theme.badgeClass}`}>
                        {theme.badge}
                    </span>
                </div>

                {/* Resource Title */}
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {title || typeKey}
                </h4>

                <p className="text-xs text-slate-400 mb-5">
                    Official verified Google Drive link for instant viewing and offline download.
                </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-150 ${theme.btnClass}`}
                >
                    <span>Open Drive</span>
                    <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
                </a>

                <button
                    onClick={handleCopy}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors relative"
                    title="Copy direct link"
                    aria-label="Copy direct link"
                >
                    {copied ? (
                        <HiCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                        <HiClipboardDocument className="w-4 h-4" />
                    )}
                </button>
            </div>
        </div>
    );
}
