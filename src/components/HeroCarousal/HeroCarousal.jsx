import React, { useState, useEffect } from "react";

const CarouselHero = () => {
  const images = [
    "https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Slider-Images/Slider-image5.png",
    "https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Slider-Images/Slider-image7.png",
    "https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Slider-Images/Slider-image4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* HERO CAROUSEL */}
      <div className="relative w-[92%] lg:w-[87%] mx-auto  h-[250px] lg:h-[500px] md:h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="grid gap-3 py-6 mx-auto w-[92%] lg:w-[87%] font-[Montserrat] grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          placeholder="Where to?"
          className="px-4 text-sm py-4 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-gray-500"
        />
        <input
          type="text"
          placeholder="When?"
          className="px-4 text-sm py-4 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-gray-500"
        />
        <input
          type="text"
          placeholder="Travel type"
          className="px-4 text-sm py-4 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-gray-500"
        />
        <button className="px-6 py-2 font-semibold text-white bg-orange-500 rounded-sm hover:bg-gray-600 focus:outline-none lg:col-span-1 lg:row-span-1">
          FIND NOW
        </button>
      </div>
    </>
  );
};

export default CarouselHero;
