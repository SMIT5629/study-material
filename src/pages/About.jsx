export default function About() {
    return (
        <div className="min-h-screen bg-slate-200 flex pt-24 flex-col items-center px-4 py-10">

            <section className="w-full max-w-5xl bg-white shadow-md rounded-xl p-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                    About GTU Study Mate
                </h1>

                <p className="text-gray-700 text-lg mb-4">
                    <strong>GTU Study Mate</strong> is a free platform created for GTU Computer, CS, CSE, and IT students to
                    access all study materials in one place.
                </p>

                <p className="text-gray-700 text-lg mb-4">
                    We provide well-organized semester-wise content including notes, books, question papers,
                    lab manuals, handwritten notes, and playlists.
                </p>

                <p className="text-gray-700 text-lg mb-4">
                    Our goal is simple — help students save time and study smarter with verified and quality resources.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What You Will Find Here</h2>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>GTU Notes, Books & Handwritten Notes</li>
                    <li>GTU Question Papers & Paper Solutions</li>
                    <li>IMP & MIMP Q&A for fast revision</li>
                    <li>Practical Lab Files & Manuals</li>
                    <li>Subject-wise Playlists for quick learning</li>
                </ul>

                <p className="text-gray-700 text-lg mt-8">
                    Whether you are preparing for GTU mid-semesters, practicals, or final exams,
                    GTU Study Mate is here to guide you with the best study resources.
                </p>
            </section>

        </div>
    );
}
