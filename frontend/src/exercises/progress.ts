export type ExerciseProgress = Record<number, boolean>;

const STORAGE_KEY = "academy.exerciseProgress";
export const PROGRESS_EVENT = "exercise-progress-updated";

export const loadExerciseProgress = (): ExerciseProgress => {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as ExerciseProgress;
  } catch {
    return {};
  }
};

export const saveExerciseProgress = (progress: ExerciseProgress) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    return;
  }
};

export const clearExerciseProgress = () => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
};
