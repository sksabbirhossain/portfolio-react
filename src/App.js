import React from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
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
    </>
  );
}

export default App;
