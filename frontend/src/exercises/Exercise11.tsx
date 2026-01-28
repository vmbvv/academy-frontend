import { useState, useRef, useEffect } from "react";
import { Target, MousePointer2 } from "lucide-react";

export default function Exercise11() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 11: useRef Demo</h1>
        <p className="text-slate-400">
          Accessing DOM nodes and persisting values without re-renders.
        </p>
      </div>

      <div className="bg-slate-800 p-10 rounded-2xl max-w-lg text-white shadow-xl shadow-black/10">
        <div className="mb-8">
          <input
            ref={inputRef}
            type="text"
            placeholder="Click Focus to focus me"
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white outline-none mb-4 transition-shadow focus:ring-2 focus:ring-cyan-500"
          />

          <div className="flex gap-4">
            <button
              onClick={handleFocus}
              className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-lg px-6 py-3 font-semibold cursor-pointer flex items-center gap-2 transition-colors"
            >
              <Target size={18} /> Focus
            </button>

            <button
              onClick={() => setCount((c) => c + 1)}
              className="bg-slate-600 hover:bg-slate-700 text-white border-0 rounded-lg px-6 py-3 font-semibold cursor-pointer flex items-center gap-2 transition-colors"
            >
              <MousePointer2 size={18} /> Click Me
            </button>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 grid grid-cols-2 gap-4">
          <div>
            <div className="text-slate-400 text-sm mb-1">Button Clicks</div>
            <div className="text-2xl font-bold text-amber-500">{count}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm mb-1">Render Count</div>
            <div className="text-2xl font-bold text-violet-500">
              {renderCount.current}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
