import React from "react";
import CustomNavbar from "./Components/HomeNavbar";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Galllery";
import Destination from "./Components/Destination";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
const index = () => {
  return (
    <div className="overflow-x-auto mx-2 sm:mx-0 scroll-smooth">
      {/* <Navbar /> */}
      <CustomNavbar />
      <div>
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="destination">
        <Destination />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default index;
