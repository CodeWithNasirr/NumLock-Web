import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SEOAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Define dynamic content based on route
  const pageContent = {
    '/': {
      title: 'Expert Laptop Repair in Bhubaneswar - NumLock IT Solutions',
      description: 'Welcome to NumLock IT Solutions, your trusted partner for fast and affordable laptop repair services in Bhubaneswar. Our certified technicians handle everything from screen replacements to motherboard repairs, ensuring your laptop works like new.',
      services: [
        'Screen Replacement for All Brands',
        'Battery Replacement',
        'Motherboard Repair & Replacement',
        'Keyboard Repair & Replacement',
        'Data Recovery Services',
      ],
      brands: 'We specialize in repairing laptops from Dell, HP, Apple, Lenovo, Acer, Asus, and more. No matter the issue, our experts have you covered.',
      whyChoose: 'Located in the heart of Bhubaneswar, NumLock IT Solutions is known for reliable services, genuine parts, and excellent customer support. Book your repair service today!',
    },
    '/about': {
      title: 'About NumLock IT Solutions - Your Trusted IT Partner',
      description: 'NumLock IT Solutions is a team of passionate experts dedicated to providing top-notch laptop repair services in Bhubaneswar. Learn about our mission and values.',
      services: [
        'Experienced Technicians',
        'Fast Turnaround Time',
        'Affordable Pricing',
        'Customer Satisfaction Guarantee',
      ],
      brands: 'Trusted by brands and customers alike in Bhubaneswar and beyond.',
      whyChoose: 'We’re committed to delivering exceptional service and genuine parts for all your laptop needs.',
    },
    '/Faq': {
      title: 'FAQ - NumLock IT Solutions',
      description: 'Find answers to common questions about our laptop repair services, warranty, and more.',
      services: [
        'Do you provide warranty?',
        'What brands do you repair?',
        'How long does repair take?',
      ],
      brands: 'We repair all major brands including Dell, HP, Lenovo, Apple, and more.',
      whyChoose: 'Our customer-first approach ensures complete satisfaction with every repair.',
    },
    '/contact': {
      title: 'Contact NumLock IT Solutions',
      description: 'Get in touch with NumLock IT Solutions for fast and reliable laptop repair services in Bhubaneswar.',
      services: [
        'Call us at +91-XXXXXXXXXX',
        'Email us at support@numlockitsolutions.com',
        'Visit our service center in Bhubaneswar',
      ],
      brands: 'We serve Bhubaneswar and nearby areas with doorstep service.',
      whyChoose: 'Reach out today for expert assistance and fast service!',
    },
    '/privacy-policy': {
      title: 'Privacy Policy - NumLock IT Solutions',
      description: 'Learn how NumLock IT Solutions protects your personal data and ensures your privacy.',
      services: [
        'Data Protection',
        'Secure Transactions',
        'Customer Confidentiality',
      ],
      brands: 'Your privacy is our priority.',
      whyChoose: 'We follow strict protocols to ensure your data is safe with us.',
    },
    // Add more pages if you want 🌟
  };

  const content = pageContent[location.pathname];

  // If no content for this route, hide the component
  if (!content) return null;

  return (
    <div className="hidden">
      <button onClick={toggleAccordion} className="" aria-expanded={isOpen}>
        ({isOpen ? '' : ''})
      </button>

      {isOpen && (
        <div className="bg-white border border-gray-300 p-4 mt-2 rounded shadow-sm">
          <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
          <p className="mb-3">{content.description}</p>

          <h2 className="text-xl font-semibold mb-2">Our Services Include:</h2>
          <ul className="list-disc ml-6 mb-4">
            {content.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-2">Brands We Service</h3>
          <p className="mb-3">{content.brands}</p>

          <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
          <p>{content.whyChoose}</p>
        </div>
      )}
    </div>
  );
}

export default SEOAccordion;
