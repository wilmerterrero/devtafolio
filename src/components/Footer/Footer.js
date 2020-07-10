import React from 'react';
import "./Footer.css";
import DO from '../../img/dominican-republic.svg';

const year = new Date().getFullYear();

const Footer = () => {
    return (
      <div>
        <div className="f-container page-footer white">
          <div className="footer-copyright white">
            <div className="fs-container container">
                <b>{year} © Wilmer Terrero</b>
                <a className="right" href="#!"><b>Made with love from <img src={DO} alt="" /></b> </a>
            </div>
          </div>
        </div>
      </div> 
     );
}
 
export default Footer;