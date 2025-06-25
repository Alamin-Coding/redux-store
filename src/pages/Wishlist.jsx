import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
const Wishlist = () => {
  const wishlist= useSelector((state) => state.wishlist);
  console.log(wishlist);
  
  return (
          <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-2">{wishlist.length} items saved for later</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist?.map((product) => (
              <ProductCard key={product.id} product={product} wishlistCard />
            ))}
          </div>
        </div>
      </div>
  )
}

export default Wishlist