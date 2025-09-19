import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Melissa Hart",
//     role: "Business Owner",
//     feedback:
//       "I had a critical issue with my laptop, and their quick and efficient service saved me! Highly recommend them for any computer repair needs.",
//     imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     name: "Giana Franci",
//     role: "Freelance Designer",
//     feedback:
//       "Amazing experience! They fixed my desktop faster than I expected, and their customer service was top-notch. Definitely my go-to for computer repairs.",
//     imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Ryan Donin",
//     role: "Software Developer",
//     feedback:
//       "I had a major issue with my PC crashing, and they resolved it smoothly. They truly know their stuff and provide reliable service!",
//     imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     name: "Maria Baptista",
//     role: "Teacher",
//     feedback:
//       "Their team helped me recover lost data from my hard drive. I thought I had lost it forever, but they saved the day. Highly grateful!",
//     imgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
//   },
//   {
//     name: "Maren Press",
//     role: "Photographer",
//     feedback:
//       "Excellent service! They fixed my laptop screen at a very reasonable price. The staff is friendly and knowledgeable. Highly recommended!",
//     imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
//   },
//   {
//     name: "Jakob Press",
//     role: "IT Specialist",
//     feedback:
//       "Fast and reliable! They resolved my network issues and optimized my computer's performance. Couldn't be happier with their service!",
//     imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
// ];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Business Owner",
    feedback:
      "I had a critical issue with my laptop, and their quick and efficient service saved me! Highly recommend them for any computer repair needs.",
    imgSrc: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    feedback:
      "Amazing experience! They fixed my desktop faster than I expected, and their customer service was top-notch. Definitely my go-to for computer repairs.",
    imgSrc: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohan Kumar",
    role: "Software Developer",
    feedback:
      "I had a major issue with my PC crashing, and they resolved it smoothly. They truly know their stuff and provide reliable service!",
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ananya Iyer",
    role: "Teacher",
    feedback:
      "Their team helped me recover lost data from my hard drive. I thought I had lost it forever, but they saved the day. Highly grateful!",
    imgSrc: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Neha Verma",
    role: "Photographer",
    feedback:
      "Excellent service! They fixed my laptop screen at a very reasonable price. The staff is friendly and knowledgeable. Highly recommended!",
    imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Vikram Singh",
    role: "IT Specialist",
    feedback:
      "Fast and reliable! They resolved my network issues and optimized my computer's performance. Couldn't be happier with their service!",
    imgSrc: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-t from-blue-50 to-white">
      <div className="text-center mb-10">
        {/* Animated heading */}
        <motion.h3
          className="text-2xl uppercase sm:text-[5vw] tracking-tight prata-regular text-amber-700 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Happy Customers
        </motion.h3>

        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          What our <span className="text-amber-700">Customer</span> Say
        </motion.h2>

        <motion.p
          className="text-gray-500 mt-2 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We take pride in providing the best computer repair services.
          Here's what our satisfied customers have to say about us!
        </motion.p>
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center flex-col items-center mb-4">
                  <img
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mb-2"
                  />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center">
                  {testimonial.feedback}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
