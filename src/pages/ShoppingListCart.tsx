// src/pages/ShoppingListCart.tsx
import { useEffect, useState } from "react";

export default function ShoppingListCart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("shoppingListCart") || "[]");
    setCartItems(cart);
  }, []);

  const handleRemove = (index: number) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    localStorage.setItem("shoppingListCart", JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Shopping List Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in your list cart.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, i) => (
            <div key={i} className="border p-4 rounded shadow flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price}</p>
                <p className="text-sm text-gray-500">For: {item.for}</p>
              </div>
              <button
                onClick={() => handleRemove(i)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-4">Total: ₹{total}</div>
          <button className="bg-green-600 text-white px-4 py-2 rounded mt-2">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
