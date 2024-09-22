import React from "react";

const Navbar = () => {
  return (
    <section className="text-black bg-white body-font w-full">
      <div className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-auto h-12 bg-black"
          />
          <span className="ml-3 text-xl font-semibold">
            Vakratunda Homestay
          </span>
        </a>
        <nav className="flex items-center text-base justify-center">
          <a
            href="#about"
            className="mr-5 -mx-8  hover:scale-110 hover:text-green-500 transition-all cursor-pointer">
            About
          </a>
          <a
            href="#gallery"
            className="mr-5 hover:scale-110 hover:text-green-500 transition-all cursor-pointerr">
            Gallery
          </a>
          <a
            href="#destination"
            className="mr-5 hover:scale-110 hover:text-green-500 transition-all cursor-pointerr">
            Destinations
          </a>
          <a
            href="#testimonial"
            className="mr-5 hover:scale-110 hover:text-green-500 transition-all cursor-pointer">
            Testimonial
          </a>
        </nav>
        <a href="#contact">
          <button className="inline-flex items-center bg-green-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-base transition-colors duration-300">
            Enquire Now
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
