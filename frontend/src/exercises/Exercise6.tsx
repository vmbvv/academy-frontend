import { useState } from "react";
import { LogOut, Shield, User } from "lucide-react";

type UserRole = "User" | "Admin";

export default function Exercise6() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<UserRole>("User");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Exercise 6: Conditional Rendering
        </h1>
        <p className="text-slate-400">Display different UI based on state.</p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg text-white shadow-xl shadow-black/10">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors
              ${isLoggedIn ? "bg-green-500 hover:bg-green-600" : "bg-slate-500 hover:bg-slate-600"}
            `}
          >
            {isLoggedIn ? (
              <>
                <span className="font-emoji">✓</span> Logged In
              </>
            ) : (
              "Logged Out"
            )}
          </button>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
            className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-slate-500 cursor-pointer"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 min-h-[150px] flex flex-col items-center justify-center text-center">
          {isLoggedIn ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-2xl mb-2">Welcome back!</h2>
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <User size={16} /> Signed in as {role}
              </div>

              {role === "Admin" && (
                <div className="mt-6 bg-yellow-500/10 text-yellow-500 px-4 py-3 rounded-lg flex items-center gap-2 border border-yellow-500/20">
                  <Shield size={18} />
                  <span className="font-semibold">
                    <span className="font-emoji">⚡</span> Admin Panel Access
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-slate-400">
              <div className="mb-4 opacity-50 flex justify-center">
                <LogOut size={32} />
              </div>
              <p>Please sign in to continue</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
