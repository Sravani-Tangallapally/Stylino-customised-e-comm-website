// src/components/Shoes.jsx
import React from 'react';
import Footer from './Footer';

const Shoes = () => {
  const categories = [
    { title: 'Sneakers', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Formal Shoes', image: 'https://media.istockphoto.com/id/172417586/photo/elegant-black-leather-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=zEItpyub1QIwkCRejsQPXnIqYce9o7yRV4zJ0DGEdKE=' },
    { title: 'Sandals', image: 'https://plus.unsplash.com/premium_photo-1676225678979-80df276a983e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Boots', image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vdHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Running Shoes', image: 'https://plus.unsplash.com/premium_photo-1663036305464-5abcd6b7fd18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww' },
    { title: 'Loafers', image: 'https://images.unsplash.com/photo-1631978278971-9afda1670882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9hZmVyc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Heels', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVlbHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Flip Flops', image: 'https://images.unsplash.com/photo-1622920799137-86c891159e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpcCUyMGZsb3BzfGVufDB8fDB8fHww' }
  ];

  return (
    <div>
    
      
      {/* Hero Banner */}
      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJzfGVufDB8fDB8fHww"
          alt="Shoes Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Shoe Styles</h2>
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

export default Shoes;
