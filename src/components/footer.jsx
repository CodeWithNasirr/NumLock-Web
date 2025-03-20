import React from "react";
import { FaWhatsapp, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-zinc-50 text-gray-800 py-8 relative">
      {/* WhatsApp Floating Button */}
      {/* <a
        href="https://api.whatsapp.com/send?phone=+917788007788&text=Hi,%20Technical%20Support%20Requested"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a> */}

      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Contact Info */}
        <div className="space-y-4">
          <img src="images/logo.png" alt="logo" className="w-32 mb-3" />
          <p>Plot No-xxx, Saheed Nagar, Near xxxx, Bhubaneswar-751007</p>
          <p><strong>Mobile:</strong> +91 99999999999</p>
          <p><strong>Alt Mobile:</strong> +91 99999999999</p>
          <p><strong>Email:</strong> skofficial665@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="hover:text-blue-500 transition duration-300" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} className="hover:text-red-500 transition duration-300" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="hover:text-pink-500 transition duration-300" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} className="hover:text-blue-400 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            {["Home", "About us", "Contact us", "FAQ", "Privacy Policy", "Pay Online"].map((link, index) => (
              <li key={index} className="flex items-center">
                <FaAngleRight className="mr-2 text-gray-400" />
                <a href="#" className="hover:text-gray-400 transition duration-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2">
            {[
              "Mobile/Tablet Repairing",
              "Laptop Repairing",
              "Data Recovery",
              "Laptop/Desktop Refurbished",
              "Apple Device Repairing",
              "Projector Repairing",
              "Printer Repairing"
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <FaAngleRight className="mr-2 text-gray-400" />
                <a href="#" className="hover:text-gray-400 transition duration-300">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Locations</h3>
          <ul className="space-y-2">
            {[
              "Bhubaneswar", "Puri","Jajpur Road", "Cuttack" 
            ].map((location, index) => (
              <li key={index} className="flex items-center">
                <FaAngleRight className="mr-2 text-gray-400" />
                <a href="#" className="hover:text-gray-400 transition duration-300">{location}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
    <p className="text-center text-gray-900 py-4">
        © All Rights Reserved Numlock Technology. 
      </p>
    </>
  );
};

export default Footer;
