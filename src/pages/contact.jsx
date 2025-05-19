import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from "../../config";
import { toast } from 'react-toastify'
import SEOAccordion from './SeoAordion';
const ContactUs = () => {
  
const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/api/contact-form/`, formData); // adjust base URL if needed
      toast.success("Message sent successfully!");
      setFormData({ full_name: '', email: '', subject: '', message: '' }); // clear form
    } catch (error) {
      console.error(error);
      toast.error("There was a problem sending your message.");
    }
  };


  return (
    <section className="bg-white py-16 px-4 lg:px-32">
      <SEOAccordion/>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600">We're here to help! Contact us for inquiries, support, or just to say hello.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-md"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
              <p className="text-gray-600">Street - 8, Front Lane of Hotel Empire, Plot No - 228, EPF Colony, E-Block, Saheed Nagar, Bhubaneswar, Odisha 751007 </p>
              
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
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Visit NumLock IT Solutions 🚀</h2>
      
      <div className="rounded-2xl overflow-hidden mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1962825807823!2d85.84476207575567!3d20.290639081103454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909116d3c63b1%3A0x3c0f495fac1cac73!2sNumLock%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1712996581377!5m2!1sen!2sin"
          width="100%"
          height="50px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center">
        <a
          href="https://maps.app.goo.gl/mMZWEoKZzL5Lnom78?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          View Route on Google Maps
        </a>
      </div>
    </div>
    
    </section>
    
  );
};

export default ContactUs;
