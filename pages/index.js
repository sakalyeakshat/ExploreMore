import React, { useEffect } from "react";
import CustomNavbar from "./Components/HomeNavbar";
import Lenis from "@studio-freight/lenis";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Explore from "./Components/Explore";
import DestinationsNearby from "./Components/DestinationsNearby";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";


const Index = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomNavbar />
      <div className="overflow-x-auto mx-2 sm:mx-0 bg-[#d3d3d3]">
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="Exploremore">
          <Explore/>
        </div>
        <div id="destination">
          <DestinationsNearby/>
        </div>
        
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
