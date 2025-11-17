export default function FilterBar({ setCategory, setSearch }) {
  return (
    <div className="p-4 flex gap-3">
      <select
        className="border p-2 rounded"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home & Garden">Home & Garden</option>
        <option value="Sports">Sports</option>
      </select>
      <input
        type="text"
        placeholder="Search…"
        className="border p-2 rounded flex-1"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
