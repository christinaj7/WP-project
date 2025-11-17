import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

const ProductDetail = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addToCart, items } = useCart()

  const isInCart = items.some(item => item.id === product.id || item._id === product._id)
  const cartItem = items.find(item => item.id === product.id || item._id === product._id)
  const cartQuantity = cartItem ? cartItem.quantity : 0
  const productTitle = product.title || product.name || 'Product'
  const productDescription = product.description || 'No description available.'
  const productPrice = product.price || 0
  const productImages = [
    product.thumbnail || product.image || 'https://via.placeholder.com/400x500?text=Product+Image',
    product.image || product.thumbnail || 'https://via.placeholder.com/400x500?text=Product+Image',
    product.image || product.thumbnail || 'https://via.placeholder.com/400x500?text=Product+Image'
  ]
  const productStock = typeof product.stock === 'number' ? product.stock : 10
  const discount = product.discountPercentage || 0

  const handleAddToCart = async () => {
    if (product.stock === 0) return
    
    setIsAddingToCart(true)
    
    setTimeout(() => {
      addToCart(product)
      setIsAddingToCart(false)
    }, 300)
  }

  const colorOptions = [
    { name: 'Beige', hex: '#E5DCD5' },
    { name: 'Olive Green', hex: '#6B7C93' },
    { name: 'Black', hex: '#1B1A19' }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#E5DCD5] w-full max-w-7xl h-[90vh] rounded-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white/30 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full">
          {/* Left Section - Product Visuals */}
          <div className="w-1/2 bg-white/30 p-12 flex flex-col items-center justify-center relative">
            {/* Main Product Image */}
            <div className="relative mb-8">
              <img
                src={productImages[selectedImage]}
                alt={productTitle}
                className="w-80 h-96 object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500?text=Product+Image'
                }}
              />
              
              {/* Decorative ink splash */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black/20 rounded-full blur-sm"></div>
            </div>

            {/* Product Views - Horizontal Images */}
            <div className="flex space-x-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-200 ${
                    selectedImage === index ? 'ring-2 ring-[#7B3F00]' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${productTitle} view ${index + 1}`}
                    className="w-24 h-16 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x150?text=View'
                    }}
                  />
                  
                  {/* Feature labels */}
                  {index === 0 && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 shadow-sm">
                      ABS plastic construction
                    </div>
                  )}
                  {index === 1 && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 shadow-sm">
                      ergonomic grip section
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="w-1/2 bg-white/40 p-12 flex flex-col justify-center relative">
            {/* Product Category */}
            <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">
              {product.category?.name || 'CATEGORY'}
            </div>

            {/* Product Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {productTitle}
            </h1>

            {/* Product Specs */}
            <div className="space-y-1 mb-6">
              <div className="text-xs uppercase tracking-widest text-gray-600">
                MADE IN Germany
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-600">
                0.5MM NIB
              </div>
            </div>

            {/* Color Options */}
            <div className="flex space-x-3 mb-6">
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === index ? 'border-[#7B3F00] scale-110' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>

            {/* Product Description */}
            <p className="text-gray-700 leading-relaxed mb-8 max-w-md">
              {productDescription}
            </p>

            {/* Price */}
            <div className="text-3xl font-bold text-[#7B3F00] mb-8">
              ${productPrice}
              {discount > 0 && (
                <span className="text-lg text-gray-500 line-through ml-3">
                  ${(productPrice / (1 - discount / 100)).toFixed(2)}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={productStock === 0 || isAddingToCart}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-3 ${
                  product.stock === 0 
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : isInCart
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                {isAddingToCart ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Adding...</span>
                  </>
                ) : productStock === 0 ? (
                  'Out of Stock'
                ) : isInCart ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>In Cart ({cartQuantity})</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    <span>ADD TO CART</span>
                  </>
                )}
              </button>

              {/* Wishlist Button */}
              <button className="w-12 h-12 bg-white/60 hover:bg-white/80 rounded-lg flex items-center justify-center transition-all duration-200 border border-gray-200">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Stock Info */}
            <div className="text-sm text-gray-600">
              {productStock > 0 ? `${productStock} items left` : 'Out of Stock'}
            </div>

            {/* Right Edge Decorative Line */}
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-[#7B3F00]/30"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
