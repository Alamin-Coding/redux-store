import { Heart, Star } from "lucide-react";

  // Product Card Component
  const ProductCard = ({ product }) => {
    const originalPrice = product.discountPercentage > 0 ? 
      (product.price / (1 - product.discountPercentage / 100)).toFixed(2) : null;
    
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
        <div className="relative">
          <img 
            src={product.thumbnail || product.images[0]} 
            alt={product.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors">
              <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
            </button>
          </div>
          {product.discountPercentage > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              {Math.round(product.discountPercentage)}% OFF
            </div>
          )}
          {product.stock < 20 && (
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {product.stock < 10 ? 'Low Stock' : `${product.stock} left`}
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-purple-600 font-medium capitalize">{product.category}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{product.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-400">({product.reviews.length})</span>
            </div>
          </div>
          <div className="mb-2">
            <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {originalPrice && (
                <span className="text-lg text-gray-400 line-through">${originalPrice}</span>
              )}
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;