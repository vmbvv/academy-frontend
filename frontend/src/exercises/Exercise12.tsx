import { useState, createContext, useContext, type ReactNode } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`
        p-12 rounded-2xl max-w-lg text-center transition-all duration-300 shadow-xl shadow-black/10
        ${theme === "dark" ? "bg-slate-800" : "bg-slate-100 border border-slate-200"}
      `}
    >
      <h2
        className={`
          mb-4 text-2xl font-bold
          ${theme === "dark" ? "text-white" : "text-slate-900"}
        `}
      >
        Current Theme:{" "}
        <span
          className={`font-extrabold ${theme === "dark" ? "text-cyan-400" : "text-sky-500"}`}
        >
          {theme}
        </span>
      </h2>

      <p
        className={`mb-8 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
      >
        This component consumes the theme from context.
      </p>

      <button
        onClick={toggleTheme}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base cursor-pointer mx-auto transition-transform active:scale-95 border-0
          ${theme === "dark" ? "bg-amber-500 text-slate-900 hover:bg-amber-400" : "bg-slate-700 text-white hover:bg-slate-600"}
        `}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        Switch to {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default function Exercise12() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 12: Context API</h1>
        <p className="text-slate-400">
          Sharing state globally without prop drilling.
        </p>
      </div>

      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </div>
  );
}
