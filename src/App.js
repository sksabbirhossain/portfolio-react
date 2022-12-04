import React from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
