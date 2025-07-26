// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Footer from './Footer'; 

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = React.useState(0);

//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
//       title: "Summer Collection",
//       description: "Discover our latest summer styles"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
//       title: "Autumn Essentials",
//       description: "Get ready for the season"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200",
//       title: "Accessories",
//       description: "Complete your look"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   React.useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="space-y-12">
//       {/* Hero Carousel */}
//       <div className="relative h-[500px] overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-40" />
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center text-center">
//               <div className="text-white">
//                 <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
//                 <p className="text-xl mb-8">{slide.description}</p>
//                 <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* Featured Categories */}
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Women's Fashion",
//               image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=500"
//             },
//             {
//               title: "Men's Collection",
//               image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&q=80&w=500"
//             },
//             {
//               title: "Accessories",
//               image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=500"
//             }
//           ].map((category, index) => (
//             <div key={index} className="relative group cursor-pointer">
//               <div className="h-96 overflow-hidden rounded-lg">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                   <h3 className="text-white text-2xl font-bold">{category.title}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '/src/components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

// ✅ FIXED PATH




const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const navigate = useNavigate();


  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
      title: "Summer Collection",
      description: "Discover our latest summer styles"
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
      title: "Autumn Essentials",
      description: "Get ready for the season"
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200",
      title: "Accessories",
      description: "Complete your look"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
                <button
                  onClick={() => navigate('/shop')} // ✅ This does the redirect
                  className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Upto 10% off on New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Graphics",
              image: "https://i.pinimg.com/originals/28/c3/0d/28c30dc608f841145506ef4d8c3cd2c8.jpg"
            },
            {
              title: "New Arrivals",
              image: "https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
            },
            {
              title: "Accesories",
              image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=500"
            }
          ].map((category, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="h-96 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer Added Here */}
      <Footer />
    </div>
  );
};

export default Home;
