// // src/components/SearchResults.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// // Same products used in ProductList
// const products = [
//   {
//     id: 1,
//     name: "Classic Sneakers",
//     price: 999,
//     image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500",
//     description: "Timeless white sneakers perfect for any casual outfit"
//   },
//   {
//     id: 2,
//     name: "Leather Crossbody Bag",
//     price: 2560,
//     image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500",
//     description: "Elegant leather bag with adjustable strap"
//   },
//   {
//     id: 3,
//     name: "Flower Vase",
//     price: 599,
//     image: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
//     description: "Simple and elegant vase for Living area"
//   },
//   {
//     id: 4,
//     name: "Denim Jacket",
//     price: 1200.99,
//     image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500",
//     description: "Classic denim jacket perfect for layering"
//   },
//   {
//     id: 5,
//     name: "Dresses",
//     price: 1200.99,
//     image: "https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.webp?a=1&b=1&s=612x612&w=0&k=20&c=PZOF5tlfOXTIVA-1agx_C6OeVWvJcvySv_Q2-WoPaao=",
//     description: "Summer Dresses"
//   },
//   {
//     id: 6,
//     name: "Heels",
//     price: 1200.99,
//     image: "https://plus.unsplash.com/premium_photo-1671028365111-cec8e5a95a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHN5JTIwaGVlbHN8ZW58MHx8MHx8fDA%3D",
//     description: "Add these in your closet"
//   },
//   {
//     id: 7,
//     name: "WROGN Backpack",
//     price: 1200.99,
//     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
//     description: "A travel friendly backpack"
//   },
//   {
//     id: 8,
//     name: "Sunscreen",
//     price: 499.99,
//     image: "https://images.unsplash.com/photo-1594527964562-32ed6eb11709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2NyZWVufGVufDB8fDB8fHwwD",
//     description: "sunscreen with pa+++"
//   },
//   {
//     id: 9,
//     name: "Bed Lamp",
//     price: 1499.99,
//     image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D",
//     description: "for your aesthetic room"
//   }
// ];
  


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const SearchResults = ({ products, onAddToCart }) => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get("query")?.toLowerCase();

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(query) ||
//     product.description.toLowerCase().includes(query)
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6">Results for "{query}"</h2>
//       {filteredProducts.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <p className="text-gray-600">{product.description}</p>
//                 <p className="font-bold text-lg">₹{product.price}</p>
//                 <button
//                   onClick={() => onAddToCart(product)}
//                   className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
import React from 'react';
import { useLocation } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500",
    description: "Timeless white sneakers perfect for any casual outfit"
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    price: 2560,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500",
    description: "Elegant leather bag with adjustable strap"
  },
  {
    id: 3,
    name: "Flower Vase",
    price: 599,
    image: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Simple and elegant vase for Living area"
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 1200,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500",
    description: "Classic denim jacket perfect for layering"
  },
  {
    id: 5,
    name: "Dresses",
    price: 1200,
    image: "https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.webp",
    description: "Summer Dresses"
  },
  {
    id: 6,
    name: "Heels",
    price: 1200,
    image: "https://plus.unsplash.com/premium_photo-1671028365111-cec8e5a95a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Add these in your closet"
  },
  {
    id: 7,
    name: "WROGN Backpack",
    price: 1200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A travel friendly backpack"
  },
  {
    id: 8,
    name: "Sunscreen",
    price: 499,
    image: "https://images.unsplash.com/photo-1594527964562-32ed6eb11709?w=600&auto=format&fit=crop&q=60",
    description: "Sunscreen with PA+++"
  },
  {
    id: 9,
    name: "Bed Lamp",
    price: 1499,
    image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=600&auto=format&fit=crop&q=60",
    description: "For your aesthetic room"
  }
];

const SearchResults = ({ onAddToCart }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Results for "{query}"</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="font-bold text-lg">₹{product.price}</p>
                <button
                  onClick={() => onAddToCart(product)}
                  className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;


