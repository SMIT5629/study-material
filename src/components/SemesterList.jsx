import data from "../data/semesters.json";
import { Link } from "react-router-dom";

export default function SemesterList() {
    return (
        <div className="max-w-6xl bg-slate-100 rounded-md mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.semesters.map((sem) => (
                    <Link
                        key={sem.id}
                        to={`/sem/${sem.id}`}
                        className="bg-indigo-100 shadow-md hover:shadow-xl rounded-lg p-6 text-center font-semibold text-gray-800 text-lg transition-transform transform hover:-translate-y-1"
                    >
                        {sem.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
