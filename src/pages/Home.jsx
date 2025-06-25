import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Heart, Star, Plus, Minus, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import Pagination from "../components/Pagination";
import { useState } from "react";

const Home = () => {
  const { products: allProducts, status } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  const categories = [...new Set(allProducts.map((c) => c.category))];

  const totalItems = allProducts.length;
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  status === "loading" && <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
                Curated collection of premium products designed for the modern
                lifestyle. Find everything you need to express your unique
                style.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked items that combine quality, style, and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts?.slice((currentPage*6)-itemsPerPage, currentPage*6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </section>

        {/* Categories */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-gray-600">
                Explore our diverse range of premium products
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div key={category} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {category[0]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CART PAGE - Hidden by default, you can show/hide via CSS classes */}
      {/* 
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
                  <div
                    key={item.id}
                    className={`p-6 ${
                      index !== cartItems.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <p className="text-lg font-bold text-purple-600 mt-1">
                          ${item.price}
                        </p>
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
                        <p className="font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
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
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>
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
       */}

      {/* WISHLIST PAGE - Hidden by default */}

      {/* PRODUCT DETAILS PAGE - Hidden by default */}
      {/* 
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
                {products[0].images
                  .concat(products[0].images, products[0].images)
                  .slice(0, 4)
                  .map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                    >
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
                    <span className="text-sm text-purple-600 font-medium capitalize">
                      {products[0].category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {products[0].brand}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.round(products[0].rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {products[0].rating.toFixed(1)} (
                      {products[0].reviews.length} reviews)
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {products[0].title}
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${products[0].price}
                  </span>
                  {products[0].discountPercentage > 0 && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        $
                        {(
                          products[0].price /
                          (1 - products[0].discountPercentage / 100)
                        ).toFixed(2)}
                      </span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {Math.round(products[0].discountPercentage)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      products[0].availabilityStatus === "In Stock"
                        ? "bg-green-100 text-green-800"
                        : products[0].availabilityStatus === "Low Stock"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {products[0].availabilityStatus}
                  </div>
                  <span className="text-gray-600">
                    {products[0].stock} units available
                  </span>
                </div>
              </div>

              <div className="border-t border-b py-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {products[0].description}
                </p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {products[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
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
                    <span className="font-semibold text-gray-900 min-w-[3rem] text-center">
                      1
                    </span>
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
                  <div className="font-semibold text-gray-900">
                    Free Shipping
                  </div>
                  <div className="text-sm text-gray-600">
                    On orders over $100
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    30-Day Returns
                  </div>
                  <div className="text-sm text-gray-600">
                    Easy returns policy
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    2 Year Warranty
                  </div>
                  <div className="text-sm text-gray-600">Full coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       */}
    </div>
  );
};

export default Home;
