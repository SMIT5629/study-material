import data from "../data/semesters.json";
import { Link } from "react-router-dom";

export default function SemesterList() {
    return (
        <div className="semester-list">
            <h1>All Semesters</h1>
            <div className="grid">
                {data.semesters.map((sem) => (
                    <Link key={sem.id} to={`/sem/${sem.id}`} className="sem-card">
                        {sem.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
