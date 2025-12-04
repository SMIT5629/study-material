import { useParams, Link } from "react-router-dom";
import data from "../data/semesters.json";

export default function SubjectList() {
    const { semId } = useParams();
    const semester = data.semesters.find((s) => s.id == semId);

    return (
        <div className="subject-list">
            <h1>{semester.name}</h1>

            <div className="grid">
                {semester.subjects.map((sub) => (
                    <Link
                        key={sub.id}
                        to={`/sem/${semId}/subject/${sub.id}`}
                        className="subject-card"
                    >
                        {sub.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
