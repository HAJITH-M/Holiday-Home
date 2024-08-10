import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // Import the FaTimes icon

const CarouselHero = () => {
  const images = [
    "https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Slider-Images/Slider-image5.png",
    "https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Slider-Images/Slider-image7.png",
    "https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Slider-Images/Slider-image4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: 1, top: "13%", left: "89%", content: "Location 1: Description here" },
    { id: 2, top: "15%", left: "52%", content: "Location 2: Description here" },
    { id: 3, top: "40%", left: "56%", content: "Location 3: Description here" },
    { id: 4, top: "9%", left: "18%", content: "Location 4: Description here" },
    { id: 5, top: "62%", left: "29%", content: "Location 5: Description here" },
    { id: 6, top: "77%", left: "84%", content: "Location 6: Description here" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(selectedLocation?.id === location.id ? null : location);
  };

  return (
    <>
      {/* HERO CAROUSEL */}
      <div className="relative w-[87%] mx-auto h-[500px] overflow-hidden">
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
<div className="grid gap-3 py-6 mx-auto w-[87%] font-[Montserrat] grid-cols-2 lg:grid-cols-4">
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


      {/* MAP WITH LOCATIONS */}
      <div className="relative w-[90%] mx-auto flex flex-col items-center justify-center py-12">
        <h2 className="text-xl text-orange-500 text-center mb-2 font-playfair italic font-bold">
          Modern & Beautiful
        </h2>
        <h1 className="text-5xl font-[Montserrat] font-bold text-center mb-20">
          Explore the World For Yourself
        </h1>
        <div className="relative h-auto">
          <img
            src="https://ik.imagekit.io/k5gvskw6y/Holiday-Home/Map%20image/Map-image.png"
            alt="Map"
            className="lg:w-[83%] mx-auto"
          />
          {locations.map((location) => (
            <button
              key={location.id}
              style={{ top: location.top, left: location.left }}
              className="absolute w-8 h-8 rounded-full bg-gray-900 text-white font-bold flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:bg-gray-600"
              onClick={() => handleLocationClick(location)}
            >
              {selectedLocation?.id === location.id ? (
                <FaTimes className="text-white" />
              ) : (
                location.id
              )}
            </button>
          ))}
          {/* LOCATION MODAL */}
          {selectedLocation && (
            <div
              className="absolute bg-gray-100 p-4 rounded-lg shadow-lg"
              style={{
                top: selectedLocation.top,
                left: `calc(${selectedLocation.left} + 40px)`,
                transform: "translateY(-50%)",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">
                Location {selectedLocation.id}
              </h3>
              <p>{selectedLocation.content}</p>
              <button
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-sm hover:bg-gray-600"
                onClick={() => setSelectedLocation(null)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CarouselHero;
