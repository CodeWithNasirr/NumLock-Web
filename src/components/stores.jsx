import React from "react";
import { MapPin,PhoneCall } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'
const stores = [
  {
    title: "Shop1",
    imgSrc: "images/locations/4.jpeg",
    address:
      "Plot No-xxx, Saheed Nagar, Near Saheed Nagar, Bhubaneswar-751007",
    mapLink: "#",
    phone: "+91 999999999999",
    phoneLink: "tel:999999999999",
  },
  {
    title: "Shop2",
    imgSrc: "images/locations/3.jpeg",
    address:
      "Plot No-xxx, Saheed Nagar, Near Saheed Nagar, Bhubaneswar-751007",
    mapLink: "#",
    phone: "+91 999999999999",
    phoneLink: "tel:999999999999",
  },
  {
    title: "Shop3",
    imgSrc: "images/locations/12.png",
    address:
      "Plot No-xxx, Saheed Nagar, Near Saheed Nagar, Bhubaneswar-751007",
    mapLink: "#",
    phone: "+91 999999999999",
    phoneLink: "tel:999999999999",
  },
  {
    title: "Shop4",
    imgSrc: "images/locations/13.png",
    address:
      "Plot No-xxx, Saheed Nagar, Near Saheed Nagar, Bhubaneswar-751007",
    mapLink: "#",
    phone: "+91 999999999999",
    phoneLink: "tel:999999999999",
  },
];

const ExclusiveStores = () => {
  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">Our <span className="text-pink-500">Odisha's No.1</span> Stores</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-12">
        {stores.map((store, index) => (
          <div
            key={index}
            className="bg-white shadow-md py-4 rounded-lg flex flex-col items-center"
          >
            <img
            //   src={store.imgSrc}
              alt={store.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            
            <h4 className="sm:text-lg  font-semibold mb-2">{store.title}</h4>
            <Link
              to={store.mapLink}
              className="text-sm text-gray-600 mb-2 sm:text-xl text-center"
            >
              {store.address}
            </Link>
            <Link to={store.phoneLink} className="text-sm text-blue-600 sm:text-md mb-4 flex ">
                <PhoneCall className="" />
              {store.phone}
            </Link>
            <Link
              to={store.mapLink}
              className="py-2 px-2 flex bg-blue-600 text-sm text-white rounded-md hover:bg-blue-700 transition"
            >
              Get Direction<MapPin/>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveStores;
