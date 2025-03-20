import React from "react";
import { FaBars, FaTimes, FaWhatsapp  } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const Modal = ({ isOpen, onClose,deviceName,brandname }) => {
    // if (!isOpen) return null;
    return (
      <AnimatePresence>
      {isOpen && (  
      <motion.div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm  flex items-center justify-center z-50"
       initial={{ opacity: 0 }}  // Start invisible
       animate={{ opacity: 1 }}  // Fade in
       exit={{ opacity: 0 }}  // Fade out
      >
        <motion.div className="bg-white w-full max-w-md md:max-w-lg rounded-lg shadow-lg p-6"
         initial={{ scale: 0.7, opacity: 0 }} // Start small & invisible
         animate={{ scale: 1, opacity: 1 }} // Grow & fade in
         exit={{ scale: 0.7, opacity: 0 }} // Shrink & fade out
         transition={{ duration: 0.4, ease: "easeOut" }} // Smooth transition
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b  border-gray-400 pb-3">
            <h4 className="text-lg font-semibold text-gray-700">Book Service for {deviceName}</h4>
            <button className="text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
              <FaTimes/>
            </button>
          </div>
  
          {/* Modal Body */}
          <div className="mt-4 space-y-4">
            <input
              type="text"
              className="w-full border p-2 rounded outline-none border-gray-400"
              placeholder="Enter Your Name"
            />
  
            <input
              type="text"
              className="w-full border p-2 rounded outline-none  border-gray-400"
              placeholder="Enter Your Mobile!"
            />
  
            <input
              type="email"
              className="w-full border p-2 rounded outline-none  border-gray-400"
              placeholder="Enter Your Email!"
            />
  
            <div className="grid grid-cols-2 gap-3">
              <input
                defaultValue={deviceName}
                type="text"
                className="w-full border p-2 rounded outline-none  border-gray-400"
                placeholder="Device Name!"
              />
              <input
              defaultValue={brandname}
                type="text"
                className="w-full border p-2 rounded outline-none border-gray-400"
                placeholder="Brand Name!"
              />
            </div>
  
            <input
              type="text"
              className="w-full border p-2 rounded outline-none  border-gray-400"
              placeholder="Device Issues!"
            />
  
            {/* <div className="grid grid-cols-2 gap-3">
              <img src="captcha.aspx" alt="Captcha" className="h-16 border" />
              <input
                type="text"
                className="w-full border p-2 rounded  border-gray-400"
                placeholder="Enter Captcha"
              />
            </div> */}
          </div>
  
          {/* Modal Footer */}
          <div className="mt-5 flex justify-between">
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onClose}>
              Submit
            </button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={onClose}>
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
    
      </AnimatePresence>
    );
  };

export default Modal;