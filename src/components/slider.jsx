import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShopContext } from "../context/ShopContext";

const teamMembers = [
  {
    name: "Our Expert Team",
    role: "Engineers • Technicians",
    description:
      "Meet the passionate experts behind Numlock IT Solutions — a dedicated team of engineers, skilled technicians, and visionary co-founders working tirelessly to deliver reliable, high-quality laptop repair services. Their expertise and commitment power the heart of our company.",
    img: "/images/Team.jpg"
  },
   {
    name: "Somoyo",
    role: "Founder & CEO • Numlock IT Solutions",
    description:
      "Somoyo founded Numlock IT Solutions with a vision to provide professional, transparent, and reliable laptop repair services across Odisha. With strong leadership and customer-first values, he continues to guide the team toward innovation and growth.",
    img: "/images/founder1.jpg"
  },
  // {
  //   name: "Amit Verma",
  //   role: "Lead Chip-Level Engineer",
  //   description:
  //     "Amit is our expert in advanced motherboard and chip-level repairs, solving complex hardware issues.",
  //   img: "https://www.apple.com/careers/images/teams/related/hardware/desktop.jpg",
  // },
  {
    name: "Awards & Recognition",
    role: "Excellence • Innovation",
    description:
      "Our team has been honored with multiple awards for outstanding service, innovation, and customer satisfaction in the laptop repair industry. These recognitions highlight our dedication to quality and trust.",
    img: "/images/awards1.jpg"
  },
  {
    name: "Awards & Recognition",
    role: "Excellence • Innovation",
    description:
      "Our team has been honored with multiple awards for outstanding service, innovation, and customer satisfaction in the laptop repair industry. These recognitions highlight our dedication to quality and trust.",
    img: "/images/awards2.jpg"
  },
  {
    name: "Awards & Recognition",
    role: "Excellence • Innovation",
    description:
      "Our team has been honored with multiple awards for outstanding service, innovation, and customer satisfaction in the laptop repair industry. These recognitions highlight our dedication to quality and trust.",
    img: "/images/awards3.jpg"
  }
 
];

const Slider = () => {
  const { visible } = useContext(ShopContext);

  return (
    <div className="bg-gray-100 p-6 shadow-lg border border-gray-300">
      {!visible && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop
          pagination={{ clickable: true }}
          className="w-full rounded-xl"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-6 p-6">
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full max-w-md rounded-2xl shadow-md object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-4xl font-bold text-amber-700">{member.name}</h2>
                  <h3 className="mt-2 text-xl text-gray-600">{member.role}</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
