import { FaCheck } from "react-icons/fa";
// import laptopRepairImg from "../images/laptop-repair.jpg"; // Adjust the path as needed
import { assest } from "../assets/assets";
const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center  gap-10 py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-lg ">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Why People <span className="text-amber-500">Trust Us</span></h3>
        <ul className="space-y-4">
          {[
            { title: "Comprehensive Repair Hub", desc: "All your gadget repair needs covered under one roof with expert care." },
            { title: "Certified Repair Specialists", desc: "Our skilled technicians ensure precision and quality in every repair." },
            { title: "Fast & Seamless Service", desc: "Get your devices fixed quickly with a hassle-free experience." },
            { title: "Safety & Reliability First", desc: "We follow strict safety protocols to protect your devices and data." },
            { title: "Transparent & Fair Pricing", desc: "Affordable, honest pricing with no hidden charges—just quality service." }
        ].map((item, index) => (
            <li key={index} className="flex items-start gap-4 bg-white p-4 shadow-md rounded-xl">
              <FaCheck className="text-green-500 text-xl mt-1" />
              <span>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:w-1/2 sm:flex justify-center">
        <img
          src={assest.repair_img}
          alt="Laptop Repair"
          className="rounded-2xl shadow-lg w-[50vh] object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
