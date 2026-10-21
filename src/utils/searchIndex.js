import data from "../data/semesters.json";

export const allSubjects = data.semesters.flatMap((sem) =>
    (sem.subjects || []).map((sub) => ({
        ...sub,
        semId: sem.id,
        semName: sem.name,
        resourceCount: Object.keys(sub.materials || {}).filter(
            (k) => k !== "description" && typeof sub.materials[k] === "string" && sub.materials[k].startsWith("http")
        ).length,
    }))
);

export function getSemester(semId) {
    return data.semesters.find((s) => String(s.id) === String(semId));
}

export function getSubject(semId, subjectId) {
    const sem = getSemester(semId);
    if (!sem || !sem.subjects) return null;
    return sem.subjects.find((sub) => sub.id === subjectId) || null;
}
