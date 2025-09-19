const ServiceCenterSection = () => {
  const images = [
    "https://i.ibb.co/KzqB1vK6/20250919-153254-1.jpg",
    "https://i.ibb.co/KcQRkyxq/20250919-153305-1.jpg",
    "https://i.ibb.co/ZznHZ000/20250919-153336-1.jpg",
    "https://i.ibb.co/RGG89Vfc/20250919-153354-1.jpg",
    "https://i.ibb.co/DfFGPCfW/20250919-153313.jpg",
    "https://i.ibb.co/5pD6n3C/20250919-153239.jpg",
  ];

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

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={src}
                alt={`Service Center ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCenterSection;
