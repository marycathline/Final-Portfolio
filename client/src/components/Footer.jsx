import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 max-auto  text-center py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <p className="text-lg text-white font-semibold">Let’s connect ✨</p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/marycathline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/mary-okech-090641106/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:marycathln@gmail.com"
            className="text-gray-700 hover:text-black transition"
          >
            <Mail />
          </a>
        </div>

        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Mary Cathline. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
