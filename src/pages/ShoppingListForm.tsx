// ShoppingListForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShoppingListForm() {
  const [list, setList] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (input.trim()) {
      setList([...list, input.trim()]);
      setInput("");
    }
  };

  const startShopping = () => {
    if (list.length > 0) {
      localStorage.setItem("shoppingList", JSON.stringify(list));
      navigate(`/shop-list/${list[0]}`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Enter your shopping list</h1>
      <div className="flex gap-2 mb-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="border px-2 py-1 flex-1" />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-3">Add</button>
      </div>
      <ul className="mb-4">
        {list.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
      <button onClick={startShopping} className="bg-green-600 text-white px-4 py-1 rounded">Start Shopping</button>
    </div>
  );
}
