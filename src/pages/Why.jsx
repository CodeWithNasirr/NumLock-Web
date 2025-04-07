import React from 'react';
import { ShieldCheck, Clock, Headphones, TrendingUp } from 'lucide-react';

const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: 'Trusted Repairs',
      description: 'Certified technicians providing reliable and safe repairs for all laptop brands.',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Quick Turnaround',
      description: 'Fast and efficient service to get your laptop back in working condition swiftly.',
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-500" />,
      title: 'Expert Support',
      description: 'Get expert guidance and support for all your technical queries and issues.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: 'Affordable Pricing',
      description: 'High-quality service at competitive prices with transparent billing.',
    },
  ];

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-amber-700">Why Choose NumLock?</h2>
        <p className="text-gray-600 mb-12">
          Discover the benefits of partnering with us for your digital solutions.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
