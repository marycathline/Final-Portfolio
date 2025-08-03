/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-black text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>
            I have over one year in the tech field as a passionate web developer and digital problem solver based in Kenya.
            With a strong background in building intuitive and responsive user interfaces, I specialize in React, 
            Tailwind CSS, and modern front-end technologies.
          </p>

          <p>
            I’ve worked with nonprofits, startups, and mission-driven
            organizations like <strong>WHESS</strong> and <strong>MOCHO</strong>,
            building digital tools that improve lives and drive impact. I recently participated in <strong>CodeHer</strong> hackathon hosted by PLP
            where as a team of three we were able to come up with a solution for data collection and storage tool for entrepreneur support.
            My approach combines clean design, accessibility, and performance to create meaningful user experiences.
          </p>

          <p>
            Whether it's building a brand website, a progressive web app, or
            optimizing UI for mobile users, I bring dedication, creativity, and a collaborative mindset to every project.
          </p>

          <p>
            When I’m not coding, you’ll find me exploring new tech tools,
            contributing to community health projects, or mentoring others in tech.
          </p>
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href="#projects"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
