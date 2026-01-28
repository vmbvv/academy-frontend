import { useState } from "react";
import { Download, Loader2, User } from "lucide-react";

interface UserData {
  id: number;
  name: string;
  email: string;
}

export default function Exercise14() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data.slice(0, 4));
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Exercise 14: Fetch API Data
        </h1>
        <p className="text-slate-400">
          Handling asynchronous data fetching and loading states.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg text-white shadow-xl shadow-black/10 min-h-[400px]">
        <button
          onClick={fetchUsers}
          disabled={loading}
          className={`
            w-full bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-lg p-4 font-bold text-base cursor-pointer flex items-center justify-center gap-2 mb-8 transition-all
            ${loading ? "opacity-70 cursor-not-allowed" : ""}
          `}
        >
          {loading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
          {loading ? "Fetching..." : "Fetch Users"}
        </button>

        <div className="flex flex-col gap-4">
          {users.length === 0 && !loading && (
            <div className="text-center text-slate-500 mt-8">
              Click the button to load users.
            </div>
          )}

          {users.map((user, index) => (
            <div
              key={user.id}
              className="bg-slate-900 p-4 rounded-lg border border-slate-700 flex items-center gap-4 animate-in slide-in-from-bottom-2 fade-in duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-slate-400">
                <User size={20} />
              </div>
              <div>
                <div className="text-cyan-400 font-semibold">{user.name}</div>
                <div className="text-slate-400 text-sm">{user.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
