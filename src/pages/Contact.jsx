import { useState } from "react";
import {
    HiEnvelope,
    HiChatBubbleLeftRight,
    HiCheckCircle,
    HiPaperAirplane,
    HiClipboardDocument,
    HiCheck,
    HiQuestionMarkCircle
} from "react-icons/hi2";
import { FaTelegramPlane, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "general",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Form submitted simulation
        setForm({ name: "", email: "", subject: "general", message: "" });
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("gtustudymate@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const channels = [
        {
            name: "Direct Email",
            handle: "gtustudymate@gmail.com",
            desc: "For inquiries, study notes submissions, or DMCA",
            icon: <HiEnvelope className="w-5 h-5 text-emerald-400" />,
            action: (
                <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                >
                    {copiedEmail ? (
                        <>
                            <HiCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <HiClipboardDocument className="w-3.5 h-3.5" />
                            <span>Copy Email</span>
                        </>
                    )}
                </button>
            ),
        },
        {
            name: "Telegram Channel",
            handle: "@GTUStudyMate",
            desc: "Instant announcements, exam updates, and direct PDF drops",
            icon: <FaTelegramPlane className="w-5 h-5 text-sky-400" />,
            action: (
                <a
                    href="https://t.me/GTUStudyMate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-500/10 hover:bg-sky-500 text-sky-300 hover:text-slate-950 border border-sky-500/30 transition-colors"
                >
                    <span>Join Channel →</span>
                </a>
            ),
        },
        {
            name: "Instagram Community",
            handle: "@gtu_study_mate",
            desc: "Study tips, exam dates, IMP announcements, and reels",
            icon: <FaInstagram className="w-5 h-5 text-pink-400" />,
            action: (
                <a
                    href="https://instagram.com/gtu_study_mate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-pink-500/10 hover:bg-pink-500 text-pink-300 hover:text-white border border-pink-500/30 transition-colors"
                >
                    <span>Follow →</span>
                </a>
            ),
        },
        {
            name: "GitHub Repository",
            handle: "github.com/gtustudymate",
            desc: "Open source contributions, code bug fixes, and suggestions",
            icon: <FaGithub className="w-5 h-5 text-purple-400" />,
            action: (
                <a
                    href="https://github.com/gtustudymate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-500/10 hover:bg-purple-500 text-purple-300 hover:text-white border border-purple-500/30 transition-colors"
                >
                    <span>View GitHub →</span>
                </a>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-slate-100 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                        Get In Touch
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
                        Contact & Material Requests
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        Need study notes for a specific GTU subject? Found a broken link or want to contribute your handwritten notes? Send us a quick note.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left: Contact Form (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl relative overflow-hidden">
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <HiChatBubbleLeftRight className="w-6 h-6 text-cyan-400" />
                                <span>Send Us a Message</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-400 mb-6">
                                We usually review requests and update links within 24 hours.
                            </p>

                            {submitted && (
                                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-sm flex items-start gap-3 animate-in fade-in">
                                    <HiCheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-300">Message Received!</div>
                                        <p className="mt-1 text-xs text-emerald-300/80">
                                            Thank you for helping improve PadhLeBeta. We will review your note shortly.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                                        Your Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="e.g., Smit Patel"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="e.g., student@gtu.edu"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                                        Request Category
                                    </label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 text-sm text-slate-100 focus:outline-none transition-colors"
                                    >
                                        <option value="request">Request Missing Subject Materials</option>
                                        <option value="broken">Report Broken / Inaccessible Link</option>
                                        <option value="contribute">Submit Notes / Solutions</option>
                                        <option value="feedback">General Feedback & Suggestion</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                                        Message & Details
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Mention subject name, semester, and what notes or papers you are looking for..."
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-500 text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                                >
                                    <HiPaperAirplane className="w-4 h-4" />
                                    <span>Submit Message</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Direct Channels (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800">
                            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                                <HiQuestionMarkCircle className="w-5 h-5 text-cyan-400" />
                                <span>Official Connect Channels</span>
                            </h3>

                            <div className="space-y-3">
                                {channels.map((ch, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                                    >
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/60 shrink-0">
                                                    {ch.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">{ch.name}</div>
                                                    <div className="text-xs font-mono text-cyan-400">{ch.handle}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-xs text-slate-400 mb-3">{ch.desc}</p>
                                        <div className="self-end">{ch.action}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Tip Box */}
                        <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-slate-400 leading-relaxed">
                            <span className="font-semibold text-cyan-300">💡 Exam Emergency Tip: </span>
                            For urgently required question papers during GTU examination weeks, reach out via Telegram for prompt assistance from our community.
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
