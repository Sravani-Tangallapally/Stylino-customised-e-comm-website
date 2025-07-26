import React from 'react';
import { useNavigate } from 'react-router-dom';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

const Checkout = ({ cartItems, totalAmount }) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      
      {/* Address Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <input type="text" placeholder="Full Name" className="w-full mb-2 p-2 border rounded" />
          <input type="text" placeholder="Phone Number" className="w-full mb-2 p-2 border rounded" />
          <input type="text" placeholder="Address" className="w-full mb-2 p-2 border rounded" />
          <input type="text" placeholder="City" className="w-full mb-2 p-2 border rounded" />
          <input type="text" placeholder="Pin Code" className="w-full mb-2 p-2 border rounded" />
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="bg-gray-100 p-4 rounded-lg space-y-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>{formatPrice(totalAmount)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
      <select className="w-full mb-4 p-2 border rounded">
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Credit/Debit Card</option>
      </select>

      <button
        onClick={handlePlaceOrder}
        className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
