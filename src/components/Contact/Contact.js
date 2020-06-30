import React from "react";
import "./Contact.css";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import me from "../../img/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Github = <FontAwesomeIcon icon={faGithub} />;
const Google = <FontAwesomeIcon icon={faGoogle} />;
const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;

const Contact = () => {
  return (
    <div className="c-container col s12" id="contact">
      <div className="center-align">
        <Flip left>
          <img src={me} alt="" className="circle responsive-img" />
        </Flip>
        <Fade top>
          <h1>¡Puedo ayudarte!</h1>
          <p>
            Si tiene un proyecto que desea comenzar, cree que necesita mi ayuda
            con algo o simplemente quiere decir hola, póngase en contacto conmigo.
          </p>
          <a
            className="btn-contact waves-effect waves-light btn-large brown lighten-4"
            href="#!"
          >
            <b>
              Contáctame <i className="material-icons">markunread</i>
            </b>
          </a>
        </Fade>      
        
      </div>
        <a className="c-icon btn-floating btn-large waves-effect waves-light grey darken-4" href="#!">{Github}</a>
        <a className="c-icon btn-floating btn-large waves-effect waves-light red accent-4" href="#!">{Google}</a>
        <a className="c-icon btn-floating btn-large waves-effect waves-light blue darken-3" href="#!">{LinkedIn}</a> 
    </div>
  );
};

export default Contact;
