import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa"; // Trophy icon

const achievements = [
  {
    name: "1st Place - YRC Poster Competition",
    description: "Secured 1st place in the Youth Red Cross (YRC) Poster Competition.",
    image: "/image/yrcimage.jpg",  // ✅ Update the correct image path
  },
  {
    name: "Top 10 in Avishkar",
    description: "Ranked in the top 10 out of 650 participants.",
    image: "/image/aimage.jpg",  // ✅ Use public folder path
  },
  {
    name: "2nd Place - Technical Poster Making",
    description: "Secured 2nd place in a competitive poster competition.",
    image: "/image/iimage.JPG",  // ✅ Use correct public folder path
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id="achievements" className="w-full py-20 bg-gray-900 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-10">Achievements</h2>

      {/* Flexbox to Align Cards Side by Side */}
      <div className="flex flex-wrap justify-center gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="w-80 p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-yellow-400/50 transition duration-300 flex flex-col items-center"
          >
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <FaTrophy className="text-yellow-300 text-4xl animate-pulse" />
            </div>

            {/* Clickable Achievement Image */}
            <a href={item.image} target="_blank" rel="noopener noreferrer">
              <img
                className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 cursor-pointer hover:scale-110 transition-transform"
                src={item.image}
                alt={item.name}
              />
            </a>

            {/* Title */}
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">{item.name}</h3>

            {/* Description */}
            <p className="text-gray-300 mt-2 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
