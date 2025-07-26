// Example: src/components/Men.jsx
import React from 'react';
import Footer from './Footer';

const Men = () => {
  const categories = [
    { title: 'T-shirts', image: 'https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbiUyMHRzaGlydHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Shirts', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwc2hpcnRzfGVufDB8fDB8fHww' },
    { title: 'Jeans', image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGplYW5zfGVufDB8fDB8fHww' },
    { title: 'Jackets', image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwamFja2V0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Hoodies', image: 'https://images.unsplash.com/photo-1539572511325-71494a030b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGhvb2RpZXN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Co-ords', image: 'https://m.media-amazon.com/images/I/81YYUQK-2dL._AC_UL480_FMwebp_QL65_.jpg' },
    { title: 'Pants', image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwJTIwcGFudHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Shorts', image: 'https://images.unsplash.com/photo-1617952236317-0bd127407984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMCUyMHNob3J0c3xlbnwwfHwwfHx8MA%3D%3D' },
  ];

  return (
    <div>
     

      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
          alt="Men Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Men's Categories</h2>
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

export default Men;