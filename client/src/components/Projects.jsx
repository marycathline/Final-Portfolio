import React from "react";

// Sample project data
const projects = [
  {
    title: "WHESS Website",
    description: "A professional CBO website built with React and Tailwind, showcasing programs, blog, and carousel features.",
    tech: ["Vite React", "Tailwind", "Netlify"],
    link: "https://whes-website.netlify.app/",
  },
  {
    title: "MochoCare App",
    description: "A holistic digital health solution focused on reproductive and mental health for African women.",
    tech: ["Express js"],
    link: "https://mocho-wellness-app.onrender.com/", // Replace with real link when ready
  },
  {
    title: "Pad a Girl Campaign",
    description: "Campaign platform for awareness, education and distribution support around menstrual health.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
              <div className="mt-auto">
                <ul className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
