import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShopListItemPage() {
  const { item } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState<any[]>([]);
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("shoppingList") || "[]");
    setShoppingList(list);

    if (!item) return;

    setIsLoading(true);

    const validCategories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];

    if (!validCategories.includes(item.toLowerCase())) {
      setProducts([]);
      setIsLoading(false);
      return;
    }

    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(item.toLowerCase())}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setProducts([]);
        setIsLoading(false);
      });
  }, [item]);

  const handleAddToCart = (product: any) => {
  const currentCart = JSON.parse(localStorage.getItem("shoppingListCart") || "[]");

  const alreadyExists = currentCart.some(
    (p: any) => p.id === product.id && p.for === item
  );

  if (alreadyExists) {
    alert("This product is already in the list-cart for this item!");
    return;
  }

  const updatedCart = [...currentCart, { ...product, for: item }];
  localStorage.setItem("shoppingListCart", JSON.stringify(updatedCart));
  setIsItemAdded(true);
  alert(`${product.title} added to list-cart!`);
};


  const handleNext = () => {
    const currentIndex = shoppingList.indexOf(item!);
    const nextItem = shoppingList[currentIndex + 1];
    if (nextItem) navigate(`/shop-list/${nextItem}`);
    else navigate("/shopping-list-cart");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping for: {item}</h2>

      {isLoading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-red-500">No products found for "{item}"</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product: any) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h3 className="font-semibold">{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                className="h-32 mx-auto object-contain mb-2"
              />
              <p>Price: ₹{Math.round(product.price * 80)}</p>
              <p>Rating: {product.rating?.rate || "N/A"}⭐</p>
              <button
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to List Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className={`mt-6 px-4 py-2 rounded ${isItemAdded ? "bg-green-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        onClick={handleNext}
        disabled={!isItemAdded}
      >
        Next Item →
      </button>
    </div>
  );
}
