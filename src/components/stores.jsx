import React from "react";
import { MapPin,PhoneCall } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'
const stores = [
  {
    title: "Registered Address",
    imgSrc: "images/locations/4.jpeg",
    address:
      "Plot No-124, Saheed Nagar, Near Alok Bharati Tower, Bhubaneswar-751007",
    mapLink: "https://maps.app.goo.gl/meSU1BxEoh9ZEsvY6",
    phone: "+91 7788008899",
    phoneLink: "tel:7788008899",
  },
  {
    title: "Corporate Address",
    imgSrc: "images/locations/3.jpeg",
    address:
      "Plot No.772, 1st Floor, Infront of Maharshi College, Saheed Nagar, Bhubaneswar-751007",
    mapLink: "https://goo.gl/maps/1jWdUKVdMTGoasiv6",
    phone: "+91 7788997788",
    phoneLink: "tel:7788997788",
  },
  {
    title: "Mobile Service Center",
    imgSrc: "images/locations/12.png",
    address:
      "Plot No.772, Infront of Maharshi College gate, Near BMC Bhawani Mall, Saheed Nagar, Bhubaneswar-751007",
    mapLink: "https://goo.gl/maps/LR7wqzdBUM5aA37c9",
    phone: "+91 7788006677",
    phoneLink: "tel:7788006677",
  },
  {
    title: "Showroom Address",
    imgSrc: "images/locations/13.png",
    address:
      "Plot No-435/1866, 1st Floor, Near KIIT Square, Beside Sky Automobiles, Patia, Bhubaneswar-751024",
    mapLink: "https://maps.app.goo.gl/TGVd1wRxsMvpvy6AA",
    phone: "+91 7788007799",
    phoneLink: "tel:7788007799",
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
              className="text-gray-600 mb-2 text-center"
            >
              {store.address}
            </Link>
            <Link to={store.phoneLink} className="text-blue-600 mb-4 flex ">
                <PhoneCall className="mx-2" />
              {store.phone}
            </Link>
            <Link
              to={store.mapLink}
              className="px-4 py-2 flex bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
