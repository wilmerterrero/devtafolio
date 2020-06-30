import React from "react";
import { Fade } from "react-reveal";
import "./Header.css";
import img from "../../img/WilmerLogo.png";

const Header = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="row">
        <div className="col s10 card-pannel offset-s1">
          <div className="h-container">
            <img src={img} alt="foto" className="logo" />
            <h1>¡Hola! Soy Wilmer Terrero </h1>
            <p>
              Soy un dominicano aficionado por la tecnología. Actualmente me
              dedico al Desarrollo de Páginas Web como Freelancer. Me encanta
              aprender y enseñar a otros. ¡Disfruta mi portafolio!
            </p>
            <br />
            <a
              className="waves-effect waves-light btn-large brown lighten-4"
              href="#contact"
            >
              <b>Contáctame</b>
            </a>
            <a
              className="waves-effect waves-light btn-large brown lighten-4"
              href="#portfolio"
            >
              <b>Portafolio</b>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Header;
