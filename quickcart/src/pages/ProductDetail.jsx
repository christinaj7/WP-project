import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/api";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading…</p>;

  return (
    <div className="p-4">
      <img src={product.image} className="w-full h-60 object-cover" />
      <h1 className="text-xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg">₹{product.price}</p>
      <p className="mt-2">{product.description}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

