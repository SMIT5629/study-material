import { FaInstagram, FaLinkedinIn, FaTelegramPlane, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiAcademicCap, HiHeart } from "react-icons/hi2";

export default function Footer() {
    const quickLinks = [
        { name: "Home Hub", to: "/" },
        { name: "About the Platform", to: "/about" },
        { name: "Contact & Material Request", to: "/contact" },
        { name: "Sem 8 Internship Guide", to: "/sem/8" },
    ];

    const semesterLinks = [
        { name: "Semester 1 & 2 (Foundation)", to: "/sem/1" },
        { name: "Semester 3 (Core CS)", to: "/sem/3" },
        { name: "Semester 4 (Intermediate)", to: "/sem/4" },
        { name: "Semester 5 (Advanced)", to: "/sem/5" },
        { name: "Semester 7 (Specialization)", to: "/sem/7" },
        { name: "Semester 8 (Project & Viva)", to: "/sem/8" },
    ];

    const socialLinks = [
        {
            name: "Telegram Channel",
            icon: <FaTelegramPlane className="w-4 h-4" />,
            href: "https://t.me/GTUStudyMate",
            color: "hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10",
        },
        {
            name: "GitHub Repository",
            icon: <FaGithub className="w-4 h-4" />,
            href: "https://github.com/gtustudymate",
            color: "hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10",
        },
        {
            name: "Email Support",
            icon: <FaEnvelope className="w-4 h-4" />,
            href: "mailto:gtustudymate@gmail.com",
            color: "hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10",
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="w-4 h-4" />,
            href: "https://instagram.com/gtu_study_mate",
            color: "hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn className="w-4 h-4" />,
            href: "https://linkedin.com",
            color: "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10",
        },
    ];

    return (
        <footer className="w-full bg-[#080c14] border-t border-slate-800/80 text-slate-300 transition-colors">
            {/* Top Footer Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    
                    {/* Brand Column (5 cols on lg) */}
                    <div className="lg:col-span-5 space-y-4">
                        <Link to="/" className="flex items-center space-x-3 group w-fit">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all">
                                <HiAcademicCap className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                                    PadhLe<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Beta</span>
                                </span>
                                <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase -mt-0.5">
                                    GTU Computer & IT Engineering
                                </span>
                            </div>
                        </Link>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            The centralized, ad-free study ecosystem for GTU Computer Engineering, CS, CSE & IT students. 
                            Curated syllabus, previous papers, verified paper solutions, textbook PDFs, and video lectures.
                        </p>

                        <div className="pt-2 flex items-center space-x-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className={`w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-200 ${item.color}`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column (3 cols on lg) */}
                    <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.to}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors inline-block py-0.5"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Semester Jump Column (4 cols on lg) */}
                    <div className="lg:col-span-4 space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Explore Semesters
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            {semesterLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all text-xs"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800/80 bg-[#06090f]/90 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
                    <p className="flex items-center gap-1">
                        &copy; {new Date().getFullYear()} PadhLeBeta. Made with{" "}
                        <HiHeart className="w-3.5 h-3.5 text-rose-500 inline" /> for GTU Engineers.
                    </p>
                    <p className="text-slate-500">
                        Educational open resources curated with contribution from Ayan Menon Resources.
                    </p>
                </div>
            </div>
        </footer>
    );
}
