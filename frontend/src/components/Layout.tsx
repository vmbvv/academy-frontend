import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X, CheckCircle, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { exercises } from "../exercises/registry";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-900 text-white">
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 transform bg-slate-950 border-r border-slate-800 transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400">
            <h1 className="text-2xl font-bold tracking-tight">
              Academy<span className="text-white">React</span>
            </h1>
          </div>
          <button
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="h-[calc(100vh-5rem)] overflow-y-auto p-4 space-y-1">
          <div className="px-4 pt-6 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            EXERCISES
          </div>

          <div className="space-y-1">
            {exercises.map((ex) => {
              const isCompleted = true;

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
          >
            <Menu size={24} />
          </button>
          <span className="font-semibold">Academy React</span>
          <div className="w-6" />
        </header>

        <div className="flex-1 overflow-y-auto content-scroll p-4 lg:p-8">
          <div className="max-w-4xl mx-auto pb-20">
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
