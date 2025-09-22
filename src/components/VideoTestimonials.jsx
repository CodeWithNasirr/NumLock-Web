import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const videoTestimonials = [
  {
    name: "Rohit Kumar",
    role: "Small Business Owner",
    videoSrc: "https://www.youtube.com/embed/o733N2qawWE",
    feedback: "Numlock IT Solutions helped me fix my laptop quickly. Great service!",
  },
];

const VideoTestimonials = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-t from-white to-blue-50">
      <div className="text-center mb-10">
        <motion.h3
          className="text-2xl uppercase sm:text-[5vw] tracking-tight prata-regular text-amber-700 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Video Testimonials
        </motion.h3>
      </div>

      <div className="w-full relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          navigation={true} // Enable left/right navigation
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          className="w-full rounded-lg"
        >
          {videoTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Video Section */}
                <div className="relative w-full h-64 bg-black">
                  <iframe
                    className="w-full h-full"
                    src={testimonial.videoSrc}
                    title={testimonial.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Optional Info Section
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                </div> */}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoTestimonials;
