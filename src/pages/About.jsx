import React from 'react';

const AboutUs = () => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-amber-700">
      <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>

      {/* Our Profile */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Profile</h3>
        <p className="leading-7 text-gray-700">
          COMPSENSE was established in 2003 with a mission to provide premium laptop, Apple device, and smartphone repair services across Odisha. 
          We're known for quality repair services, data recovery, and IT hardware sales such as laptops, printers, CCTVs, and more.
          We partner with top brands like Apple, Dell, HP, Lenovo, and Acer to deliver trustworthy services with a smile.
        </p>
      </div>

      {/* Core Management Group */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-blue-600">Our Patners</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-4">
          <h4 className="text-xl font-bold">Somoyo</h4>
          <p className="text-sm text-gray-600">Owner of Numlock</p>
          <p className="mt-2 text-gray-700">Visionary leader and proud owner of Numlock, driving innovation and excellence.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
          <h4 className="text-xl font-bold">SKBWORLD (BASIR)</h4>
          <p className="text-sm text-gray-600">Senior Engineer</p>
          <p className="mt-2 text-gray-700">Over 20+ years of experience, bringing technical mastery and expert solutions to every challenge.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
          <h4 className="text-xl font-bold">SkOfficial</h4>
          <p className="text-sm text-gray-600">Developer of Numlock</p>
          <p className="mt-2 text-gray-700">Creative mind and developer behind Numlock, crafting innovative solutions with passion.</p>
          </div>
        </div>
      </div>

      {/* About Our Training */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">About Our Training</h3>
        <p className="leading-7 text-gray-700">
          We offer chip-level repair training for laptops, desktops, and smartphones. Our training programs empower individuals to fix electronic 
          gadgets at the component level — from motherboard to CPU — promoting self-reliance and skill-building.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
          <p className="leading-7 text-gray-700">
            To become a global leader in IT solutions by constantly innovating, managing resources efficiently, and delivering 
            outstanding customer satisfaction.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
          <p className="leading-7 text-gray-700">
            To provide cost-effective, efficient IT solutions that deliver a lasting and positive experience for our customers.
          </p>
        </div>
      </div>

      {/* Strength & Values */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Strength and Core Competencies</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Customer satisfaction and strong service support</li>
          <li>Innovative approach to solving customer problems</li>
          <li>Quick adoption of new technologies</li>
          <li>Reliable industry relationships</li>
          <li>Flexibility and adaptability to dynamic environments</li>
        </ul>
      </div>

      {/* Core Values */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Core Values</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Integrity:</strong> We act with honesty and fairness.</li>
          <li><strong>Quality:</strong> We deliver what we promise.</li>
          <li><strong>Confidentiality:</strong> We protect our customers' trust and data.</li>
        </ul>
      </div>

      {/* Management Objective */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Management Objective</h3>
        <p className="leading-7 text-gray-700">
          We foster innovation by granting our employees the freedom to think creatively and take ownership of their work.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
