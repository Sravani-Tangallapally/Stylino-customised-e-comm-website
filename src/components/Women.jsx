import React from 'react';
import Footer from './Footer';

const Women = () => {
  const categories = [
    { title: 'Dresses', image: 'https://media.istockphoto.com/id/1397185406/photo/portrait-of-woman-smiling-against-wall-with-palm-tree-shade.webp?a=1&b=1&s=612x612&w=0&k=20&c=u-KmGiwJG4H40WaMrVICw_CbMm9hdtBIrbxw2bbD0hc=' },
    { title: 'Tops', image: 'https://media.istockphoto.com/id/1972105758/photo/photo-of-young-women-in-winter-wear-standing-on-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=uR-Fnzk6H3CskZLK9x06K4OYhcUjOYP74Zho4UQIZ9M=' },
    { title: 'Pants', image: 'https://media.istockphoto.com/id/869119436/photo/fashion.jpg?s=612x612&w=0&k=20&c=tJJvZ_aaswk6c9bcTNWGfHQaTsn4Itl8Xku3kvhEVhA=' },
    { title: 'Jeans', image: 'https://media.istockphoto.com/id/1661477182/photo/autumn-style-of-clothing-young-woman-in-stylish-clothes.jpg?s=612x612&w=0&k=20&c=Kov4nPFNA3tEOoiJBqIkcs4tVpGQPXNwRByTHmvqBmA=' },
    { title: 'T-shirts', image: 'https://media.istockphoto.com/id/1395567266/photo/a-young-woman-pointing-at-white-casual-t-shirt-with-fingers-showing-empty-copy-space-for.jpg?s=612x612&w=0&k=20&c=AjY9MgKr31kk2SO4LMpjWa0UtXUUCW_vh4IT0KbjchM=' },
    { title: 'Skirts', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNraXJ0cyUyMGZvciUyMHdvbWFufGVufDB8fDB8fHww' },
    { title: 'Shirts', image: 'https://plus.unsplash.com/premium_photo-1689977492903-bd8d201af5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' },
    { title: 'Co-ords', image: 'https://tse4.mm.bing.net/th?id=OIP.W7k9PMm0BJoZOtXv_o6RdAHaHq&pid=Api&P=0&h=220' }
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Women Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Categories</h2>
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

export default Women;
