import { useState } from "react";
import { ShoppingCart, Plus, Trash2, ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  icon: string;
}

interface CartItem extends Product {
  quantity: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "React Book", price: 29, icon: "📘" },
  { id: 2, name: "JS Course", price: 49, icon: "💻" },
  { id: 3, name: "Coffee", price: 5, icon: "☕" },
];

export default function Exercise15() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 15: Shopping Cart</h1>
        <p className="text-slate-400">
          Complex state management with arrays and objects.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl max-w-xl text-white shadow-xl shadow-black/10">
        <h2 className="text-xl mb-4 flex items-center gap-2">
          <ShoppingBag size={20} className="text-cyan-400" /> Available Products
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center"
            >
              <div className="text-4xl mb-2 font-emoji">{product.icon}</div>
              <div className="font-semibold mb-1">{product.name}</div>
              <div className="text-slate-400 text-sm mb-4">${product.price}</div>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-lg py-2 cursor-pointer text-sm font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <Plus size={16} /> Add
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl m-0 flex items-center gap-2">
              <ShoppingCart size={20} className="text-cyan-400" /> Your Cart
            </h2>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="bg-transparent text-red-500 border border-red-500 rounded-lg px-3 py-1 text-xs cursor-pointer flex items-center gap-1 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 size={14} /> Clear
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="text-center text-slate-500 py-8 bg-slate-900 rounded-xl border border-dashed border-slate-700">
              Your cart is empty.
            </div>
          ) : (
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 flex justify-between items-center ${index !== cart.length - 1 ? "border-b border-slate-800" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-emoji">{item.icon}</span>
                    <span>
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-slate-400 text-sm ml-2">
                        x{item.quantity}
                      </span>
                    </span>
                  </div>
                  <div className="font-semibold">${item.price * item.quantity}</div>
                </div>
              ))}

              <div className="bg-slate-700 p-4 flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-cyan-400">${total}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
