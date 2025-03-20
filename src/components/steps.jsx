import { FaCheckSquare, FaCalendarCheck, FaClock } from "react-icons/fa";

const RepairGadgets = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">We Fix, <span className="text-pink-500">You Relax!</span></h2>
      <p className="text-lg text-gray-700 mb-12 px-5">Just tell us what’s wrong, schedule a time, and let us handle the rest.</p>
      <div className="flex flex-col md:flex-row justify-center gap-5 px-5 max-w-6xl mx-auto">
        <div className=" bg-white p-8 shadow-xl rounded-xl border border-gray-200 hover:shadow-2xl transition">
          <span className=" text-blue-600 text-5xl mb-6 inline-block">
            <FaCheckSquare />
          </span>
          <h3 className="text-2xl font-semibold text-gray-900">Choose Service</h3>
          <p className="text-gray-700 mt-3">Select your device, describe its condition, and leave the rest to us.</p>
        </div>
        <div className=" bg-white p-8 shadow-xl rounded-xl border border-gray-200 hover:shadow-2xl transition">
          <span className=" text-blue-600 text-5xl mb-6 inline-block">
            <FaCalendarCheck />
          </span>
          <h3 className="text-2xl font-semibold text-gray-900">Schedule Appointment</h3>
          <p className="text-gray-700 mt-3">Pick a convenient time for us to handle your repair request.</p>
        </div>
        <div className=" bg-white p-8 shadow-xl rounded-xl border border-gray-200 hover:shadow-2xl transition">
          <span className=" text-blue-600 text-5xl mb-6 inline-block">
            <FaClock />
          </span>
          <h3 className="text-2xl font-semibold text-gray-900">Get Done Instantly</h3>
          <p className="text-gray-700 mt-3">Provide the necessary details, and we will complete your service in no time.</p>
        </div>
      </div>
    </section>
  );
};

export default RepairGadgets;
