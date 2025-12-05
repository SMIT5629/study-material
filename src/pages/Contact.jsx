import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been submitted! Thank you for contacting us.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-slate-200 flex pt-24 flex-col items-center px-4 py-10">

            <section className="w-full max-w-5xl bg-white shadow-md rounded-xl p-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    Contact Us
                </h1>

                <p className="text-gray-700 text-lg mb-10 text-center">
                    Have questions, feedback, or want to request study material?
                    Send us your message or connect through any platform.
                </p>

                <div className="bg-indigo-50 p-8 rounded-xl shadow mb-14">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Submit Your Details
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">Your Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-800 transition-colors"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="bg-indigo-50 p-6 rounded-xl shadow text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">📩 Email</h3>
                        <p className="text-gray-700">gtustudymate@gmail.com</p>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-xl shadow text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">📸 Instagram</h3>
                        <p className="text-gray-700">@gtu_study_mate</p>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-xl shadow text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">📢 Telegram</h3>
                        <p className="text-gray-700">@GTUStudyMate</p>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-xl shadow text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">💻 GitHub</h3>
                        <p className="text-gray-700">github.com/gtustudymate</p>
                    </div>

                </div>

                <p className="text-gray-700 text-lg mt-10 text-center">
                    We respond within 24 hours.  
                    🚀 Your study success is our priority!
                </p>

            </section>

        </div>
    );
}
