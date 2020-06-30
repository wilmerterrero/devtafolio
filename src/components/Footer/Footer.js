import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import matcss from '../../img/matcss-min.png';

const ReactJS = <FontAwesomeIcon icon={faReact} />;
const year = new Date().getFullYear();

const Footer = () => {
    return (
      <div>
        <div className="f-container page-footer brown lighten-4">
          <div className="footer-copyright brown lighten-4">
            <div className="fs-container container">
            <b>{year} © Wilmer Terrero</b>
                <a className="right" href="#!"><b>Proudly made with <img src={matcss} alt="" /> and Powered by <span>{ReactJS}</span></b> </a>
            </div>
          </div>
        </div>
      </div> 
     );
}
 
export default Footer;