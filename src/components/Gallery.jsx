import { useState } from "react";

export default function Gallery() {
  const images = [
    {
      src: "https://agadiractivities.com/wp-content/uploads/2022/02/Quad-Biking-agadir.jpeg",
      title: "Quad Biking in Agadir",
      description: "Experience thrilling quad biking adventures across the sandy landscapes of Agadir."
    },
    {
      src: "https://agadiractivities.com/wp-content/uploads/2022/02/742255_quads-dubai-870x555-1.jpg",
      title: "Desert Quad Ride",
      description: "Ride powerful quad bikes through wide open desert trails and dunes."
    },
    {
      src: "https://agadiractivities.com/wp-content/uploads/2022/02/NAM11a-Quad-Biking-Namib-Desert.jpg",
      title: "Namib Desert Adventure",
      description: "An unforgettable quad biking experience in the iconic Namib Desert."
    },
    {
      src: "https://agadiractivities.com/wp-content/uploads/2022/02/agadir-journey.jpg",
      title: "Agadir Journey",
      description: "Explore the beauty of Agadir on an exciting off-road quad journey."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      
      {/* Main Image */}
      <div className="w-full max-w-3xl">
        <img
          src={images[activeIndex].src}
          className="w-full rounded-lg"
          alt={images[activeIndex].title}
        />

        {/* Description */}
        <div className="mt-3 text-center">
          <h3 className="text-lg font-semibold">
            {images[activeIndex].title}
          </h3>
          <p className="text-gray-600 text-sm">
            {images[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 max-w-3xl gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            onClick={() => setActiveIndex(index)}
            className={`rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 
              ${index === activeIndex ? "ring-2 ring-orange-500" : ""}`}
            alt={img.title}
          />
        ))}
      </div>
    </div>
  );
}
