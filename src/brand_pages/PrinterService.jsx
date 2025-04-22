import React from "react";
import { Helmet } from "react-helmet";

const PrinterService = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Printer Service Center in Bhubaneswar | Numlock IT Solutions</title>
        <meta
          name="description"
          content="Looking for a Printer Service Center in Bhubaneswar? Numlock IT Solutions offers expert printer repair for HP, Canon, Epson & more. Fast, affordable, and reliable service."
        />
        <meta
          name="keywords"
          content="Printer service center Bhubaneswar, HP printer repair, Epson printer service, Canon printer service, printer repair near me"
        />
      </Helmet>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-amber-700 text-center mb-4">
          Printer Service Center in Bhubaneswar
        </h1>

        <p className="text-gray-700 mb-4">
          Need a professional <strong>printer repair service</strong> in Bhubaneswar? At <strong>Numlock IT Solutions</strong>, we provide expert printer servicing for all major brands including HP, Canon, Epson, Brother, Samsung, Ricoh, and more. Whether it’s an inkjet, laser, or all-in-one printer, our skilled technicians are here to restore performance quickly and affordably.
        </p>

        <p className="text-gray-700 mb-4">
          From paper jam fixes and ink issues to motherboard and roller replacements, we handle it all with genuine parts and service warranty. We also support both home and office printers, including bulk maintenance for schools and businesses.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Why Choose Numlock IT Solutions for Printer Repair?
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Support for all popular printer brands and models</li>
          <li>Genuine toner and ink cartridge solutions</li>
          <li>On-site diagnosis for businesses and institutions</li>
          <li>Quick turnaround and affordable rates</li>
          <li>Warranty on replaced parts and workmanship</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Common Printer Issues We Handle:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Paper jams and printer not feeding</li>
          <li>Ink smudging or print quality problems</li>
          <li>Wi-Fi and connectivity errors</li>
          <li>Roller, fuser, or cartridge issues</li>
          <li>Printer not responding or power issues</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Best Printer Service Center in Bhubaneswar
        </h2>
        <p className="text-gray-700 mb-4">
          Our center is trusted by homes, offices, schools, and printing businesses for consistent, long-lasting repair results. We also offer AMC (Annual Maintenance Contracts) for institutions needing regular support for multiple printers.
        </p>

        <p className="text-gray-700 font-medium">
          📞 Contact Numlock IT Solutions for prompt, professional printer repair in Bhubaneswar. We’ll keep your printing needs running smoothly!
        </p>
      </div>
    </div>
  );
};

export default PrinterService;
