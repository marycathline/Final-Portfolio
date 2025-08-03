// src/pages/Gallery.jsx
import React from "react";

const Gallery = () => {
  const projects = [
    {
      title: "Project One",
      description: "Short description of project one.",
      image: "/images/project1.png", // adjust path
      link: "https://project-one.example.com",
    },
    {
      title: "Project Two",
      description: "Short description of project two.",
      image: "/images/project2.png",
      link: "https://project-two.example.com",
    },
    // Add more projects here...
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Project Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
