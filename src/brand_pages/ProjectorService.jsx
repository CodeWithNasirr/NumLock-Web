import React from "react";
import { Helmet } from "react-helmet";
import { assest } from "../assets/assets";
const ProjectorService = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Projector Service Center in Bhubaneswar | Numlock IT Solutions</title>
        <meta
          name="description"
          content="Get fast and affordable projector repair services in Bhubaneswar. Numlock IT Solutions offers expert projector servicing for Epson, BenQ, Sony, and more."
        />
        <meta
          name="keywords"
          content="Projector service center Bhubaneswar, Projector repair near me, Epson projector service, BenQ projector repair, Numlock IT Solutions"
        />
      </Helmet>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-amber-700 text-center mb-4">
          Projector Service Center in Bhubaneswar
        </h1>
        {/* <div className="relative w-full h-full md:h-full rounded-xl mb-6 shadow-lg">
          <img
            src={assest.banner_data_recovery} // replace with your banner path
            alt="Laptop Service Banner"
            className="w-full h-full object-cover"
          />
        
        </div> */}

        <p className="text-gray-700 mb-4">
          Searching for a reliable <strong>projector repair center in Bhubaneswar</strong>? At <strong>Numlock IT Solutions</strong>, we provide professional projector servicing for all leading brands including Epson, BenQ, Sony, Panasonic, LG, ViewSonic, and more. Whether your projector is used for business, education, home theatre, or events — we ensure expert diagnostics and quick turnaround time.
        </p>

        <p className="text-gray-700 mb-4">
          Our experienced technicians handle everything from lamp replacement to motherboard repair, optical lens cleaning, and HDMI port issues. We use genuine spare parts and provide warranty-backed services to ensure customer satisfaction.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Why Choose Numlock IT Solutions for Projector Repairs?
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Service for all major projector brands and models</li>
          <li>On-site diagnosis and repair available for institutions</li>
          <li>Affordable projector lamp and lens replacement</li>
          <li>Pickup and drop service within Bhubaneswar</li>
          <li>Warranty on replaced parts and labor</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Common Projector Issues We Fix:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Projector not turning on or overheating</li>
          <li>No signal or HDMI/VGA connectivity issues</li>
          <li>Image distortion or color fading</li>
          <li>Dead pixels or focus issues</li>
          <li>Lamp replacement and fan noise problems</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Trusted by Educational Institutions, Businesses & Individuals
        </h2>
        <p className="text-gray-700 mb-4">
          We are one of Bhubaneswar’s most trusted projector service providers, supporting smart classrooms, conference halls, training centers, and more. Our customized AMC (Annual Maintenance Contracts) for institutions ensure long-term projector health and reduced downtime.
        </p>

        <p className="text-gray-700 font-medium">
          📞 Contact Numlock IT Solutions today for reliable projector repairs in Bhubaneswar. Let us bring your visuals back to life!
        </p>
      </div>
    </div>
  );
};

export default ProjectorService;
