import { Link } from "react-router-dom";
import {
    HiAcademicCap,
    HiSparkles,
    HiCheckCircle,
    HiBolt,
    HiShieldCheck,
    HiFolderOpen,
    HiArrowRight,
    HiCodeBracket,
    HiHeart
} from "react-icons/hi2";

export default function About() {
    const pillars = [
        {
            title: "Zero Ads, Zero Bullshit",
            desc: "Direct high-speed Google Drive folders. No link shorteners, no shady popups, and no countdown timers.",
            icon: <HiBolt className="w-6 h-6 text-amber-400" />,
            badge: "Direct Access",
        },
        {
            title: "Syllabus Aligned",
            desc: "Every subject is matched directly with Gujarat Technological University (GTU) Computer, CS, and IT curricula.",
            icon: <HiShieldCheck className="w-6 h-6 text-emerald-400" />,
            badge: "GTU Verified",
        },
        {
            title: "Comprehensive Study Kits",
            desc: "Past 5-year papers, handwritten notes, standard textbooks, lab manuals, and curated YouTube playlists.",
            icon: <HiFolderOpen className="w-6 h-6 text-cyan-400" />,
            badge: "All-in-One",
        },
        {
            title: "Night-Shift Friendly",
            desc: "Custom-tuned dark theme engineered to prevent eye strain during marathon late-night exam prep.",
            icon: <HiSparkles className="w-6 h-6 text-indigo-400" />,
            badge: "Dark Mode",
        },
    ];

    const offerings = [
        "GTU Question Papers (Winter & Summer sessions with solutions)",
        "Subject-wise YouTube Playlists mapped to GTU syllabus units",
        "Prescribed reference books and official university textbooks in PDF",
        "High-priority IMP and MIMP questions for quick mid-sem & end-sem revision",
        "Practical lab manuals, code files, and viva questions",
        "Clear guidelines and milestones for Semester 8 capstone project / internship",
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-12 sm:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Card */}
                <div className="relative rounded-3xl bg-slate-900/70 border border-slate-800 p-8 sm:p-14 mb-12 overflow-hidden shadow-2xl text-center">
                    <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
                            <HiAcademicCap className="w-4 h-4 text-cyan-400" />
                            <span>The PadhLeBeta Mission</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                            Empowering GTU Engineers to Learn Smarter, Not Harder
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                            PadhLeBeta was born out of a real problem faced by every GTU engineering student: spending hours scouring WhatsApp groups, random Telegram channels, and ad-filled websites just to find a readable question paper solution or textbook PDF.
                        </p>
                    </div>
                </div>

                {/* Core Pillars Grid */}
                <div className="mb-16">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Engineered For Maximum Study Efficiency
                        </h2>
                        <p className="text-slate-400 text-sm mt-2">
                            Built by developers who understand the frantic rush before mid-terms and university finals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {pillars.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/80">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                                        {item.badge}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What You Will Find Here */}
                <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 mb-16 shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                            <HiCodeBracket className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-white">What You Will Find Here</h2>
                            <p className="text-xs text-slate-400">Curated materials updated for current GTU curriculum</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {offerings.map((offering, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                                <HiCheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-300 leading-normal">{offering}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
                        <span className="flex items-center gap-1.5">
                            <HiHeart className="w-4 h-4 text-rose-400" />
                            Community resources contributed with credit to Ayan Menon Resources.
                        </span>
                        <span className="text-cyan-400 font-medium">Free and accessible to all students</span>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-white">Ready to start studying?</h3>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/#semesters"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                        >
                            <span>Browse All Semesters</span>
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-700 transition-colors"
                        >
                            <span>Contact Or Submit Notes</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
