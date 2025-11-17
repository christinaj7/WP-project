import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../services/api";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);

  function load() {
    fetchProducts().then(setProducts);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <Link
        to="/admin/add"
        className="bg-green-600 text-white px-3 py-2 rounded"
      >
        Add Product
      </Link>
      {products.map((p) => (
        <div key={p._id} className="border p-3 rounded mt-3">
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
          <div className="flex gap-3 mt-2">
            <Link
              to={`/admin/edit/${p._id}`}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </Link>
            <button
              onClick={async () => {
                await deleteProduct(p._id);
                load();
              }}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

