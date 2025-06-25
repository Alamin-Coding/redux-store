import React from 'react'
import { useSelector } from 'react-redux';
const Wishlist = () => {
    const {products, status} = useSelector((state) => state.products);
    const wishlistItems = [products[1], products[3], products[5]];

  return (
          <div className="hidden min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-2">3 items saved for later</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems?.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors">
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium">
                      Add to Cart
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Wishlist