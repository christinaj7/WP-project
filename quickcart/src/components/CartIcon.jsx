import { useCart } from '../contexts/CartContext'

const CartIcon = () => {
  const { cartItemsCount, openCart } = useCart()

  return (
    <button
      onClick={openCart}
      className="relative p-2 text-gray-700 hover:text-[#7B3F00] transition-colors duration-200"
      aria-label="Shopping Cart"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
        />
      </svg>
      
      {cartItemsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#7B3F00] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {cartItemsCount > 99 ? '99+' : cartItemsCount}
        </span>
      )}
    </button>
  )
}

export default CartIcon
