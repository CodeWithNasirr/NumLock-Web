import React from "react";
import { assest } from "../assets/assets";
import { motion } from "framer-motion";
const OurInsights = () => {
  const insights = [
    { value: "18,000+", label: "Devices Repaired" },
    { value: "12,000+", label: "Gadgets Repaired" },
    { value: "30,000+", label: "Happy Clients" },
    { value: "4.5+", label: "Users Rating" },
  ];

  const brands = [ assest.acer,
    assest.apple,
    assest.asus,
    assest.dell,
    assest.google,
    assest.hp,
    assest.levono,
    assest.microsoft,
    assest.motorola,
    assest.msi,
    assest.oppo,
    assest.Realme,
    assest.samsung,
    assest.toshiba,
    assest.vivo,
    assest.avita,
    assest.iball,
    assest.MI,
    assest.oneplus,
    assest.poco,
    assest.honor,
    assest.nokia,
    assest.infinix,
    assest.nothing,];

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {insights.map((item, index) => (
          <div key={index} className="insight-box bg-white p-6 shadow-md rounded-xl">
            <p className="text-3xl font-bold text-blue-600">{item.value}</p>
            <span className="text-gray-700 text-lg">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="">
        <h4 className="text-xl font-semibold text-gray-900 mb-6">
          Trusted by 30,000+ Happy Customers and Major Brands since 2000.
        </h4>
        <div className="w-full overflow-hidden bg-gray-100 py-4 relative">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}  
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        
        {[...brands, ...brands].map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt="brand logo"
            className="w-20 h-20 object-contain"
          />
        ))}
      </motion.div>
    </div>
      </div>
    </section>
  );
};

export default OurInsights;
