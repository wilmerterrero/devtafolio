import React from "react";
import {Fade} from "react-reveal";
import styled from "styled-components";
import Tools from "../../img/skills.png";
import waveTop from "../../img/waveTop.svg";
import waveBottom from "../../img/waveBottom.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HTML5 = <FontAwesomeIcon icon={faHtml5} />;
const CSS = <FontAwesomeIcon icon={faCss3} />;
const JS = <FontAwesomeIcon icon={faJs} />;
const ReactJS = <FontAwesomeIcon icon={faReact} />;
const PHP = <FontAwesomeIcon icon={faPhp} />;
const SQL = <FontAwesomeIcon icon={faDatabase} />;
const Bootstrap = <FontAwesomeIcon icon={faBootstrap} />;
const Github = <FontAwesomeIcon icon={faGithub} />;

const Contenedor = styled.div`
  background-color: #8a2be2;
  text-align: center;
  color: #fff;
  overflow: hidden;
  position: relative;
`;

const WaveTop = styled.img`
  position: relative;
  top: 7px;
`;

const WaveBottom = styled.img`
  position: relative;
  bottom: 7px;
`;

const ContenedorPeq = styled.div`
  background-color: #fff;
  color: #000;
`;

const Herramienta = styled.img`
  width: 430px;
  max-width: 100%;
  display: block;
  float: right;
  margin: 0px 15px 15px 0px;
  margin-right: 7rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    margin-right: 0px;
    width: 230px;
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const Icon = styled.a`
  margin: 3rem;
  font-size: 55px;
  margin-bottom: 2rem;
  color: #808080;

  &:hover{
    color: #8a2be2;
  }
`;

const IconList = styled.ul`
  padding-left: 0;
  list-style: none;
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
`;

const IconsInline = styled.li`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Titulo = styled.h1`
  font-size: 2.28rem;
  line-height: 40px;
  display: block;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;

  &:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin: 10px auto;
  width: 10%;
  height: 3px;
  background: #fff;
}

  @media (max-width: 768px){
      font-size: 35px;
  }
`;

const Subtitulo1 = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 40px;
  display: block;
  text-transform: uppercase;
  color: #9b9b9b;
`;

const Subtitulo = styled.p`
  font-size: 17px;
  line-height: 40px;
  display: block;
`;

const Descripcion = styled.p`
  font-size: 11px;
  text-transform: uppercase;
`;

const Languages = () => {
  return (
    <div className="row">
      <WaveTop src={waveTop} alt="" />
      <Contenedor className="col s12" id="skills">
        <Titulo>¿A qué me dedico?</Titulo>
        <Fade left duration={1000}>
          <Herramienta src={Tools} alt="Tools" />
        </Fade>
        <div className="row">
          <Fade right duration={1000}>
          <ContenedorPeq className="col s6 card-panel hoverable offset-s1 hide-on-small-only hide-on-med-and-down">
            <Subtitulo1>Desarrollo Web</Subtitulo1>
            <Subtitulo>Trabajo con amor con estas tecnologías</Subtitulo>
            <IconList>
              <IconsInline>
                <Icon href="#!">{HTML5}</Icon>
                <Descripcion>HTML5</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{CSS}</Icon>
                <Descripcion>CSS3</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{JS}</Icon>
                <Descripcion>Javascript</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{ReactJS}</Icon>
                <Descripcion>Reactjs</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{PHP}</Icon>
                <Descripcion>PHP</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{SQL}</Icon>
                <Descripcion>SQL-Database</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{Bootstrap}</Icon>
                <Descripcion>Boostrap</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{Github}</Icon>
                <Descripcion>Github</Descripcion>
              </IconsInline>
            </IconList>
          </ContenedorPeq>
          </Fade>
          <Fade top duration={1000} distance="20px">
          <ContenedorPeq className="col s12 card-panel hoverable show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
            <h4>Desarrollo Web</h4>
            <Subtitulo>Trabajo con amor con estas tecnologías</Subtitulo>
            <IconList>
              <IconsInline>
                <Icon href="#!">{HTML5}</Icon>
                <Descripcion>HTML5</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{CSS}</Icon>
                <Descripcion>CSS3</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{JS}</Icon>
                <Descripcion>Javascript</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{ReactJS}</Icon>
                <Descripcion>Reactjs</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{PHP}</Icon>
                <Descripcion>PHP</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{SQL}</Icon>
                <Descripcion>SQL-Database</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{Bootstrap}</Icon>
                <Descripcion>Boostrap</Descripcion>
              </IconsInline>
              <IconsInline>
                <Icon href="#!">{Github}</Icon>
                <Descripcion>GitHub</Descripcion>
              </IconsInline>
            </IconList>
          </ContenedorPeq>
          </Fade>
        </div>
      </Contenedor>
      <WaveBottom src={waveBottom} alt="" />
    </div>
  );
};

export default Languages;
