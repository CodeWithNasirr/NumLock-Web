import React from 'react';

const CancellationAndRefund = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cancellation and Refund Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="mb-4 text-gray-700">At Numlock IT Solutions, we strive to ensure customer satisfaction. Please review our cancellation and refund policy below.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Cancellation</h2>
          <p className="mb-4 text-gray-700">Orders for refurbished laptops can be canceled within 24 hours of placement, provided they have not been shipped. To cancel, contact us at <a href="mailto:info@numlockitsolutions.co.in" className="text-blue-600 hover:underline">support@numlockitsolutions.co.in</a>. Repair service bookings can be canceled before work begins.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Refunds for Refurbished Laptops</h2>
          <p className="mb-4 text-gray-700">Refunds are processed within 5-7 business days after we receive the returned product in its original condition. A 3% payment gateway fee may be deducted. Shipping charges are non-refundable if the product has been shipped.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Refunds for Repair Services</h2>
          <p className="mb-4 text-gray-700">If a repair is unsuccessful due to our fault, a full refund will be issued within 5-7 business days. No refunds for completed repairs unless under warranty.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Return Process</h2>
          <p className="mb-4 text-gray-700">To initiate a return, email us with your order details. Return shipping costs are borne by the customer unless the product is defective. Keep a copy of the shipping receipt.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Non-Refundable Items</h2>
          <p className="mb-4 text-gray-700">Custom-configured laptops or repairs involving customer-supplied parts are non-refundable.</p>
          
          <p className="mt-6 text-gray-700">For refund queries, contact us at <a href="mailto:support@numlockitsolutions.co.in" className="text-blue-600 hover:underline">support@numlockitsolutions.co.in</a>.</p>
        </div>
      </main>
    </div>
  );
};

export default CancellationAndRefund;