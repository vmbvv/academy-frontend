import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";
import { exercises } from "../exercises/registry";
import {
  clearExerciseProgress,
  loadExerciseProgress,
  PROGRESS_EVENT,
  type ExerciseProgress,
} from "../exercises/progress";

export default function Home() {
  const [completed, setCompleted] = useState<ExerciseProgress>(() =>
    loadExerciseProgress(),
  );
  const firstPath = exercises[0]?.path;
  const completedCount = exercises.filter((ex) => completed[ex.id]).length;
  const progress = exercises.length
    ? Math.round((completedCount / exercises.length) * 100)
    : 0;

  const handleReset = () => {
    clearExerciseProgress();
    const cleared: ExerciseProgress = {};
    setCompleted(cleared);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(PROGRESS_EVENT));
    }
  };

  useEffect(() => {
    setCompleted(loadExerciseProgress());
  }, []);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold mb-3">Academy React Exercises</h1>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        {firstPath && (
          <Link
            to={firstPath}
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Exercises <ArrowRight size={18} />
          </Link>
        )}
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-300">
          Checked {completedCount} / {exercises.length}
        </div>
        <button
          onClick={handleReset}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
          type="button"
        >
          Reset Progress
        </button>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
          <span>Viewed</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
          <div
            className="h-full bg-cyan-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {exercises.map((exercise, index) => {
          const isDone = Boolean(completed[exercise.id]);
          return (
            <Link
              key={exercise.id}
              to={exercise.path}
              className="group bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between hover:border-slate-600 transition-colors animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="flex items-center gap-3">
                {isDone ? (
                  <CheckCircle size={18} className="text-emerald-400" />
                ) : (
                  <Circle size={18} className="text-slate-600" />
                )}
                <div>
                  <div className="font-semibold text-slate-100">
                    {exercise.id}. {exercise.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {exercise.path.toUpperCase()}
                  </div>
                </div>
              </div>
              <ArrowRight
                size={18}
                className="text-slate-600 group-hover:text-slate-300 transition-colors"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
