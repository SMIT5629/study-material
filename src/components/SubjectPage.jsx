import { useParams } from "react-router-dom";
import data from "../data/semesters.json";
import ResourceCard from "../components/ResourceCard";

export default function SubjectPage() {
    const { semId, subjectId } = useParams();

    const semester = data.semesters.find((s) => s.id == semId);
    const subject = semester.subjects.find((sub) => sub.id === subjectId);

    const materialTypes = data.materialTypes;

    return (
        <div className="subject-page">
            <h1>{subject.name}</h1>

            <div className="grid">
                {Object.entries(subject.materials).map(([key, value]) => (
                    <ResourceCard key={key} title={materialTypes[key]} url={value} />
                ))}
            </div>
        </div>
    );
}
