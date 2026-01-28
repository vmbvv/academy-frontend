import { useState } from "react";
import { User, Calendar, CheckCircle, XCircle } from "lucide-react";

export default function Exercise4() {
  const [name, setName] = useState("Sarah");
  const [age, setAge] = useState("25");
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 4: Props & Cards</h1>
        <p className="text-slate-400">
          Dynamic properties controlling component appearance.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg text-white shadow-xl shadow-black/10">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-slate-400 text-sm mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-1">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="w-5 h-5 accent-green-500 rounded bg-slate-700 border-slate-600"
            />
            <span className="text-slate-200">User is Active</span>
          </label>
        </div>

        <div
          className={`
            border-2 rounded-xl p-6 transition-all duration-300 ease-in-out
            ${isActive ? "border-green-500/50 bg-green-500/10" : "border-slate-700 bg-transparent"}
          `}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">{name || "Unknown"}</h2>
                <div
                  className={`
                    w-2.5 h-2.5 rounded-full
                    ${isActive ? "bg-green-500 shadow-[0_0_10px_#22c55e]" : "bg-slate-500"}
                  `}
                />
              </div>

              <div className="flex gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <User size={16} /> User
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} /> {age} years old
                </div>
              </div>
            </div>

            {isActive ? (
              <CheckCircle size={32} className="text-green-500 opacity-80" />
            ) : (
              <XCircle size={32} className="text-slate-500 opacity-50" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
