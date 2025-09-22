import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users } from "lucide-react"; // optional icons

const CareersCTA = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-white py-16 px-6 text-center rounded-xl shadow-lg my-16 relative overflow-hidden">
      {/* Banner Image Above Text */}
      <div className="mb-8">
        <img
          src="https://i.ibb.co/4RJ9gtLc/job.jpg" // replace with your banner
          alt="Careers Banner"
          className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
        />
      </div>


      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center gap-2 items-center mb-4">
          <Users className="w-6 h-6 text-indigo-600" />
          <span className="text-indigo-600 font-semibold uppercase">
            Join Our Team
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Build Your Career with Numlock IT Solutions
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          We are hiring talented individuals for Laptop Repair, Customer Support, Field Service, and more.
          Take the first step to start your career with us today!
        </p>
        <Link
          to="/careers"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition"
        >
          View Careers & Apply
        </Link>
      </motion.div>
    </section>
  );
};

export default CareersCTA;
