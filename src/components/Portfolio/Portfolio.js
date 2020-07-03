import React, { Fragment } from "react";
import  "./Portfolio.css";
import consularis from "../../img/portfolio/consularis.png";
import ovigallery from "../../img/portfolio/ovigallery.png";
import lyricartist from "../../img/portfolio/lyricartist.png";
import waveTop from "../../img/waveTop.svg";
import {Fade} from "react-reveal";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="row" id="portfolio">
        <h3 className="center align p-titulo">Portafolio</h3>
        <br />
        <br />
        <div className="col s10 offset-s2 hide-on-small-only hide-on-med-and-down">
        <Fade top duration={1000} distance="20px">
          <div className="p-container">
            <img src={consularis} alt="consularis" />
            <h3>Consularis Service <span className="year">2020</span></h3> 
            <p>
              Servicios Migratorios & Legales
            </p>
            <a
              className="waves-effect waves-light btn-large  btn-grande"
              href="#!"
            >
              <b>Visitar sitio</b>
            </a>
          </div>
          </Fade>
          <Fade top duration={1000} distance="20px">
          <div className="p-container">
            <img src={lyricartist} alt="lyricartist" />
            <h3>Lyricartist <span className="year">2020</span></h3>
            <p>
              Buscador de letras de canciones.
            </p>
            <a
              className="waves-effect waves-light btn-large  btn-grande"
              href="#!"
            >
              <b>Preview</b>
            </a>
          </div>
          </Fade>
          <Fade top duration={1000} distance="20px">
          <div className="p-container">
            <img src={ovigallery} alt="ovigallery" />
            <h3>Ovi Gallery <span className="year">2019</span></h3>
            <p>
              Landing page de la galería de arte Ovi Gallery.
            </p>
            <a
              className="waves-effect waves-light btn-large  btn-grande"
              href="#!"
            >
              <b>Preview</b>
            </a>
          </div>
          </Fade>
        </div>
        <div className="col s12 show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
          <Fade top duration={1000} distance="20px">
          <div className="center align p-container">
            <img src={consularis} alt="consularis" />
            <h3>Consularis Service <span className="year">2020</span></h3> 
            <p>
              Servicios Migratorios & Legales
            </p>
            <a
              className="waves-effect waves-light btn-large btn-grande"
              href="#!"
            >
              <b>Visitar sitio</b>
            </a>
          </div>
          </Fade>
          <Fade top duration={1000} distance="20px">
          <div className="center align p-container">
            <img src={lyricartist} alt="ovigallery" />
            <h3>Lyricartist <span className="year">2020</span></h3>
            <p>
              Buscador de letras de canciones.
            </p>
            <a
              className="waves-effect waves-light btn-large  btn-grande"
              href="#!"
            >
              <b>Preview</b>
            </a>
          </div>
          </Fade>
          <Fade top duration={1000} distance="20px">
          <div className="center align p-container">
            <img src={ovigallery} alt="ovigallery" />
            <h3>Ovi Gallery <span className="year">2019</span></h3>
            <p>
              Landing page de la galería de arte Ovi Gallery.
            </p>
            <a
              className="waves-effect waves-light btn-large  btn-grande"
              href="#!"
            >
              <b>Preview</b>
            </a>
          </div>
          </Fade>
        </div>
        <img src={waveTop} alt="" className="wave"/>
      </div>
    </Fragment>
  );
};

export default Portfolio;
