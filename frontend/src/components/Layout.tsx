import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X, CheckCircle, Circle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { exercises } from "../exercises/registry";
import {
  loadExerciseProgress,
  PROGRESS_EVENT,
  saveExerciseProgress,
  type ExerciseProgress,
} from "../exercises/progress";

export default function Layout() {
  const location = useLocation();
  const sidebarRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [completed, setCompleted] = useState<ExerciseProgress>(() =>
    loadExerciseProgress(),
  );

  useEffect(() => {
    setMobileMenuOpen(false);

    const segments = location.pathname.split("/").filter(Boolean);
    const activeExercise = exercises.find((ex) => segments.includes(ex.path));

    if (activeExercise) {
      setCompleted((prev) => {
        if (prev[activeExercise.id]) return prev;
        const next = { ...prev, [activeExercise.id]: true };
        saveExerciseProgress(next);
        return next;
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncProgress = () => {
      setCompleted(loadExerciseProgress());
    };
    window.addEventListener(PROGRESS_EVENT, syncProgress);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, syncProgress);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const focusable = sidebar.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"]), input, select, textarea',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [mobileMenuOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-900 text-white">
      <aside
        id="sidebar"
        ref={sidebarRef}
        className={`
          fixed inset-y-0 left-0 z-50 w-72 transform bg-slate-950 border-r border-slate-800 transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <NavLink to="/" className="flex items-center gap-2 text-cyan-400">
            <h1 className="text-2xl font-bold tracking-tight">
              Academy<span className="text-white">React</span>
            </h1>
          </NavLink>
          <button
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav
          className="h-[calc(100vh-5rem)] overflow-y-auto p-4 space-y-1"
          aria-label="Exercises navigation"
        >
          <div className="px-4 pt-6 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            EXERCISES
          </div>

          <div className="space-y-1">
            {exercises.map((ex) => {
              const isCompleted = Boolean(completed[ex.id]);

              return (
                <NavLink
                  key={ex.id}
                  to={ex.path}
                  className={({ isActive }) =>
                    `
                      flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all group
                      ${
                        isActive
                          ? "bg-slate-800 text-white"
                          : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                      }
                    `
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        {isCompleted ? (
                          <CheckCircle
                            size={16}
                            className={
                              isActive ? "text-cyan-400" : "text-emerald-500"
                            }
                          />
                        ) : (
                          <Circle size={16} className="text-slate-600" />
                        )}
                        <span className={isActive ? "font-medium" : ""}>
                          {ex.id}. {ex.title}
                        </span>
                      </div>
                      {isActive && (
                        <ChevronRight size={16} className="text-cyan-400" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-slate-900">
        <header className="lg:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="sidebar"
          >
            <Menu size={24} />
          </button>
          <NavLink to="/" className="font-semibold">
            Academy React
          </NavLink>
          <div className="w-6" />
        </header>

        <div className="flex-1 overflow-y-auto content-scroll p-4 lg:p-8">
          <div
            key={location.pathname}
            className="max-w-4xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <Outlet />
          </div>
        </div>
      </main>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
