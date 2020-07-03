import React from "react";
import "./Contact.css";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import me from "../../img/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Github = <FontAwesomeIcon icon={faGithub} />;
const Youtube = <FontAwesomeIcon icon={faYoutube} />;
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
          </Fade>
          <a
            className="btn-contact waves-effect waves-light btn-large white"
            href="mailto:wilmerterrero1922@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <b>
              Contáctame
            </b>
          </a>
      </div>
      <Fade top>
        <a 
          className="c-icon btn-floating btn-large waves-effect waves-light grey darken-4" 
          href="https://github.com/wilmerterrero"
          target="_blank" 
          rel="noopener noreferrer"
          >
            {Github}
        </a>
        <a 
          className="c-icon btn-floating btn-large waves-effect waves-light red accent-4" 
          href="https://www.youtube.com/channel/UCxyWgbeavnudPkYbi4YqmmQ"
          target="_blank" 
          rel="noopener noreferrer"
          >
            {Youtube}
        </a>
        <a 
          className="c-icon btn-floating btn-large waves-effect waves-light blue darken-3" 
          href="https://www.linkedin.com/in/wilmer-terrero-49540517a/"
          target="_blank" 
          rel="noopener noreferrer"
          >
            {LinkedIn}
        </a>
      </Fade> 
    </div>
    
  );
};

export default Contact;
