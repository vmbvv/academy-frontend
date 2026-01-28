import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

function CounterDisplay({
  label,
  counter,
}: {
  label: string;
  counter: ReturnType<typeof useCounter>;
}) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-4 last:mb-0">
      <h3 className="mb-4 text-lg text-slate-400">{label}</h3>
      <div className="flex items-center justify-between">
        <div className="text-4xl font-bold text-white">{counter.count}</div>

        <div className="flex gap-2">
          <button
            onClick={counter.decrement}
            className="bg-red-500 hover:bg-red-600 text-white border-0 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer transition-colors"
          >
            <Minus size={20} />
          </button>

          <button
            onClick={counter.reset}
            className="bg-slate-500 hover:bg-slate-600 text-white border-0 rounded-lg px-3 cursor-pointer font-semibold transition-colors"
          >
            Reset
          </button>

          <button
            onClick={counter.increment}
            className="bg-green-500 hover:bg-green-600 text-white border-0 rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Exercise13() {
  const counter1 = useCounter(0);
  const counter2 = useCounter(100);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 13: Custom Hook</h1>
        <p className="text-slate-400">Reusing logic with custom hooks.</p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg text-white shadow-xl shadow-black/10">
        <CounterDisplay label="Counter 1 (start: 0)" counter={counter1} />
        <CounterDisplay label="Counter 2 (start: 100)" counter={counter2} />
      </div>
    </div>
  );
}
