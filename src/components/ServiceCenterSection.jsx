import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServiceCenterSection = () => {
  const images = [
    "https://i.ibb.co/KzqB1vK6/20250919-153254-1.jpg",
    "https://i.ibb.co/KcQRkyxq/20250919-153305-1.jpg",
    "https://i.ibb.co/ZznHZ000/20250919-153336-1.jpg",
    "https://i.ibb.co/RGG89Vfc/20250919-153354-1.jpg",
    "https://i.ibb.co/DfFGPCfW/20250919-153313.jpg",
    "https://i.ibb.co/5pD6n3C/20250919-153239.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-indigo-600">Service Center</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a glimpse inside our state-of-the-art service center — equipped
            with advanced tools, clean workstations, and certified technicians
            ensuring your devices are in safe hands.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={src}
                  alt={`Service Center ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-indigo-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCenterSection;
