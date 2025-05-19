import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import API_BASE_URL from "../../config";
import { toast } from 'react-toastify'


const Modal = ({ isOpen, onClose, deviceName, brandname }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    device_name: deviceName || "",
    brand_name: brandname || "",
    device_issue: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/book-service/`, formData); // Adjust base URL if needed
      toast.success("Service booked successfully!");
      onClose(); // Close modal
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-md md:max-w-lg rounded-lg shadow-lg p-6"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-400 pb-3">
              <h4 className="text-lg font-semibold text-gray-700">Book Service for {deviceName}</h4>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className="mt-4 space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full border p-2 rounded outline-none border-gray-400"
                placeholder="Enter Your Name"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                className="w-full border p-2 rounded outline-none border-gray-400"
                placeholder="Enter Your Mobile"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full border p-2 rounded outline-none border-gray-400"
                placeholder="Enter Your Email"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="device_name"
                  value={formData.device_name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border p-2 rounded outline-none border-gray-400"
                  placeholder="Device Name"
                />
                <input
                  name="brand_name"
                  value={formData.brand_name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border p-2 rounded outline-none border-gray-400"
                  placeholder="Brand Name"
                />
              </div>

              <input
                name="device_issue"
                value={formData.device_issue}
                onChange={handleChange}
                type="text"
                className="w-full border p-2 rounded outline-none border-gray-400"
                placeholder="Device Issue"
              />
            </div>

            {/* Footer */}
            <div className="mt-5 flex justify-between">
              <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
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
