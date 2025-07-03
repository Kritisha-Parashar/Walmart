import { useEffect, useState } from "react";

type CartProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  for: string; // the shopping list item it belongs to
};

export default function ShoppingListCart() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("shoppingListCart") || "[]");
    setCartItems(cart);
  }, []);

  const handleRemove = (itemKey: string) => {
    const updated = cartItems.filter((p) => p.for !== itemKey);
    setCartItems(updated);
    localStorage.setItem("shoppingListCart", JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🛒 Shopping List Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in your shopping list cart.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.for} className="border rounded p-4 shadow">
              <h3 className="text-lg font-semibold capitalize mb-2">🛍️ {item.for}</h3>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.title}</h4>
                  <p>Price: ₹{Math.round(item.price * 80)}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.for)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">
            Total: ₹{Math.round(total * 80)}
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded mt-2">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
