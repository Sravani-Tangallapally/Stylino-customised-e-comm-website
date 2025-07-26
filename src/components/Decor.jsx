import React from 'react';
import Footer from './Footer';

const Decor = () => {
  const categories = [
    { title: 'Wall Art', image: 'https://plus.unsplash.com/premium_photo-1706152482918-b3fb39dbd4b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGFydHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Lamps', image: 'https://plus.unsplash.com/premium_photo-1670914333012-f4093b108aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFtcHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Cushions', image: 'https://images.unsplash.com/photo-1553114552-c4ece3a33c93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VzaGlvbnN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Rugs', image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVnc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Clocks', image: "https://images.unsplash.com/photo-1606674556490-c2bbb4ee05e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvY2tzfGVufDB8fDB8fHww"},
    { title: 'Mirrors', image: 'https://images.unsplash.com/photo-1595455967759-5f1356993e53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlycm9yc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Vases', image: 'https://plus.unsplash.com/premium_photo-1689247409762-d6c16409b9fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFzZXN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Candles', image: 'https://images.unsplash.com/photo-1613068431228-8cb6a1e92573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbmRsZXN8ZW58MHx8MHx8fDA%3D' }
  ];

  return (
    <div>

      {/* Hero Banner */}
      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1558882224-dda166733046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVjb3J8ZW58MHx8MHx8fDA%3D"
          alt="Decor Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decor Categories */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Home Decor</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto overflow-hidden rounded-full border-2 border-gray-300">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
              </div>
              <p className="mt-2 font-medium">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Decor;
