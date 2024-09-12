import React from 'react';

const cardData = [
  {
    id: 1,
    price: '$910',
    imageUrl: 'https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Card-Images/h11-tour-carousel-img-2.jpg',
    title: 'Explore and Sailing',
    location: 'Santorini',
  },
  {
    id: 2,
    price: '$910',
    imageUrl: 'https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Card-Images/h11-tour-carousel-img-1-768x1120.jpg?updatedAt=1723375546928',
    title: 'Explore and Sailing',
    location: 'Santorini',
  },
  {
    id: 3,
    price: '$910',
    imageUrl: 'https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Card-Images/h11-tour-carousel-img-2.jpg',
    title: 'Explore and Sailing',
    location: 'Santorini',
  },
  {
    id: 4,
    price: '$910',
    imageUrl: 'https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Card-Images/h11-tour-carousel-img-1-768x1120.jpg?updatedAt=1723375546928',
    title: 'Explore and Sailing',
    location: 'Santorini',
  },
  {
    id: 5,
    price: '$910',
    imageUrl: 'https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Card-Images/h11-tour-carousel-img-2.jpg',
    title: 'Explore and Sailing',
    location: 'Santorini',
  },
  // Add more card objects here
];

const CardComponent = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <h2 className='text-4xl text-orange-500 text-center pb-10 font-playfair italic font-bold '>Featured Destinations</h2>
      <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2'>
        {cardData.map((card) => (
          <div key={card.id} className="bg-cover bg-no-repeat  hover:scale-95 transition-all duration-300 " style={{ backgroundImage: `url(${card.imageUrl})` }}>
            <p className='bg-black bg-opacity-10 pt-4 pl-8 text-2xl text-white font-Montserrat font-bold'>{card.price}</p>
            <div className='pl-8 pb-4 pt-52 bg-black bg-opacity-10'>
              <p className='font-playfair  w-[90%] italic text-xl font-bold text-white'>{card.title}</p>
              <p className='font-Montserrat text-2xl text-white font-bold'>{card.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;