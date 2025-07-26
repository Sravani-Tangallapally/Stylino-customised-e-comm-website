import React from 'react';
import Footer from '/src/components/Footer.jsx'
import { Link } from 'react-router-dom';



const categories = [
  { title: "Women", image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljJTIwb2YlMjBhJTIwd29tYW58ZW58MHx8MHx8fDA%3D" },
  { title: "Men", image: "https://plus.unsplash.com/premium_photo-1727942416359-c7c97c87a324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljJTIwb2YlMjBhJTIwbWFuJTIwZm9yJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" },
  { title: "Kids", image: "https://plus.unsplash.com/premium_photo-1707816501241-7ca32b155105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGljJTIwb2YlMjBhJTIwa2lkcyUyMGZvciUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
  { title: "Shoes", image: "https://media.istockphoto.com/id/491603822/photo/pair-of-green-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=eqxHqbE3bdut9Y2s8WbdO4HhLL8b1ggRwrb_xztiGU4="},
  { title: "Beauty", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww" },
  { title: "Decor", image: "https://images.unsplash.com/photo-1513135724701-30343e546328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVjb3IlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Bags", image: "https://images.unsplash.com/photo-1632282003890-020318a49e62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZCUyMGJhZ3N8ZW58MHx8MHx8fDA%3D" },
  { title: "Jewellery", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5fGVufDB8fDB8fHww" },
];
const topProducts = [
  {
    title: "Adidas ",
    image:  "https://images.unsplash.com/photo-1620794341491-76be6eeb6946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRpZGFzJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D",
    description:  "min 30% off",
  },
  {
    title: "Libas Kurtas",
    image: "https://images.milledcdn.com/2022-04-21/9jBzwvwrTCNUEh_b/c@2x.jpg",
    description: "min 50% off",
  },
  {
    title: "Nike Air Max",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pa2UlMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D",
    description: "min 25% off",
  },
  {
    title: "Michael Kors ",
    image: "https://tse1.mm.bing.net/th?id=OIP.DhZx3uwp9Z_UlxkuuAPV-AHaJg&pid=Api&P=0&h=220",
    description: "min 10% off",
  },
  {
    title: "Chanel Beauty",
    image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd1Y2NpfGVufDB8fDB8fHww",
    description: "min 75% off",
  },
  {
    title: "Puma",
    image: "https://images.unsplash.com/photo-1562275001-eba9b7e2462f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "min 30% off",
  },
];


// const Categories = () => {
//   return (
//     <>
//       {/* Category Grid */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           What are you shopping for today?
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
//           {categories.map((cat, idx) => (
//             <div key={idx} className="text-center">
//               <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto overflow-hidden rounded-full border-2 border-gray-300 hover:scale-105 transition-transform">
//                 <img
//                   src={cat.image}
//                   alt={cat.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <p className="mt-2 text-sm font-medium">{cat.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     {/* Product Carousel */}
//     <div className="container mx-auto px-4 pb-12">
//   <h3 className="text-2xl font-semibold mb-6">GRAND GLOBAL BRANDS</h3>
//   <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
//     {topProducts.map((product, i) => (
//       <div
//         key={i}
//         className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden"
//       >
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-3">
//           <p className="font-medium">{product.title}</p>
//           <p className="text-sm text-gray-600">{product.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// <Footer />

//     </>
//   );
// };

// export default Categories;

const Categories = () => {
  return (
    <>
      {/* Category Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">What are you shopping for today?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
          {categories.map((cat, idx) => {
            const categoryContent = (
              <div className="text-center cursor-pointer">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto overflow-hidden rounded-full border-2 border-gray-300 hover:scale-105 transition-transform">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-sm font-medium">{cat.title}</p>
              </div>
            );

            return (
              <Link
                to={`/categories/${cat.title.toLowerCase().replace(/\s/g, '')}`}
                key={idx}
              >
                {categoryContent}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Product Carousel */}
      <div className="container mx-auto px-4 pb-12">
        <h3 className="text-2xl font-semibold mb-6">GRAND GLOBAL BRANDS</h3>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {topProducts.map((product, i) => (
            <div key={i} className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-3">
                <p className="font-medium">{product.title}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Categories;

