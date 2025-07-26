import React from 'react';

import Footer from './Footer';

const Kids = () => {
  const categories = [
    { title: 'T-Shirts', image: 'https://media.istockphoto.com/id/152994119/photo/small-boy-stretches-his-hands.jpg?s=612x612&w=0&k=20&c=fWpDauCTFx7Hi3ODsfy4jErcoNl2rDUcHJ-F1GkmSGg=' },
    { title: 'Dresses', image: 'https://media.istockphoto.com/id/961027614/photo/funny-child-girl-fashionista-in-big-mothers-shoes-on-colored-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ct_IHdKQEoDVLkUk1xDUm7HoYvzpBSH0k9bCFgNW5GU=' },
    { title: 'Shorts', image: 'https://plus.unsplash.com/premium_photo-1724859689407-5d93d5220be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHMlMjAlMjBzaG9ydHN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Jackets', image: 'https://plus.unsplash.com/premium_photo-1698305283034-6fc20d4bf946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtpZHMlMjAlMjBqYWNrZXRzfGVufDB8fDB8fHww' },
    { title: 'Jeans', image: 'https://images.unsplash.com/photo-1539154308435-ca11e00f2e66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMCUyMGplYW5zfGVufDB8fDB8fHww' },
    { title: 'Ethnic Wear', image: 'https://tse1.mm.bing.net/th?id=OIP.lNDdOACSYoemLEFhabQD8QHaLG&pid=Api&P=0&h=220' },
    { title: 'Accessories', image: 'https://tse2.mm.bing.net/th?id=OIP.W1cR4PYuHOd0e9RthFb0VwHaHa&pid=Api&P=0&h=220' }
  ];

  return (
    <div>
     

      {/* Hero Banner */}
      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1707816501555-12ed2a549080?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          alt="Kids Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Shop for Kids</h2>
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

export default Kids;
