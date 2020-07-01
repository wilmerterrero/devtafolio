import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Languages from "../components/Skills/Languages";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Languages />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
