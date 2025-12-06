import { useParams } from "react-router-dom";
import data from "../data/semesters.json";
import ResourceCard from "../components/ResourceCard";

export default function SubjectPage() {
    const { semId, subjectId } = useParams();

    const semester = data.semesters.find((s) => s.id == semId);
    const subject = semester.subjects.find((sub) => sub.id === subjectId);

    const materialTypes = data.materialTypes;

    return (
        <div className="max-w-6xl pt-26 mx-auto px-4 py-8">

            <div className="mb-6 text-gray-600 text-sm">
                <a href="/semesters" className="hover:text-blue-600">Semesters</a> /
                <span className="font-semibold"> {semester.name} </span>/
                <span className="font-semibold">{subject.name}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{subject.name} Resources</h1>

            {subject.description && (
                <p className="mb-6 text-gray-700 text-lg">{subject.description}</p>
            )}

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Resources</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.entries(subject.materials).map(([key, value]) => (
                    <ResourceCard key={key} title={materialTypes[key]} url={value} />
                ))}
            </div>
            <p className="bg-white text-lg mt-10  p-4 text-gray-500 italic my-4 text-justify">
                {subject.about}
            </p>


        </div>

    );
}
