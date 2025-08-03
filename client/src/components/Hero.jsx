import React from "react";

const Hero = () => {
  return (
    <div
  className="relative w-full max-w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url('/images/background.jpg')` }}
>

      {/* Overlay for blend effect */}
      <div className="absolute inset-0 bg-blue-950/90 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-32">
        {/* Text Section */}
        <div className="text-white  md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Mary Cathline</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            I build human-centered digital experiences and solutions for web and mobile.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#about"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow "
            >
              Get started
            </a>
            <a
              href="#projects"
              className="rounded-md bg-white px-4 content-center py-2 text-sm font-semibold text-gray-900 shadow "
            >
              See My Work →
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/images/mary.png"
            alt="Mary"
            className="w-64 h-64 object-cover content-center rounded-full border-4 border-blue-950 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
