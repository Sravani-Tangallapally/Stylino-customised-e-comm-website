

// export default Cart;
// import React from 'react';
// import { X } from 'lucide-react';

// const formatPrice = (price) =>
//   new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

// const Cart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
//       <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl">
//         <div className="flex flex-col h-full">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h2 className="text-xl font-semibold">Shopping Cart</h2>
//             <button
//               onClick={onClose}
//               className="p-2 hover:bg-gray-100 rounded-full"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto p-4">
//             {items.length === 0 ? (
//               <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
//             ) : (
//               <div className="space-y-4">
//                 {items.map((item) => (
//                   <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-medium">{item.name}</h3>
//                       <p className="text-gray-600">{formatPrice(item.price)}</p>
//                       <div className="flex items-center mt-2">
//                         <button
//                           onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
//                           className="px-2 py-1 bg-gray-200 rounded-l"
//                         >
//                           -
//                         </button>
//                         <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
//                         <button
//                           onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//                           className="px-2 py-1 bg-gray-200 rounded-r"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => onRemove(item.id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="border-t p-4">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-lg font-semibold">Total:</span>
//               <span className="text-xl font-bold">{formatPrice(total)}</span>
//             </div>
//             <button
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
//               onClick={() => {
//                 alert('Checkout functionality will be connected to your backend');
//               }}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

const Cart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const navigate = useNavigate(); // ✅ Initialize it

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{formatPrice(item.price)}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      <p className="text-green-600 text-sm mt-1">In stock</p>
                      <p className="text-xs text-gray-500">Delivery in 3-5 business days</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-200 rounded-l">-</button>
                        <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-200 rounded-r">+</button>
                      </div>
                      <div className="mt-2 text-blue-500 text-sm cursor-pointer hover:underline">Save for later</div>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">{formatPrice(total)}</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">Eligible for FREE 7-day return</div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
              />
              <button className="w-full mt-2 bg-gray-800 text-white py-2 rounded hover:bg-black transition">Apply Coupon</button>
            </div>
            <button
  onClick={() => navigate('/checkout')}
  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
>
  Checkout
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

