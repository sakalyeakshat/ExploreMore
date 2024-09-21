import React from "react";

const Navbar = () => {
  return (
    <section className="text-black bg-white body-font w-full">
      <div className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex  items-center text-gray-900 mb-4 md:mb-0">
          <img src="/images/logo.svg" alt="logo" className="w-auto h-12 " />
          <span className="ml-3 text-xl">Vakratunda Homestay</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-gray-900 cursor-pointer">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-gray-900 cursor-pointer">
            About
          </a>
          <a
            href="#gallery"
            className="mr-5 hover:text-gray-900 cursor-pointer">
            Gallery
          </a>
          <a
            href="#destination"
            className="mr-5 hover:text-gray-900 cursor-pointer">
            Destinations
          </a>
          <a
            href="#testimonial"
            className="mr-5 hover:text-gray-900 cursor-pointer">
            Testimonial
          </a>
        </nav>
        <a href="#contact">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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
