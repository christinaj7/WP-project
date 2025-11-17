import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";
import FilterBar from "../components/FilterBar";

export default function Products() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts({ category, search }).then(setData);
  }, [category, search]);

  return (
    <div>
      <FilterBar setCategory={setCategory} setSearch={setSearch} />
      <div className="grid grid-cols-2 gap-4 p-4">
        {data.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

