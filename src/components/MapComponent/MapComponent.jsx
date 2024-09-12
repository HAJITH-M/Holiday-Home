import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the FaTimes icon

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: 1, top: "13%", left: "89%", content: "Location 1: Description here" },
    { id: 2, top: "15%", left: "52%", content: "Location 2: Description here" },
    { id: 3, top: "40%", left: "56%", content: "Location 3: Description here" },
    { id: 4, top: "9%", left: "18%", content: "Location 4: Description here" },
    { id: 5, top: "62%", left: "29%", content: "Location 5: Description here" },
    { id: 6, top: "77%", left: "84%", content: "Location 6: Description here" },
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(selectedLocation?.id === location.id ? null : location);
  };

  return (
    <>
      {/* MAP WITH LOCATIONS */}
      <div className="relative w-[94%] lg:w-[90%] mx-auto flex flex-col items-center justify-center py-12">
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
            className=" lg:w-[84%] mx-auto"
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

export default MapComponent;
