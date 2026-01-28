import { useState, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function Exercise5() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Master Components", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 5: Todo List</h1>
        <p className="text-slate-400">
          Managing lists with standard array operations.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-lg shadow-xl shadow-black/10">
        <form onSubmit={addTodo} className="flex gap-4 mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo..."
            className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-5 font-semibold flex items-center gap-2 transition-colors"
          >
            <Plus size={20} /> Add
          </button>
        </form>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="group bg-slate-900 p-4 rounded-lg border border-slate-700 flex items-center gap-4 transition-colors hover:border-slate-600"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 accent-cyan-500 cursor-pointer rounded bg-slate-700 border-slate-600"
              />

              <span
                className={`
                  flex-1 transition-colors duration-200
                  ${todo.completed ? "line-through text-slate-500" : "text-white"}
                `}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 opacity-70 hover:opacity-100 p-1 rounded hover:bg-red-500/10 transition-all"
                aria-label={`Delete ${todo.text}`}
                type="button"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>

        {todos.length > 0 && (
          <div className="mt-6 text-slate-400 text-sm text-center">
            {todos.filter((todo) => todo.completed).length} / {todos.length} completed
          </div>
        )}
      </div>
    </div>
  );
}
