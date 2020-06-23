import React from "react";
import styled from "styled-components";
import Tools from "../img/languages.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";

const HTML5 = <FontAwesomeIcon icon={faHtml5} />;
const CSS = <FontAwesomeIcon icon={faCss3} />;
const JS = <FontAwesomeIcon icon={faJs} />;
const ReactJS = <FontAwesomeIcon icon={faReact} />;
const PHP = <FontAwesomeIcon icon={faPhp} />;
const SQL = <FontAwesomeIcon icon={faDatabase} />;
const Bootstrap = <FontAwesomeIcon icon={faBootstrap} />;
const Git = <FontAwesomeIcon icon={faGit} />;

const Contenedor = styled.div`
  background-color: #3f54a3;
  text-align: center;
  color: #fff;
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
    color: #3f54a3;
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
  font-size: 40px;
  line-height: 40px;
  display: block;

  @media (max-width: 768px){
      font-size: 35px;
  }
`;

const Subtitulo1 = styled.h4`
  font-size: 29px;
  line-height: 40px;
  display: block;
`;

const Subtitulo = styled.p`
  font-size: 18px;
  line-height: 40px;
  display: block;
`;

const Descripcion = styled.p`
  font-size: 11px;
`;

const Languages = () => {
  return (
    <div className="row">
      <Contenedor className="col s12">
        <Titulo>¿A qué me dedico?</Titulo>
        <Herramienta src={Tools} alt="Tools" />
        <div className="row">
          <ContenedorPeq className="col s6 card-panel hoverable offset-s1 hide-on-small-only hide-on-med-and-down">
            <Subtitulo1>Frontend Developer</Subtitulo1>
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
                <Descripcion>Vanilla, Jquery, Ajax</Descripcion>
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
                <Icon href="#!">{Git}</Icon>
                <Descripcion>Git, GitHub</Descripcion>
              </IconsInline>
            </IconList>
          </ContenedorPeq>
          <ContenedorPeq className="col s12 card-panel hoverable show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
            <h4>Frontend Developer</h4>
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
                <Descripcion>Javascript, Jquery, Ajax</Descripcion>
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
                <Icon href="#!">{Git}</Icon>
                <Descripcion>Git, GitHub</Descripcion>
              </IconsInline>
            </IconList>
          </ContenedorPeq>
        </div>
      </Contenedor>
    </div>
  );
};

export default Languages;
