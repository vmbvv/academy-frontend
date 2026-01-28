import { useState } from "react";

export default function Exercise1() {
  const [name, setName] = useState("John");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Exercise 1: Greeting Component
        </h1>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg shadow-xl shadow-black/10">
        <label className="block mb-3 text-sm text-slate-300">
          Try changing the name:
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-8 text-base"
        />

        <div className="bg-cyan-600 p-6 rounded-lg text-center border-2 border-cyan-400 font-bold text-xl shadow-sm">
          Hello, {name}!
        </div>
      </div>
    </div>
  );
}
