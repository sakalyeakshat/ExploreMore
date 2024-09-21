import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Galllery";
import Destination from "./Components/Destination";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
const index = () => {
  return (
    <div className="overflow-x-auto mx-2 sm:mx-0">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Destination />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
