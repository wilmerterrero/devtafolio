import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Languages from './components/Languages';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <Fragment>
      <Navbar 
        tittle="{ wilmerTerrero }"
      />
      <Header />
      <Languages />
      <Experience />
      <Portfolio />
    </Fragment>
  );
}

export default App;
