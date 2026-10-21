import data from "../data/semesters.json";
import { Link } from "react-router-dom";
import { HiArrowRight, HiBookOpen, HiAcademicCap, HiSparkles } from "react-icons/hi2";

export default function SemesterList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.semesters.map((sem) => {
                const isProjectSem = sem.id === 8;
                const subjectCount = sem.subjects ? sem.subjects.length : 0;
                const sampleSubjects = (sem.subjects || [])
                    .slice(0, 3)
                    .map((s) => s.name);

                return (
                    <Link
                        key={sem.id}
                        to={`/sem/${sem.id}`}
                        className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 shadow-lg shadow-black/30 hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Background subtle gradient bloom on hover */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

                        <div>
                            {/* Card Header: Tag & Subject Count Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    <HiAcademicCap className="w-3.5 h-3.5" />
                                    {isProjectSem ? "CAPSTONE" : `SEM 0${sem.id}`.slice(-6)}
                                </span>

                                <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
                                    {isProjectSem ? "Internship / Project" : `${subjectCount} Subjects`}
                                </span>
                            </div>

                            {/* Semester Title */}
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                                {sem.name}
                            </h3>

                            {/* Subjects Preview pills */}
                            {isProjectSem ? (
                                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                    Industry internship, viva preparation, project documentation & report submission guide.
                                </p>
                            ) : (
                                <div className="space-y-2 mb-6">
                                    <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                        <HiSparkles className="w-3 h-3 text-cyan-400" />
                                        Core Subjects Preview:
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {sampleSubjects.map((subName) => (
                                            <span
                                                key={subName}
                                                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50 truncate max-w-[200px]"
                                            >
                                                {subName}
                                            </span>
                                        ))}
                                        {subjectCount > 3 && (
                                            <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-400">
                                                +{subjectCount - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Card Bottom CTA */}
                        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">
                            <span className="flex items-center gap-1.5">
                                <HiBookOpen className="w-4 h-4" />
                                {isProjectSem ? "View Project Guide" : "Explore Subjects"}
                            </span>
                            <HiArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
