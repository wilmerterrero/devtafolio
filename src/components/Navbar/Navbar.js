import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import emoji from "react-easy-emoji";
import {Image} from 'cloudinary-react';
import "./Navbar.css";

const Icons = styled.a`
  font-size: 1.4rem;
  margin: 2rem;

  &:hover {
    color: #f44336;
  }

  @media (max-width: 992px) {
    color: #fff;
  }
`;

const SIcons = styled.b`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

const LIcons = styled.b`
  display: block;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Fade top duration={1000} distance="20px">
      <Fragment>
        <header className="header">
          <a href="/" className="logo">
            <Image cloudName="wterrerocloud" publicId="myportfolio/isologotipo_ijq5w7.png" width="85px" />
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Icons href="/">
                <LIcons>Inicio</LIcons>
                <SIcons>{emoji("📌 Inicio")}</SIcons>
              </Icons>
            </li>
            <li>
              <Icons href="#portfolio">
                <LIcons>Portafolio</LIcons>
                <SIcons>{emoji("💼 Portafolio")}</SIcons>
              </Icons>
            </li>
            <li>
              <Icons href="#skills">
                <LIcons>Skills</LIcons>
                <SIcons>{emoji("🎯 Skills")}</SIcons>
              </Icons>
            </li>
            <li>
              <Icons href="#contact">
                <LIcons>Contacto</LIcons>
                <SIcons>{emoji("🤙 Contacto")}</SIcons>
              </Icons>
            </li>
          </ul>
        </header>
      </Fragment>
    </Fade>
  );
};

export default Navbar;
