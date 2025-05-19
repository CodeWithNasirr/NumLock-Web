import {React,useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShopContext } from "../context/ShopContext";
const slides = [
    {
      heading: "Happy Holi!",
      subheading:
        "May this festival of colors bring joy, happiness, and prosperity to your life. Let’s celebrate with love, laughter, and positivity.",
      img: "https://www.spectech.in/images/3.png",
    },
    {
      heading: "Welcome Spring!",
      subheading:
        "Spring is here! Time to bloom with new beginnings and fresh opportunities. Celebrate the season of renewal.",
      img: "https://www.spectech.in/images/2.png",
    },
    {
      heading: "Festive Vibes!",
      subheading:
        "Embrace the festive spirit with love and happiness. Spread positivity and light wherever you go!",
      img: "https://www.spectech.in/images/1.png",
    },
  ];
const Slider = () => {
    const {visible,setVisble} = useContext(ShopContext);
  return (
    <div className=" bg-gray-200 p-6 shadow-lg border border-gray-400">
      {/* Left Empty Div for Styling Purposes */}
      {/* <div className="hidden md:block w-1/6"></div> */}

      {/* Slider Content */}
    {!visible && (
          <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          // navigation
          autoplay={{ delay: 3000 }}
          loop
          className="w-full rounded-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} >
              <div className="flex flex-col md:flex-row justify-between items-center w-full h-full">
              {/* Text Content */}
              <div className="text-center md:text-left md:w-2/5 p-4">
                <h2 className="text-3xl font-bold text-blue-600">{slide.heading}</h2>
                <p className="mt-2 text-gray-700">{slide.subheading}</p>
              </div>
              {/* Image */}
              <div className="w-full md:w-2/5 flex justify-center">
                <img
                  src={slide.img}
                  alt={slide.heading}
                  className="object-cover rounded-lg "
                />
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
