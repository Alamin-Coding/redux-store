import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Heart } from "lucide-react";
import { removeFromCart, updateQuantity, saveForLater } from "../features/cart/cartSlice.js";
import { useDispatch } from "react-redux";

const CartList = ({product}) => {
  const dispatch = useDispatch()

  const handleSaveForLater = () => {
    dispatch(saveForLater(product.id));
  };
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={product.thumbnail || product.images[0]}
            alt={product.title}
            className="w-24 h-24 object-cover rounded-lg bg-gray-100"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 truncate pr-2">
              {product.title}
            </h3>
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              className="text-gray-400 hover:text-red-500 transition-colors p-1"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          {/* Quantity and Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity - 1 }))}
                className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-medium">{product.quantity}</span>
              <button
                onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity + 1 }))}
                className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>

            </div>

            <div className="text-right">
              <div className="text-lg font-bold text-gray-800">
                ${(product.price * product.quantity).toFixed(2)}
              </div>
              <div className="text-sm text-gray-500">
                ${product.price.toFixed(2)} each
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <button 
          onClick={handleSaveForLater}
          className="flex items-center text-gray-600 hover:text-blue-500 transition-colors text-sm"
        >
          <Heart className="w-4 h-4 mr-1" />
          Save for Later
        </button>
      </div>
    </div>
  );
};

export default CartList;
