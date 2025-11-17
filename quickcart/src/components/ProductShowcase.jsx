import { useState, useEffect, useCallback } from 'react'
import { getProducts } from '../services/api'
import ProductCard from './ProductCard'
import ProductDetail from './ProductDetail'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import Pagination from './Pagination'
import LoadingSpinner from './LoadingSpinner'

const ProductShowcase = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [productsPerPage] = useState(12)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [allProducts, setAllProducts] = useState([])

  // Separate the sorting logic from the API call
  const sortProducts = (products, sortBy) => {
    if (!sortBy) return products
    
    const sorted = [...products]
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price)
      case 'rating-desc':
        return sorted.sort((a, b) => b.rating - a.rating)
      case 'title-asc':
        return sorted.sort((a, b) => (a.name || a.title || '').localeCompare(b.name || b.title || ''))
      case 'title-desc':
        return sorted.sort((a, b) => (b.name || b.title || '').localeCompare(a.name || a.title || ''))
      default:
        return sorted
    }
  }

  // Load products without sorting dependency
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const data = await getProducts()
      setAllProducts(data)
      setProducts(data)
      setTotalProducts(data.length)
      setTotalPages(1)
    } catch (err) {
      setError('Failed to load products. Please try again.')
      console.error('Error loading products:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  // Load products when component mounts
  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  // Filter products locally whenever filters change
  useEffect(() => {
    let filtered = [...allProducts]

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        (product.name || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) =>
          product.category?.name?.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    const sortedFiltered = sortProducts(filtered, sortBy)
    setProducts(sortedFiltered)
    setTotalProducts(sortedFiltered.length)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, allProducts, sortBy])

  const handleSearch = (term) => {
    console.log('Search term changed:', term)
    setSearchTerm(term)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handleCategoryChange = (category) => {
    console.log('Category changed:', category)
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when changing category
  }

  const handleSortChange = (sort) => {
    console.log('Sort changed:', sort)
    setSortBy(sort)
    // Don't reset page for sorting
  }

  const handlePageChange = (page) => {
    console.log('Page change requested:', page)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleCloseProductDetail = () => {
    setSelectedProduct(null)
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#E5DCD5] flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4 text-center">
          <div className="text-red-500 text-6xl mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={loadProducts}
            className="bg-[#7B3F00] hover:bg-[#5c2e00] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#E5DCD5] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7B3F00] mb-4">
            QuickCart Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop with confidence and enjoy fast delivery.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Main Content with Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-[#E5DCD5] rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 text-left">filters</h2>
              <FilterBar
                onCategoryChange={handleCategoryChange}
                onSortChange={handleSortChange}
                selectedCategory={selectedCategory}
                sortBy={sortBy}
              />
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            {/* Results Summary */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-left">Results</h2>
              <p className="text-gray-600">
                {loading ? (
                  'Loading products...'
                ) : (
                  <>
                    Showing {products.length} of {totalProducts} products
                    {searchTerm && ` for "${searchTerm}"`}
                    {selectedCategory && ` in ${selectedCategory.replace('-', ' ')}`}
                    {currentPage > 1 && ` (Page ${currentPage} of ${totalPages})`}
                  </>
                )}
              </p>
            </div>

            {/* Products Grid */}
            {loading ? (
              <LoadingSpinner size="large" text="Loading amazing products..." />
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('')
                    setSortBy('')
                    setCurrentPage(1)
                  }}
                  className="bg-[#7B3F00] hover:bg-[#5c2e00] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {products.map((product) => (
                    <ProductCard 
                      key={product.id || product._id} 
                      product={product} 
                      onProductClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

             {/* Product Detail Modal */}
       {selectedProduct && (
         <ProductDetail 
           product={selectedProduct} 
           onClose={handleCloseProductDetail} 
         />
       )}
    </div>
  )
}

export default ProductShowcase
