import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Gallery from "./Components/Galllery";

const index = () => {
  return (
    <div className="overflow-x-auto mx-2 sm:mx-0">
      <Navbar />
      <First />
      <Second />
      <Gallery />
      <Third />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
