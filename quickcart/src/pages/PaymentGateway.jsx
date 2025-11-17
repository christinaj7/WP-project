import { useContext, useMemo, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function PaymentGateway() {
  const { cart } = useContext(CartContext);
  const nav = useNavigate();
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + Number(item.price || 0),
        0
      ),
    [cart]
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handlePay(e) {
    e.preventDefault();
    setStatus("Processing payment…");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("Payment successful! Redirecting…");
    setTimeout(() => {
      nav("/products");
    }, 1500);
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Payment Gateway</h1>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-2 mb-4">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>

      <form
        className="bg-white shadow rounded p-4 space-y-4"
        onSubmit={handlePay}
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name on Card"
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="border p-2 rounded w-full"
          maxLength={19}
          required
        />
        <div className="flex gap-3">
          <input
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            className="border p-2 rounded w-1/2"
            required
          />
          <input
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            placeholder="CVV"
            className="border p-2 rounded w-1/2"
            maxLength={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
          disabled={!cart.length}
        >
          Pay ₹{total.toFixed(2)}
        </button>
      </form>

      {status && <p className="text-center text-sm text-green-700">{status}</p>}
    </div>
  );
}

