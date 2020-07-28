import React from "react";
import {Fade} from "react-reveal";
import  "./Portfolio.css";
import {Image} from 'cloudinary-react';
import waveTop from "../../img/waveTop.svg";

const Portfolio = () => {
  return (
      <div className="row" id="portfolio">
        <h3 className="center align p-titulo">Portafolio</h3>
        <br />
        <div className="container">
          <Fade top duration={1000} distance="20px">
             <div className="p-container">
                <Image cloudName="wterrerocloud" publicId="myportfolio/portfolio/consularis_bxvhkq.png" />
                <h3>Consularis Service <span className="year">2020</span></h3> 
                <p>
                  Servicios Migratorios & Legales
                </p>
                <a
                  className="waves-effect waves-light btn-large btn-grande"
                  href="https://consularisservice.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visitar sitio
                </a>
              </div>
              </Fade>
              <Fade top duration={1000} distance="20px">
              <div className="p-container">
                <Image cloudName="wterrerocloud" publicId="myportfolio/portfolio/lyricartist_cudqfu.png" />
                <h3>Lyricartist <span className="year">2020</span></h3>
                <p>
                  Buscador de letras de canciones.
                </p>
                <a
                  className="waves-effect waves-light btn-large btn-grande"
                  href="https://lyricartist.netlify.app"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                Visitar sitio
                </a>
              </div>
              </Fade>
              <Fade top duration={1000} distance="20px">
              <div className="p-container">
                <Image cloudName="wterrerocloud" publicId="myportfolio/portfolio/ovigallery_a2si7x.png" />
                <h3>Ovi Gallery <span className="year">2019</span></h3>
                <p>
                  Landing page de la galería de arte Ovi Gallery.
                </p>
                <a
                  className="waves-effect waves-light btn-large btn-grande"
                  href="#!"
                >
                  Visitar sitio
                </a>
              </div> 
          </Fade>  
        </div>
        <img src={waveTop} alt="" className="wave"/>
      </div>
  );
};

export default Portfolio;
