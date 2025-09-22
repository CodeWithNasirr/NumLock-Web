import React, { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  "Laptop Repair Technician",
  "Customer Support Executive",
  "Field Service Engineer",
  "Other",
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    city: "",
    jobRole: jobs[0],
  });

  // Update input values
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // On Apply Now
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, qualification, city, jobRole } = formData;

    // Pre-filled WhatsApp message
    const message = `📌 *Job Application - Numlock IT Solutions*\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}\n🎓 Qualification: ${qualification}\n🏙️ City: ${city}\n💼 Applied For: ${jobRole}`;

    // Your company WhatsApp number with country code (example: +91XXXXXXXXXX)
    const whatsappNumber = "917894341725"; // replace with Numlock WhatsApp

    // Redirect to WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-amber-700 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Careers at Numlock IT Solutions
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We welcome everyone — 10th pass, 12th pass, graduates, or from any
          background — to build their career with us. Apply now and start your
          journey with Numlock IT Solutions!
        </p>
      </div>

      {/* Job Application Form */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 border">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Qualification
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="e.g. 10th Pass, 12th Pass, Graduate"
              required
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Job Role</label>
            <select
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-amber-500 outline-none"
            >
              {jobs.map((job, index) => (
                <option key={index} value={job}>
                  {job}
                </option>
              ))}
          
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition"
          >
            Apply Now via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Careers;
