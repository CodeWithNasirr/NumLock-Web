import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600">We're here to help! Contact us for inquiries, support, or just to say hello.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-md" > 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject of your message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h3>
              <p className="text-gray-600">Street - 8, Front Lane of Hotel Empire, Plot No - 228, EPF Colony, E-Block, Saheed Nagar, Bhubaneswar, Odisha 751007</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 9439940725</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">support@numlockitsolutions.co.in</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
