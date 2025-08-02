import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center px-4 py-32">

      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Mary 👩🏾‍💻</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          I build human-centered digital experiences for web and mobile.
        </p>
        
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#about" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Get started </a>
          <a href="#projects" class="text-sm/6 font-semibold text-white hover:text-gray-100">
            See My Work
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
