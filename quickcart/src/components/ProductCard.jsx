import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="border p-3 rounded shadow">
      <img src={product.image} className="w-full h-40 object-cover" />
      <h2 className="font-bold mt-2">{product.name}</h2>
      <p>₹{product.price}</p>
    </Link>
  );
}
