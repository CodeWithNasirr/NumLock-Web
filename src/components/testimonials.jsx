import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    feedback:
      "Amazing experience! They fixed my desktop faster than I expected, and their customer service was top-notch. Definitely my go-to for computer repairs.",
    imgSrc: "images/Happy_Customer/happy_cus1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    feedback:
      "Amazing experience! They fixed my desktop faster than I expected, and their customer service was top-notch. Definitely my go-to for computer repairs.",
    imgSrc: "images/Happy_Customer/happy_cus2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-t from-blue-50 to-white">
      <div className="text-center mb-10">
        <motion.h3
          className="text-2xl uppercase sm:text-[5vw] tracking-tight prata-regular text-amber-700 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Happy Customers
        </motion.h3>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="w-full rounded-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Left Image Section */}
                <div className="w-full h-full md:h-auto">
                  <img
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Feedback Section */}
                {/* <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 mb-3">{testimonial.role}</p>
                  <p className="text-gray-600">{testimonial.feedback}</p>
                </div> */}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
