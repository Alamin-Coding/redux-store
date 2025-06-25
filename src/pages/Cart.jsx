import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Heart, Tag } from 'lucide-react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';

const Cart = () => {
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Wireless Bluetooth Headphones",
  //     price: 89.99,
  //     quantity: 1,
  //     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=center",
  //     color: "Midnight Black",
  //     size: "One Size"
  //   },
  //   {
  //     id: 2,
  //     name: "Premium Cotton T-Shirt",
  //     price: 24.99,
  //     quantity: 2,
  //     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop&crop=center",
  //     color: "Navy Blue",
  //     size: "Medium"
  //   },
  //   {
  //     id: 3,
  //     name: "Leather Crossbody Bag",
  //     price: 149.99,
  //     quantity: 1,
  //     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=center",
  //     color: "Cognac Brown",
  //     size: "Regular"
  //   }
  // ]);
const {cartItems} = useSelector((state) => state.carts);
const newCart = cartItems.map(cart => {
  return {...cart, quantity:1}
})
  console.log(newCart);
  

  // const [promoCode, setPromoCode] = useState('');
  // const [appliedPromo, setAppliedPromo] = useState(null);

  // const updateQuantity = (id, newQuantity) => {
  //   if (newQuantity === 0) {
  //     removeItem(id);
  //     return;
  //   }
  //   setCartItems(items =>
  //     items.map(item =>
  //       item.id === id ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  // };

  // const removeItem = (id) => {
  //   setCartItems(items => items.filter(item => item.id !== id));
  // };

  // const applyPromoCode = () => {
  //   if (promoCode.toLowerCase() === 'save10') {
  //     setAppliedPromo({ code: 'SAVE10', discount: 0.1 });
  //     setPromoCode('');
  //   } else {
  //     alert('Invalid promo code');
  //   }
  // };

  // const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  // const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  // const shipping = subtotal > 500 ? 0 : 2;
  // const tax = (subtotal - discount) * 0.05;
  // const total = subtotal - discount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </button>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <div className="text-sm text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems?.map((product) => (
              <CartList key={product.id} product={product} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  {/* <span>${subtotal.toFixed(2)}</span> */}
                  <span>$0</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {/* <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span> */}
                  <span>0</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  {/* <span>${tax.toFixed(2)}</span> */}
                  <span>$0</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Total</span>
                    {/* <span>${total.toFixed(2)}</span> */}
                    <span>$0</span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {/* {subtotal < 100 && (
                <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )} */}

              {/* Checkout Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Proceed to Checkout
              </button>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Continue Shopping
              </button>

              {/* Security Badge */}
              <div className="mt-6 text-center">
                <div className="text-xs text-gray-500 flex items-center justify-center">
                  <span className="mr-1">🔒</span>
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;