import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className=" text-amber-700 py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm mt-2">Numlock IT Solutions - Your Trustworthy Laptop Service Center</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-10 flex-1">
        <section className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-800">Introduction</h2>
          <p className="text-gray-700">
            At Numlock IT Solutions, we deeply respect your privacy. This policy explains how we collect, use, and protect your personal information when you use our laptop servicing center.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">Information Collection</h2>
          <p className="text-gray-700">
            We collect your name, contact details, and device information when you use our services. This helps us provide better customer support and maintain service quality.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">Use of Information</h2>
          <p className="text-gray-700">
            Your data is solely used to deliver, improve, and personalize our services. We do not sell or share your personal information with third parties.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">Data Security</h2>
          <p className="text-gray-700">
            We implement advanced security measures to ensure your personal information is protected from unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">Third-Party Services</h2>
          <p className="text-gray-700">
            We do not use third-party services that collect your personal data. Your information stays strictly between you and Numlock IT Solutions.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, update, or delete your personal information at any time. Simply contact us for any requests.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this privacy policy occasionally. Any changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this policy, feel free to contact us at <span className="font-medium text-blue-800">info@numlockitsolutions.com</span>.
          </p>
        </section>
      </main>


    </div>
  );
};

export default PrivacyPolicy;
