import React from 'react';

import Footer from './Footer';

const Jewellery = () => {
  const categories = [
    { title: 'Necklaces', image: 'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lY2tsYWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Earrings', image: 'https://images.unsplash.com/photo-1615197419962-90f21da0956d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcnJpbmdzfGVufDB8fDB8fHww' },
    { title: 'Bracelets', image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyYWNlbGV0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { title: 'Rings', image: 'https://images.unsplash.com/photo-1542990254-85e6a9a2ef92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJpbmdzfGVufDB8fDB8fHww' },
    { title: 'Bangles', image: 'https://images.unsplash.com/photo-1601482438629-346a273776af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZ2xlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Anklets', image: 'https://plus.unsplash.com/premium_photo-1673896633781-f7c5920870e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5rbGV0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Chokers', image: 'https://images.unsplash.com/photo-1535317804153-d53d0e693dae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNob2tlcnN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Studs', image: 'https://media.istockphoto.com/id/1278587344/photo/white-pearl-earring-with-prong-studded-diamond-halo-earring-in-yellow-gold.webp?a=1&b=1&s=612x612&w=0&k=20&c=YQ33sCxG_KdlFHBo-i9eHaWlQnJtSGIZxnAHNFI0BXg=' },
  ];

  return (
    <div>
    

      {/* Hero Banner */}
      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1740158248922-f5547e77b4fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          alt="Jewellery Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Jewellery Categories */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Jewellery Categories</h2>
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

export default Jewellery;
