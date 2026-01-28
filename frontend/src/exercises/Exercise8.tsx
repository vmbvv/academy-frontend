import { useState, useEffect, useRef } from "react";
import { Terminal, Eraser } from "lucide-react";

export default function Exercise8() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, `[${timestamp}] Effect ran! Count: ${count}`]);
  }, [count]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 8: useEffect Demo</h1>
        <p className="text-slate-400">
          Managing side effects and dependency arrays.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-2xl text-white shadow-xl shadow-black/10">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-lg px-6 py-3 font-bold text-lg cursor-pointer transition-colors"
          >
            Count: {count}
          </button>

          <button
            onClick={() => setLogs([])}
            className="bg-slate-600 hover:bg-slate-700 text-white border-0 rounded-lg px-4 cursor-pointer flex items-center gap-2 transition-colors"
          >
            <Eraser size={18} /> Clear Log
          </button>
        </div>

        <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 font-mono h-64 overflow-y-auto shadow-inner">
          <div className="flex items-center gap-2 text-slate-500 mb-4 pb-2 border-b border-slate-800">
            <Terminal size={14} />
            <span>Console Output</span>
          </div>

          <div className="flex flex-col gap-2">
            {logs.length === 0 && (
              <span className="text-slate-600 italic">
                // No effects triggers yet...
              </span>
            )}
            {logs.map((log, index) => (
              <div key={index} className="text-green-400 text-sm">
                <span className="text-cyan-400 mr-2">&gt;</span>
                {log}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
