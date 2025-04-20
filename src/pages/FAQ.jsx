import React, { useState } from 'react';
import SEOAccordion from './SeoAordion';
const faqs = [
    {
      question: 'What types of laptop issues do you repair?',
      answer: 'We handle a wide range of issues including hardware failures, screen replacements, battery problems, software glitches, data recovery, and virus removal.',
    },
    {
      question: 'How long does a typical repair take?',
      answer: 'Most standard repairs are completed within 24 to 48 hours. Complex issues might take longer, but we always keep you updated on the progress.',
    },
    {
      question: 'Do you use genuine spare parts?',
      answer: 'Yes, we use 100% genuine and high-quality parts to ensure the best performance and durability of your laptop.',
    },
    {
      question: 'Is there any warranty on the repairs?',
      answer: 'Absolutely! We offer a warranty of up to 3 months on our repair services, covering both parts and labor.',
    },
    {
      question: 'Do I need to book an appointment?',
      answer: 'While walk-ins are welcome, we recommend booking an appointment for faster service and priority support.',
    },
    {
      question: 'Can you recover data from a damaged laptop?',
      answer: 'Yes, our experts specialize in data recovery from physically damaged or corrupted laptops and storage devices.',
    },
    {
        question: 'Do you provide onsite repair services?',
        answer: 'Yes, we offer onsite diagnosis and repair services in selected areas for your convenience. Please contact us to check availability.',
      },
      {
        question: 'How do I get a repair estimate?',
        answer: 'You can request a free estimate by contacting us through our website or visiting our service center. We provide transparent pricing before starting any work.',
      },
      {
        question: 'Is my personal data safe during the repair?',
        answer: 'Your data privacy is our top priority. We follow strict protocols to ensure your personal information remains safe and confidential.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept multiple payment methods including cash, credit/debit cards, UPI, and online bank transfers for your convenience.',
      },
  ];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <SEOAccordion/>
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-700">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-300 rounded-xl px-4 py-3 overflow-hidden shadow-sm transition-all">
          <button
            className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`px-4 py-2 bg-gray-50 text-gray-700 transition-all duration-300 ${
              openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    
    </div>
  );
}

export default FAQAccordion