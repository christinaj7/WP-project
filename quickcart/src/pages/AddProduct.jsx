import { useState } from "react";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [form, setForm] = useState({});
  const nav = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    await addProduct(form);
    nav("/admin");
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add Product</h1>
      <input
        name="name"
        placeholder="Name"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="Image URL"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <select
        name="category"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      >
        <option>Select Category</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home & Garden</option>
        <option>Sports</option>
      </select>
      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      ></textarea>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Add Product
      </button>
    </div>
  );
}

