// FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const faqs = [
    { q:"What exactly do do?    ", a: "I design and build websites, create UI/UX designs, and develop Android and IOS mobile app and web prototypes." },
    { q: "What is your design process?", a: "I start with user research, create wireframes in Figma, then develop responsive designs." },
    { q: "How long does it take to build a website?", a: "It depends on the complexity, but typically 2-4 weeks for a standard site." },
    { q: "Do you offer website maintenance?", a: "Yes, I provide ongoing support and updates for all my projects at a." },
    { q: "Can you help with SEO?", a: "Yes, I implement SEO best practices in all my projects to improve visibility." },
  { q: "What technologies do you specialize in?", a: "HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, MongoDB, Figma, Canva." },
  { q: "Can I hire you for freelance work?", a: "Yes! I’m open to short-term and long-term freelance projects. Let’s chat!" },
  { q: "Do you design pitch decks?", a: "Absolutely, I've created decks for nonprofits and early‑stage startups that effectively communicate their vision and impact." },
  { q: "How can I contact you?", a: "You can reach me via the contact form on this site or email me at [marycathln@gmail.com]." }
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-16 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((item, idx) => (
          <div key={idx} className="py-4">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-medium text-gray-800">{item.q}</span>
              {open === idx ? <ChevronUpIcon className="h-6 w-6 text-gray-600" /> : <ChevronDownIcon className="h-6 w-6 text-gray-600" />}
            </button>
            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 text-gray-700 overflow-hidden"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
