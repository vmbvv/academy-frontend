import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Exercise2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 2: Counter</h1>
        <p className="text-slate-400">Simple state management.</p>
      </div>

      <div className="bg-slate-800 p-12 rounded-2xl max-w-md text-center shadow-xl shadow-black/10">
        <div className="text-9xl font-extrabold text-cyan-400 leading-none mb-10 tabular-nums select-none">
          {count}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="bg-red-500 text-white border-0 rounded-lg w-16 h-16 flex items-center justify-center cursor-pointer transition-transform active:scale-95 hover:bg-red-600"
            aria-label="Decrement"
            type="button"
          >
            <Minus size={32} />
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-slate-500 text-white border-0 rounded-lg px-6 font-semibold text-lg cursor-pointer transition-transform active:scale-95 hover:bg-slate-600"
          >
            Reset
          </button>

          <button
            onClick={() => setCount((c) => c + 1)}
            className="bg-green-500 text-white border-0 rounded-lg w-16 h-16 flex items-center justify-center cursor-pointer transition-transform active:scale-95 hover:bg-green-600"
            aria-label="Increment"
            type="button"
          >
            <Plus size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
