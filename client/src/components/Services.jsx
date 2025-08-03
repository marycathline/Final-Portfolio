import React from "react";
import { Code, Paintbrush, Smartphone } from "lucide-react"; // install lucide-react if not yet

const services = [
  {
    title: "Web Development",
    description:
      "Responsive and SEO-friendly websites built using React, Tailwind, and best UI/UX practices.",
    icon: <Code size={36} className="text-blue-600" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces using Figma and modern design systems tailored to user needs.",
    icon: <Paintbrush size={36} className="text-blue-600" />,
  },
  {
    title: "Mobile App Support",
    description:
      "Prototyping and front-end development for cross-platform apps using React Native and Firebase.",
    icon: <Smartphone size={36} className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section id="services" className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Offer
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 shadow rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
