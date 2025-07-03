// src/pages/ShopListItemPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const sampleProducts = [
  { name: "Product A", price: 50, rating: 4 },
  { name: "Product B", price: 100, rating: 3 },
  { name: "Product C", price: 30, rating: 5 },
];

export default function ShopListItemPage() {
  const { item } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(sampleProducts);
  const [cart, setCart] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("shoppingList") || "[]");
    setShoppingList(list);
  }, []);

  const handleAddToCart = (product: any) => {
    const currentCart = JSON.parse(localStorage.getItem("shoppingListCart") || "[]");
    const updatedCart = [...currentCart, { ...product, for: item }];
    localStorage.setItem("shoppingListCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    alert(`${product.name} added to list-cart!`);
  };

  const handleNext = () => {
    const currentIndex = shoppingList.indexOf(item!);
    const nextItem = shoppingList[currentIndex + 1];
    if (nextItem) navigate(`/shop-list/${nextItem}`);
    else navigate("/shopping-list-cart");
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...products];
    if (value === "low") sorted.sort((a, b) => a.price - b.price);
    if (value === "high") sorted.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Shopping for: {item}</h2>

      <div className="flex justify-between mb-4">
        <label>
          Sort by:{" "}
          <select onChange={(e) => handleSort(e.target.value)} className="border px-2 py-1">
            <option value="">Select</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}⭐</p>
            <button
              className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() => handleAddToCart(product)}
            >
              Add to List Cart
            </button>
          </div>
        ))}
      </div>

      <button
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleNext}
      >
        Next Item →
      </button>
    </div>
  );
}
