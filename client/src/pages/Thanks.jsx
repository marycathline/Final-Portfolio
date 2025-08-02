// src/pages/Thanks.jsx
import React from "react";
import { Link } from "react-scroll";

const Thanks = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Thank You! 🎉</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Your message has been received. I’ll get back to you as soon as possible.
      </p>

      <Link
        to="home"
        smooth={true}
        duration={500}
        className="text-white bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded cursor-pointer"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default Thanks;
