import { useState } from "react";

export default function Exercise3() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Exercise 3: Toggle Visibility
        </h1>
        <p className="text-slate-400">
          Conditional rendering with smooth transitions.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg text-white transition-all duration-500 ease-in-out flex flex-col items-center justify-center shadow-xl shadow-black/10">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`
            flex items-center gap-3 px-6 py-3 rounded-lg text-base font-semibold transition-colors mb-6
            ${isVisible ? "bg-red-600 hover:bg-red-700" : "bg-cyan-600 hover:bg-cyan-700"}
          `}
        >
          <span className="text-xl font-emoji">
            {isVisible ? "🙈" : "👁️"}
          </span>
          {isVisible ? "Hide Secret" : "Reveal Secret"}
        </button>

        <div
          className={`
            grid transition-all duration-500 ease-in-out
            ${isVisible ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden">
            <div className="pt-6 animate-fade-in-zoom">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                <span className="font-emoji">✨</span> React is awesome!{" "}
                <span className="font-emoji">✨</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
