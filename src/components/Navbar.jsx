import { Heart, ShoppingCart, Search, User, Menu} from 'lucide-react';
import { Link } from 'react-router';
const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              StyleHub
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
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
              <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Heart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  6
                </span>
              </Link>
            </div>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

export default Navigation;