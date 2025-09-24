import React from "react";
import { Helmet } from "react-helmet";
import { assest } from "../assets/assets";
const DataRecoveryService = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <Helmet>
        <title>Data Recovery Services in Bhubaneswar | Numlock IT Solutions</title>
        <meta
          name="description"
          content="Looking for data recovery services in Bhubaneswar? Numlock IT Solutions offers professional hard drive, SSD, pen drive & laptop data recovery with high success rate."
        />
        <meta
          name="keywords"
          content="data recovery Bhubaneswar, hard disk recovery, SSD recovery, pen drive data recovery, laptop data recovery, data recovery center near me"
        />
      </Helmet>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-amber-700 text-center mb-4">
          Best Data Recovery Services in Bhubaneswar
        </h1>
        <div className="relative w-full h-full md:h-full rounded-xl mb-6 shadow-lg">
                        <img
                          src={assest.banner_data_recovery} // replace with your banner path
                          alt="Laptop Service Banner"
                          className="w-full h-full object-cover"
                        />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                            Laptop Service Center in Bhubaneswar, Near Me
                          </h1>
                        </div> */}
                      </div>

        <p className="text-gray-700 mb-4">
          Lost your important files, documents, photos, or videos? Don’t panic. <strong>Numlock IT Solutions</strong> offers professional <strong>data recovery services in Bhubaneswar</strong> for laptops, desktops, hard drives, SSDs, pen drives, memory cards, and more.
        </p>

        <p className="text-gray-700 mb-4">
          Our certified experts use advanced tools and techniques to recover data from formatted drives, accidental deletion, damaged partitions, corrupted OS, virus attacks, or even physically damaged storage devices.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          We Recover Data From:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>External Hard Drives & Internal HDDs</li>
          <li>Solid State Drives (SSD)</li>
          <li>USB Flash Drives & Pen Drives</li>
          <li>Memory Cards (SD, microSD, etc.)</li>
          <li>Laptops and Desktops with OS crash</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Common Data Loss Situations We Handle:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Accidental file deletion or formatting</li>
          <li>Virus or malware attacks</li>
          <li>Drive not detecting or showing raw partition</li>
          <li>Blue screen errors or OS crash</li>
          <li>Water or physical damage to storage device</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Why Choose Numlock IT Solutions?
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>High success rate in data recovery</li>
          <li>No recovery, no charge policy</li>
          <li>Quick diagnosis & transparent pricing</li>
          <li>Privacy assured – your data is secure</li>
          <li>Same-day service available for urgent recovery</li>
        </ul>

        <p className="text-gray-700 mt-6 font-medium">
          📞 Contact Numlock IT Solutions today for fast, reliable and affordable data recovery services in Bhubaneswar. Your lost data might still be recoverable!
        </p>
      </div>
    </div>
  );
};

export default DataRecoveryService;
