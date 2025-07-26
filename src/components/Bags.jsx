import React from 'react';
import Footer from './Footer';

const Bags = () => {
  const categories = [
    { title: 'Tote Bags', image: 'https://images.unsplash.com/photo-1576695139696-e053aae84148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D' },
    { title: 'Backpacks', image: 'https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2twYWNrc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Handbags', image: 'https://images.unsplash.com/photo-1597358371607-5987dd7da3d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGJhZ3N8ZW58MHx8MHx8fDA%3D' },
    { title: 'Clutches', image: 'https://tse1.mm.bing.net/th?id=OIP.t-K1w7StfloNHxsE6GhRygHaHa&pid=Api&P=0&h=220' },
    { title: 'Laptop Bags', image: 'https://plus.unsplash.com/premium_photo-1661598213264-9b708f59d793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwYmFnc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Sling Bags', image: 'https://media.istockphoto.com/id/2147670644/photo/brown-colour-leather-woman-handbag.jpg?s=612x612&w=0&k=20&c=4kRDTM5Wzv_GdUzlY5BOnrkGIjH2Zmx8QygGnM8UNmQ=' },
    { title: 'Duffel Bags', image: 'https://media.istockphoto.com/id/479390657/photo/woman-handbag.jpg?s=612x612&w=0&k=20&c=WPbM4sn37EKCzv_ryTrB3Ahxl67vxgzMrshJGWkIouo=' },
    { title: 'Messenger Bags', image: 'https://tse2.mm.bing.net/th?id=OIP.2wtrg6X7U5QddI5kJLlfIQHaHa&pid=Api&P=0&h=220' }
  ];

  return (
    <div>

      
      {/* Hero Banner */}
      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://media.istockphoto.com/id/1395543589/photo/different-stylish-womans-bags-on-light-grey-background.jpg?s=612x612&w=0&k=20&c=0Xghd73CoWivFxkYdCVcYHSW0JlGYZQxXSzm36IljZk="
          alt="Bags Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Discover Bag Styles</h2>
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

export default Bags;
