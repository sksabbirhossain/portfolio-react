import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
