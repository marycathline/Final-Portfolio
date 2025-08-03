import React from "react";

const Hero = () => {
  return (
    <div
  className="relative w-full max-w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url('/images/background.jpg')` }}
>

      {/* Overlay for blend effect */}
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-32">
        {/* Text Section */}
        <div className="text-white md:w-1/2 space-y-6 text-left">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Mary</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            I build human-centered digital experiences for web and mobile.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#about"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
            >
              Get started
            </a>
            <a
              href="#projects"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
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
            className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
