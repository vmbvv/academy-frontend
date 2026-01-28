import { useState, useEffect, useRef } from "react";
import { Timer } from "lucide-react";

export default function Exercise9() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [running]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 9: Stopwatch</h1>
        <p className="text-slate-400">Timers and cleanup with useEffect.</p>
      </div>

      <div className="bg-slate-800 p-12 rounded-2xl max-w-md text-white text-center shadow-xl shadow-black/10">
        <div className="mb-10 relative p-8 bg-slate-900 rounded-xl border border-slate-700">
          <div className="text-6xl font-mono font-bold text-cyan-400 leading-none tracking-wider drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            {formatTime(time)}
          </div>
          <div className="absolute top-4 right-4 opacity-30">
            <Timer size={20} />
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setRunning(!running)}
            className={`
              border-0 rounded-lg px-8 py-3 text-lg font-semibold cursor-pointer min-w-[120px] transition-colors
              ${running ? "bg-red-500 hover:bg-red-600 text-white" : "bg-green-500 hover:bg-green-600 text-white"}
            `}
          >
            {running ? "Stop" : "Start"}
          </button>

          <button
            onClick={() => {
              setRunning(false);
              setTime(0);
            }}
            className="bg-slate-500 hover:bg-slate-600 text-white border-0 rounded-lg px-8 py-3 text-lg font-semibold cursor-pointer transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
