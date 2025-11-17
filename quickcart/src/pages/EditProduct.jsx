import { useState, useEffect } from "react";
import { fetchProduct, updateProduct } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    fetchProduct(id).then(setForm);
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    await updateProduct(id, form);
    nav("/admin");
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit Product</h1>
      <input
        name="name"
        value={form.name || ""}
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        name="price"
        value={form.price || ""}
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        name="image"
        value={form.image || ""}
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <select
        name="category"
        value={form.category || ""}
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      >
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home & Garden</option>
        <option>Sports</option>
      </select>
      <textarea
        name="description"
        value={form.description || ""}
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      ></textarea>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Save Changes
      </button>
    </div>
  );
}

