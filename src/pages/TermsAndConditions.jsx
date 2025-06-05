

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Terms and Conditions</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="mb-4 text-gray-700">Welcome to Numlock IT Solutions. By accessing our website or using our services, you agree to be bound by the following terms and conditions. If you do not agree, please discontinue use.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Services</h2>
          <p className="mb-4 text-gray-700">Numlock IT Solutions provides laptop repair services and sells refurbished laptops in Bhubaneswar. All services and products are subject to availability.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Product Warranty</h2>
          <p className="mb-4 text-gray-700">Refurbished laptops come with a 3-month warranty unless otherwise specified. Repairs carry a 30-day warranty on parts and labor. Warranty is void if damage results from misuse or unauthorized repairs.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Payment</h2>
          <p className="mb-4 text-gray-700">Payments are processed via Razorpay. You agree to Razorpay’s terms and privacy policy. All prices are inclusive of taxes unless stated otherwise.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Prohibited Conduct</h2>
          <p className="mb-4 text-gray-700">You may not use our website to post unlawful content, infringe intellectual property, or engage in activities that harm our services or reputation.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Limitation of Liability</h2>
          <p className="mb-4 text-gray-700">Numlock IT Solutions is not liable for indirect, incidental, or consequential damages arising from the use of our services or products.</p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Changes to Terms</h2>
          <p className="mb-4 text-gray-700">We may update these terms periodically. Continued use of our services constitutes acceptance of the updated terms.</p>
          
          <p className="mt-6 text-gray-700">For questions, contact us at <a href="mailto:info@numlockitsolutions.co.in" className="text-blue-600 hover:underline">support@numlockitsolutions.co.in</a>.</p>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;