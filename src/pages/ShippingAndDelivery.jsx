import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShippingAndDelivery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Shipping and Delivery Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="mb-4 text-gray-700">Numlock IT Solutions ensures timely delivery of refurbished laptops and efficient repair services in Bhubaneswar.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Shipping Areas</h2>
          <p className="mb-4 text-gray-700">We currently ship refurbished laptops within Bhubaneswar and select areas in Odisha. Contact us to confirm availability in your area.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Delivery Time</h2>
          <p className="mb-4 text-gray-700">Orders are delivered within 7-10 business days from the date of purchase. Delays may occur due to unforeseen circumstances.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Shipping Charges</h2>
          <p className="mb-4 text-gray-700">Free shipping within Bhubaneswar for orders above ₹10,000. A flat ₹200 shipping fee applies otherwise.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Order Tracking</h2>
          <p className="mb-4 text-gray-700">Once shipped, you will receive a tracking link via email or WhatsApp.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Repair Services</h2>
          <p className="mb-4 text-gray-700">For repairs, we offer free pick-and-drop services in Bhubaneswar during the warranty period. Contact us to schedule.</p>
          
          <p className="mt-6 text-gray-700">For shipping queries, contact us at <a href="mailto:support@numlockitsolutions.co.in" className="text-blue-600 hover:underline">support@numlockitsolutions.co.in</a>.</p>
        </div>
      </main>
      
    </div>
  );
};

export default ShippingAndDelivery;