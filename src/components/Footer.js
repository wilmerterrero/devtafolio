import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import matcss from '../img/matcss-min.png';

const FooterS = styled.div`
    padding-top: 0;
`;

const FooterI = styled.div`
    font-size: 1.2rem;
    color: #595fe1ff;

    a{
        color: #595fe1ff;
    }
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

const Materialize = styled.img`
     width:25px;
     vertical-align: -0.300em;
`;

const ReactJS = <FontAwesomeIcon icon={faReact} />;

const Footer = ({ year }) => {
    return ( 
        <FooterS className="page-footer brown lighten-4">
          <div className="footer-copyright brown lighten-4">
            <FooterI className="container">
            <b>{year} © Wilmer Terrero</b>
                <a className="right" href="#!"><b>Proudly made with <Materialize src={matcss} alt="" /> and Powered by <Icon>{ReactJS}</Icon></b> </a>
            </FooterI>
          </div>
        </FooterS>
     );
}
 
export default Footer;