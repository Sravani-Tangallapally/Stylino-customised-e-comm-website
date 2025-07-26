import React from 'react';
import Footer from './Footer';

const Beauty = () => {
  const categories = [
    { title: 'Makeup', image: 'https://media.istockphoto.com/id/618635048/photo/make-up-kit.webp?a=1&b=1&s=612x612&w=0&k=20&c=HF2T_5CxQdpk9eXZ-j0qGwN01CSU3PDOfSrXIIm8XMc=' },
    { title: 'Skincare', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlfGVufDB8fDB8fHww' },
    { title: 'Haircare', image: 'https://media.istockphoto.com/id/1290739278/photo/portrait-of-a-young-woman-with-a-beautiful-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=HE8iNpzkC-ByHg3aBLQCtnvxL6EgMzAEfbNlMUv1UZo=' },
    { title: 'Fragrances', image: 'https://plus.unsplash.com/premium_photo-1679106770086-f4355693be1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJhZ3JhbmNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Nail Care', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D' },
    { title: 'Bath & Body', image: 'https://media.istockphoto.com/id/1320677941/photo/body-wash-shampoo-and-conditioner-n-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=_OMLrKobIhyOMu2Zd7js1HfwKTmETwSigZcY8-K4g5w=' },
    { title: 'Tools & Brushes', image: 'https://media.istockphoto.com/id/1390665987/photo/pastel-pink-make-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=9vtBLUYtMYtpF39scyokfO4sqwNeIlED9eekHXZobJ8=' },
    { title: 'Men’s Grooming', image: 'https://media.istockphoto.com/id/1399453703/photo/closeup-of-one-young-indian-man-applying-moisturiser-lotion-to-his-face-while-grooming.webp?a=1&b=1&s=612x612&w=0&k=20&c=P7XMj6ZECD2s-Ffs1PkkQ629yZPFRWY34rltZ1Sd23Y=' }
  ];

  return (
    <div>

      {/* Hero Banner */}
      <div className="h-[400px] w-full overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Beauty Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Beauty Categories */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Explore Beauty Essentials</h2>
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

export default Beauty;
