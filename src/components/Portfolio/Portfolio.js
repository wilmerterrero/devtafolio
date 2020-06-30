import React, { Fragment } from "react";
import  "./Portfolio.css";
import consularis from "../../img/portfolio/consularis.png";
import ovigallery from "../../img/portfolio/ovigallery.png";
import waveTop from "../../img/waveTop.svg";
import {Fade} from "react-reveal";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="row" id="portfolio">
        <h3 className="center align" style={{paddingBottom: "3rem"}}>Portafolio</h3>
        <br />
        <div className="col s10 offset-s2 hide-on-small-only hide-on-med-and-down">
        <Fade top duration={1000} distance="20px">
          <div className="p-container">
            <img src={consularis} alt="consularis" />
            <h3>Consularis Service <a className="waves-effect waves-light btn-small blue darken-2" href="#!">2020</a></h3> 
            <p>
              Servicios Migratorios & Legales
            </p>
            <a
              className="waves-effect waves-light btn-large brown lighten-4 btn-grande"
              href="#!"
            >
              <b>Visitar sitio</b>
            </a>
          </div>
          </Fade>
          <Fade top duration={1000} distance="20px">
          <div className="p-container">
            <img src={ovigallery} alt="ovigallery" />
            <h3>Ovi Gallery <a className="waves-effect waves-light btn-small blue darken-2" href="#!">2019</a></h3>
            <p>
              Landing page de la galería de arte Ovi Gallery.
            </p>
            <a
              className="waves-effect waves-light btn-large brown lighten-4 btn-grande"
              href="#!"
            >
              <b>Visitar sitio</b>
            </a>
          </div>
          </Fade>
        </div>
        <div className="col s12 show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
          <Fade top duration={1000} distance="20px">
          <div className="center align p-container">
            <img src={consularis} alt="consularis" />
            <h3>Consularis Service <a className="waves-effect waves-light btn-small blue darken-2" href="#!">2020</a></h3> 
            <p>
              Servicios Migratorios & Legales
            </p>
            <a
              className="waves-effect waves-light btn-large brown lighten-4 btn-grande"
              href="#!"
            >
              <b>Visitar sitio</b>
            </a>
          </div>
          </Fade>
          <Fade top duration={1000} distance="20px">
          <div className="center align p-container">
            <img src={ovigallery} alt="ovigallery" />
            <h3>Ovi Gallery <a className="waves-effect waves-light btn-small blue darken-2" href="#!">2019</a></h3>
            <p>
              Landing page de la galería de arte Ovi Gallery.
            </p>
            <a
              className="waves-effect waves-light btn-large brown lighten-4 btn-grande"
              href="#!"
            >
              <b>Visitar sitio</b>
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
