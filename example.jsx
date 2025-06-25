import React from 'react';
import { Heart, ShoppingCart, Search, User, Menu, Star, Plus, Minus, ArrowLeft } from 'lucide-react';

const EcommerceApp = () => {
  // Sample product data based on your JSON structure
  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      availabilityStatus: "In Stock",
      reviews: [
        { rating: 3, comment: "Would not recommend!", reviewerName: "Eleanor Collins" },
        { rating: 4, comment: "Very satisfied!", reviewerName: "Lucas Gordon" },
        { rating: 5, comment: "Highly impressed!", reviewerName: "Eleanor Collins" }
      ],
      images: ["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"],
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go applications.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 15.75,
      rating: 3.8,
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      availabilityStatus: "In Stock",
      reviews: [
        { rating: 4, comment: "Great quality!", reviewerName: "Sarah Johnson" },
        { rating: 3, comment: "Good value for money", reviewerName: "Mike Davis" }
      ],
      images: ["https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"],
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    {
      id: 3,
      title: "Powder Canister",
      description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.31,
      stock: 59,
      tags: ["beauty", "face-powder"],
      brand: "Velvet Touch",
      availabilityStatus: "In Stock",
      reviews: [
        { rating: 5, comment: "Excellent product!", reviewerName: "Jessica Brown" },
        { rating: 2, comment: "Not what I expected", reviewerName: "Tom Wilson" }
      ],
      images: ["https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"],
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
    },
    {
      id: 4,
      title: "Red Lipstick",
      description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty", 
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.74,
      stock: 68,
      tags: ["beauty", "lipstick"],
      brand: "Chic Cosmetics",
      availabilityStatus: "In Stock",
      reviews: [
        { rating: 3, comment: "Average quality", reviewerName: "Emma Davis" },
        { rating: 4, comment: "Love the color!", reviewerName: "Alex Johnson" }
      ],
      images: ["https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"],
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description: "The Red Nail Polish offers a rich and glossy red color for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      category: "beauty",
      price: 8.99,
      discountPercentage: 2.46,
      rating: 3.91,
      stock: 71,
      tags: ["beauty", "nail-polish"],
      brand: "Nail Couture",
      availabilityStatus: "In Stock",
      reviews: [
        { rating: 5, comment: "Perfect color!", reviewerName: "Lisa Anderson" },
        { rating: 4, comment: "Long lasting", reviewerName: "David Miller" }
      ],
      images: ["https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"],
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      category: "fragrances",
      price: 49.99,
      discountPercentage: 0.32,
      rating: 4.85,
      stock: 17,
      tags: ["fragrances", "perfumes"],
      brand: "Calvin Klein",
      availabilityStatus: "Low Stock",
      reviews: [
        { rating: 5, comment: "Amazing fragrance!", reviewerName: "Sophie Wilson" },
        { rating: 5, comment: "Classic scent", reviewerName: "James Taylor" }
      ],
      images: ["https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"],
      thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
    }
  ];

  const cartItems = [
    { ...products[0], quantity: 2 },
    { ...products[2], quantity: 1 },
    { ...products[4], quantity: 3 }
  ];

  const wishlistItems = [products[1], products[3], products[5]];

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              StyleHub
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Cart
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Wishlist
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-transparent outline-none text-sm w-64"
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="h-5 w-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Heart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  6
                </span>
              </button>
            </div>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      
      {/* HOME PAGE */}
      <div>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Discover Your
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Perfect Style
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Curated collection of premium products designed for the modern lifestyle. 
                Find everything you need to express your unique style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Shop Collection
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-bounce"></div>
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked items that combine quality, style, and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
              <p className="text-lg text-gray-600">Explore our diverse range of premium products</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Beauty', 'Fragrances', 'Fashion', 'Electronics'].map((category) => (
                <div key={category} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{category[0]}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CART PAGE - Hidden by default, you can show/hide via CSS classes */}
      <div className="hidden min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">3 items in your cart</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <p className="text-lg font-bold text-purple-600 mt-1">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        <button className="text-red-500 hover:text-red-700 text-sm mt-1">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">$733.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">$58.64</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">$15.00</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-purple-600">$806.64</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold mt-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Proceed to Checkout
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold mt-3">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WISHLIST PAGE - Hidden by default */}
      <div className="hidden min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-2">3 items saved for later</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
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
                    <span className="text-sm text-purple-600 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
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

      {/* PRODUCT DETAILS PAGE - Hidden by default */}
      <div className="hidden min-h-screen bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src={products[0].thumbnail || products[0].images[0]} 
                  alt={products[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {products[0].images.concat(products[0].images, products[0].images).slice(0, 4).map((img, i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                    <img 
                      src={img}
                      alt={`Product view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-purple-600 font-medium capitalize">{products[0].category}</span>
                    <span className="text-sm text-gray-500">{products[0].brand}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className={`h-4 w-4 ${star <= Math.round(products[0].rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{products[0].rating.toFixed(1)} ({products[0].reviews.length} reviews)</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{products[0].title}</h1>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">${products[0].price}</span>
                  {products[0].discountPercentage > 0 && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        ${(products[0].price / (1 - products[0].discountPercentage / 100)).toFixed(2)}
                      </span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {Math.round(products[0].discountPercentage)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    products[0].availabilityStatus === 'In Stock' ? 'bg-green-100 text-green-800' : 
                    products[0].availabilityStatus === 'Low Stock' ? 'bg-orange-100 text-orange-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {products[0].availabilityStatus}
                  </div>
                  <span className="text-gray-600">{products[0].stock} units available</span>
                </div>
              </div>
              
              <div className="border-t border-b py-6">
                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {products[0].description}
                </p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {products[0].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Color</h3>
                  <div className="flex space-x-3">
                    <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300"></button>
                    <button className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-300"></button>
                    <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300"></button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-semibold text-gray-900 min-w-[3rem] text-center">1</span>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Add to Cart
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders over $100</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">30-Day Returns</div>
                  <div className="text-sm text-gray-600">Easy returns policy</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">2 Year Warranty</div>
                  <div className="text-sm text-gray-600">Full coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceApp;