import { useParams, Link } from "react-router-dom";
import data from "../data/semesters.json";

export default function SubjectList() {
    const { semId } = useParams();
    const semester = data.semesters.find((s) => s.id == semId);

    if (semester.id == 8) {
        return (
            <div className="max-w-4xl mx-auto my-16 mt-30 p-10 bg-gray-100 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                    Semester 8 - Internship / Project
                </h2>
                <p className="text-gray-700 text-lg text-center mb-8">
                    Semester 8 of GTU Computer Engineering is fully dedicated to the <strong>Internship or Final Year Project</strong>.
                </p>
                <ul className="list-disc text-lg list-inside space-y-7 text-gray-800">
                    <li className="hover:text-blue-600 transition-all duration-300">
                        Completing a meaningful <strong>industry internship</strong> or developing a <strong>final year project</strong>
                    </li>
                    <li className="hover:text-blue-600 transition-all duration-300">
                        Preparing <strong>project reports</strong> and attending the <strong>viva</strong>
                    </li>
                    <li className="hover:text-blue-600 transition-all duration-300">
                        Applying technical & soft skills from previous semesters
                    </li>
                </ul>
            </div>

        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 pt-26 py-8 scroll-mt-26">
            <p className="text-center text-gray-500 mb-1">
                Thanks for visiting my website! 😊
            </p>
            <p className="text-center text-gray-500 mb-4">
                Explore your semester subjects below.
            </p>

            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {semester.name} Subjects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {semester.subjects.map((sub) => (
                    <Link
                        key={sub.id}
                        to={`/sem/${semId}/subject/${sub.id}`}
                        className="bg-slate-200 shadow-md hover:shadow-xl rounded-lg p-6 text-center font-semibold text-gray-800 text-lg transition-transform transform hover:-translate-y-1 hover:bg-indigo-50"
                    >
                        {sub.name}
                    </Link>
                ))}
            </div>
        </div>

    );
}
