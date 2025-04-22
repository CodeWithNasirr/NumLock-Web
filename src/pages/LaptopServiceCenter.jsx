import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const LaptopServiceCenter = () => {

  const brands = [
    {name:"Dell",path:"/Dell-laptop-service"},
    {name:"HP",path:"/Hp-laptop-service"},
    {name:"Lenovo",path:"/Lenovo-laptop-service"},
    {name:"Apple",path:"/Apple-laptop-service"},
    {name:"Acer",path:"/Acer-laptop-service"},
    {name:"Asus",path:"/Assus-laptop-service"},
    {name:"Samsung",path:"/Samsung-laptop-service"},
    {name:"Toshiba",path:"/Toshiba-laptop-service"},
    {name:"Projectors",path:"/Projectors-laptop-service"},

  ]

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <Helmet>
        <title>Laptop Service Center in Bhubaneswar | Numlock IT Solutions</title>
        <meta
          name="description"
          content="Need professional laptop repair in Bhubaneswar? Numlock IT Solutions offers fast, reliable laptop servicing for all major brands including Dell, HP, Lenovo, Apple & more."
        />
      </Helmet>
      <div className="text-amber-700 rounded-xl shadow-lg p-6 mb-6">
        <h2 className=" text-[25px] md:text-3xl font-bold text-center">
          Laptop Service Center in Bhubaneswar, Near Me
        </h2>
      </div>

      <div className="space-y-4 text-gray-700">
        <p>
          In today’s digital world, laptops have become essential for businesses,
          education, and personal use. When your laptop faces hardware or software
          issues, it can disrupt your entire routine. That’s where Numlock IT Solutions
          comes in as your trusted laptop repair partner in Bhubaneswar.
        </p>

        <p>
          We specialize in offering fast and reliable laptop repair services for a wide
          range of brands including Dell, HP, Apple, Lenovo, Acer, Asus, and more.
          Whether you need help with screen replacement, motherboard repair, data
          recovery, or any software issue, our expert technicians are here to help.
        </p>

        <h3 className="text-2xl font-semibold pt-4">Authorized Brand Repairs</h3>
        <table className="w-full table-auto border border-gray-300 text-left mt-2">
          <tbody>
            {brands.map((brand,index)=>(
              <tr key={index} className="border-t border-gray-300">
              <td className="p-2">
                <Link
                 to={brand.path}
                  className="text-blue-600 hover:underline"
                >
                  {brand.name} Laptop Service Center in Bhubaneswar
                </Link>
              </td>
            </tr>

            ))}
          </tbody>
        </table>

        {/* <img
          src="/images/large/laptop-repair.png"
          alt="laptop-repair"
          className="w-full rounded-lg my-6"
        /> */}

        <p>
          <strong>Numlock IT Solutions</strong> is one of Bhubaneswar’s most trusted
          names in professional laptop servicing. We take pride in providing top-notch
          technical assistance, quick turnarounds (often within 24 hours), and cost-effective
          solutions that beat market prices.
        </p>

        <p>
          Our mission is to deliver high-quality service that exceeds customer expectations.
          From individual users to business clients, we understand the value your laptop
          holds in your life and work hard to bring it back to perfect condition.
        </p>

        <p>
          We’re equipped with skilled engineers and modern tools for diagnosing and
          repairing every kind of laptop issue. Whether it's a software problem or a
          component failure, we ensure reliable solutions that last.
        </p>

        <h3 className="text-2xl font-semibold pt-6">
          Why Choose Numlock IT Solutions?
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Genuine spare parts and warranty support</li>
          <li>Certified and experienced technicians</li>
          <li>Fast diagnostics and same-day service for common issues</li>
          <li>Pickup and delivery options across Bhubaneswar</li>
          <li>Transparent pricing and no hidden charges</li>
          <li>Excellent customer support and after-service follow-up</li>
        </ul>

        <p className="pt-6">
          Looking for a trusted and efficient laptop repair center near you? Visit
          <a
            href="https://www.numlockitsolutions.in"
            className="text-blue-600 hover:underline mx-1"
          >
            Numlock IT Solutions
          </a>
          today and experience the best in laptop servicing.
        </p>
      </div>
    </div>
  );
};

export default LaptopServiceCenter;
