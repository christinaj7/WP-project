import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + Number(item.price || 0),
        0
      ),
    [cart]
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, i) => (
        <div key={i} className="border p-3 rounded mb-2">
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <Link
            to="/payment"
            className="block text-center bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Proceed to Payment
          </Link>
        </div>
      )}
    </div>
  );
}

