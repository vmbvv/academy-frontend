import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function Exercise7() {
  const [items, setItems] = useState([
    { id: 1, text: "Apple" },
    { id: 2, text: "Banana" },
    { id: 3, text: "Orange" },
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (!newItem.trim()) return;
    setItems([...items, { id: Date.now(), text: newItem }]);
    setNewItem("");
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 7: Lists & Keys</h1>
        <p className="text-slate-400">
          Rendering dynamic lists efficiently.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg text-white shadow-xl shadow-black/10">
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add fruit..."
            className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onKeyDown={(e) => e.key === "Enter" && addItem()}
          />
          <button
            onClick={addItem}
            className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-lg w-12 flex items-center justify-center cursor-pointer transition-colors"
          >
            <Plus size={24} />
          </button>
        </div>

        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="bg-slate-900 p-4 rounded-lg border border-slate-700 flex justify-between items-center animate-in slide-in-from-left-2 duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl font-emoji">🍎</span>
                <span className="font-medium">{item.text}</span>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white border-0 rounded px-2.5 py-1.5 cursor-pointer text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <Trash2 size={16} /> Remove
              </button>
            </li>
          ))}
          {items.length === 0 && (
            <li className="text-center text-slate-500 py-8">
              List is empty. Add some fruits!
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
