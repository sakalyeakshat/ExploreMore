import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";

const index = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Second />
      <Third />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
