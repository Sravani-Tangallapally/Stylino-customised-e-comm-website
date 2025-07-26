import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic  Sneakers",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500",
    description: "Timeless white sneakers perfect for any casual outfit"
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    price: 256.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500",
    description: "Elegant leather bag with adjustable strap"
  },
  {
    id: 3,
    name: "Flower vase",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Simple and elegant vase for Living area"
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 1200.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500",
    description: "Classic denim jacket perfect for layering"
  },
  {
    id: 5,
    name: "Dresses",
    price: 1200.99,
    image: "https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.webp?a=1&b=1&s=612x612&w=0&k=20&c=PZOF5tlfOXTIVA-1agx_C6OeVWvJcvySv_Q2-WoPaao=",
    description: "Summer Dresses"
  },
  {
    id: 6,
    name: "Heels",
    price: 1200.99,
    image: "https://plus.unsplash.com/premium_photo-1671028365111-cec8e5a95a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHN5JTIwaGVlbHN8ZW58MHx8MHx8fDA%3D",
    description: "Add these in your closet"
  },
  {
    id: 7,
    name: "WROGN Backpack",
    price: 1200.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    description: "A travel friendly backpack"
  },
  {
    id: 8,
    name: "Sunscreen",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1594527964562-32ed6eb11709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2NyZWVufGVufDB8fDB8fHwwD",
    description: "sunscreen with pa+++"
  },
  {
    id: 9,
    name: "Bed Lamp",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D",
    description: "for your aesthetic room"
  }
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                <Heart size={20} className="text-gray-600" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}
</span>

                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;