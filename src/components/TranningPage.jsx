import React from "react";
import ProfessionalFeaturedCourses from "./FeaturedCourses";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TranningPage = () => {
  const whatsappNumber = "917894341725"; // Your Meta API WhatsApp number (without +)

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Numlock IT Solutions <span className="text-pink-500">Training</span>
        </motion.h1>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Join our hands-on courses and become an expert in laptop, MacBook, and Dell hardware repairs. 
          Suitable for beginners and professionals alike.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to={`https://wa.me/${whatsappNumber}?text= I want to Enroll`}
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-md text-lg hover:bg-pink-600 transition"
          >
            Contact Us to Enroll
          </Link>
        </motion.div>
      </div>

      {/* Featured Courses Section */}
      <div className="max-w-7xl mx-auto px-6">
        <ProfessionalFeaturedCourses />
      </div>

      {/* CTA Section */}
      <div className="text-center py-16">
        <motion.p
          className="text-xl sm:text-2xl text-gray-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to start your training journey?
        </motion.p>
        <Link
          to={`https://wa.me/${whatsappNumber}?text= I want to Enroll`}
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg hover:bg-indigo-700 transition"
        >
          Contact Now
        </Link>
      </div>
    </section>
  );
};

export default TranningPage;
