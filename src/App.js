import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Languages from './components/Languages';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {

  const year = new Date().getFullYear();
  return (
    <Fragment>
      <Navbar 
        tittle="{ wilmerTerrero }"
      />
      <Header />
      <Languages />
      <Experience />
      <Contact />
      <Footer
        year = {year}
      />
    </Fragment>
  );
}

export default App;
