import React from "react";
import { Helmet } from "react-helmet";

const DellLaptopService = () => {
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <Helmet>
        <title>Dell Laptop Service Center in Bhubaneswar | Numlock IT Solutions</title>
        <meta
          name="description"
          content="Looking for a reliable Dell Laptop Service Center in Bhubaneswar? Numlock IT Solutions offers expert Dell repairs, genuine parts & quick service."
        />
      </Helmet>

      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-700 mb-4 ">
          Dell Laptop Service Center in Bhubaneswar
        </h1>
        <p className="text-lg text-gray-600">
          Professional Dell Laptop Repairs | Certified Technicians | Affordable Pricing
        </p>
      </section>

      <section className="space-y-6 text-gray-700">
        <p>
          Numlock IT Solutions is your go-to destination for expert Dell laptop repairs in
          Bhubaneswar. We specialize in diagnosing and fixing both hardware and software
          issues, ensuring your device gets back to peak performance quickly and affordably.
        </p>
        <p>
          Whether you own a Dell Inspiron, XPS, Latitude, or Vostro model, our experienced
          technicians provide prompt and professional service using genuine Dell parts. From
          screen replacement, battery issues, and overheating problems to motherboard-level
          repairs, we've got you covered.
        </p>
        <p>
          We understand how critical your laptop is for your business, studies, or personal use.
          That’s why we offer same-day diagnostics and quick turnarounds to minimize your
          downtime. Trust us to handle your Dell laptop with care, precision, and commitment
          to quality.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 pt-6">Why Choose Numlock IT Solutions?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Certified Dell Laptop Repair Experts</li>
          <li>Original spare parts with warranty</li>
          <li>Quick service with same-day delivery for common issues</li>
          <li>Free diagnosis and transparent pricing</li>
          <li>Customer-centric service and support</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 pt-6">Our Dell Laptop Services Include:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Screen Replacement</li>
          <li>Battery & Charger Repair</li>
          <li>Keyboard & Touchpad Issues</li>
          <li>Motherboard & Chip-level Repair</li>
          <li>Data Recovery & OS Installation</li>
          <li>Fan, Speaker, and Hinge Repair</li>
        </ul>

        <div className="pt-8">
          <img
            src="/images/laptop-repair.png"
            alt="Dell Laptop Repair"
            className="rounded-xl shadow-md w-full max-w-3xl mx-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 pt-10 text-center">
          Book Your Dell Laptop Repair Today!
        </h2>
        <p className="text-center">
          Visit our center or call us to schedule your Dell laptop service. Let Numlock IT
          Solutions bring your device back to life.
        </p>
        <div className="flex justify-center pt-4">
          <a
            href="/contact"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default DellLaptopService;
