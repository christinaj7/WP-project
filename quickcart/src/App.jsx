import { Routes, Route, NavLink, Link } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import PaymentGateway from "./pages/PaymentGateway";
import { CartProvider } from "./context/CartContext";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/products", label: "Products" },
  { to: "/cart", label: "Cart" },
  { to: "/admin", label: "Admin" },
];

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#E5DCD5]">
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/30">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3">
              <h1 className="text-2xl font-semibold text-[#7B3F00]">QC</h1>
              <span className="text-xl font-semibold text-[#7B3F00]">
                QuickCart
              </span>
            </Link>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto">
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.exact}
                      className={({ isActive }) =>
                        `block py-2 px-3 md:p-0 transition-colors ${
                          isActive ? "text-[#7B3F00]" : "text-gray-900"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/admin/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </CartProvider>
  );
}
