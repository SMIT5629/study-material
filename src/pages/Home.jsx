import SemesterList from "../components/SemesterList";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-200 flex pt-20 flex-col items-center px-4 py-8">

            <header className="w-full max-w-6xl bg-teal-50 rounded-xl shadow-lg p-8 mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Ultimate Study Platform for GTU Computer, CS, CSE, and IT Students
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    Study materials, notes, papers, lab files & playlists for every subject — semester-wise, well-organized, and 100% free.
                </p>
                <a href="#semesters" className="inline-block bg-gray-100 text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-300">
                    Explore Semesters here ➡️
                </a>
            </header>

            <section className="w-full max-w-6xl bg-slate-50 shadow-md rounded-xl p-8 mb-20" id="about">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About GTU Study Mates</h2>
                <p className="text-gray-700 mb-2">
                    <strong>GTU Study Mates</strong> is your one-stop platform for all study materials related to GTU Computer Engineering, CS, CSE, and IT subjects.
                </p>
                <p className="text-gray-700 mb-2">
                    Whether you need quick paper solutions, detailed notes, or subject-wise playlists, everything is organized in one place to save your time and help you prepare better.
                </p>
                <p className="text-gray-700 mb-4">On this website, you will find:</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {["🎥 Playlist", "📄 GTU Papers", "🖊️ Paper Solutions", "✅ IMP", "❓ IMP QNA", "⭐ MIMP QNA", "📚 GTU Books", "🔬 Lab Manual", "✍️ Handwritten Notes", "📦 Enough Study Material"].map((item, index) => (
                        <div key={index} className="bg-indigo-50 text-center p-2 rounded-lg shadow-sm font-medium">
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full max-w-6xl bg-slate-50 shadow-md rounded-xl p-8 mb-10 scroll-mt-24" id="semesters">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Select Your Semester</h2>
                <h3 className="pl-7 pb-2">All semester Available</h3>
                <SemesterList />
            </section>


        </div>
    );
}
