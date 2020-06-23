import React, { Fragment } from "react";
import styled from "styled-components";
import consularis from "../img/portfolio/consularis.png";
import consularisSys from "../img/portfolio/consularis_sistema.png";
import ovigallery from "../img/portfolio/ovigallery.png";

const Contenedor = styled.div`
  background-color: #3f54a3;
  text-align: center;
  color: #fff;
`;

const Card = styled.div`
  margin: 2rem 1rem 0.5rem;
`;

const Titulo = styled.h1`
  font-size: 40px;
  line-height: 40px;
  display: block;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const Buttom = styled.a`
  color: #3f54a3;
  font-size: 17px;
`;

const CardButtom = styled.a`
  margin: 0.5rem;
`;

const Parrafo = styled.p`
  color: #000;
`;

const NoSeVe = styled.p`
  color: #3f54a3;
  margin-top: 35rem;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

const Portfolio = () => {
  return (
    <Fragment>
      <div className="row">
        <Contenedor className="col s12">
          <Titulo>Mi Portafolio</Titulo>
          <Card className="card col s4 offset-s2 hide-on-small-only hide-on-med-and-down">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={consularis} alt="Consularis" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Consularis Service
                <i className="material-icons right">close</i>
              </span>
              <Parrafo>Sitio Web de Servicios Legales & Migratorios.</Parrafo>
              <CardButtom href="#!" className="btn disabled">
                PHP
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Bootstrap
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Jquery
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Ajax
              </CardButtom>
              <Buttom
                className="waves-effect waves-light btn brown lighten-4"
                href="www.consularisservice.com"
              >
                <b>Visitar Sitio</b>
              </Buttom>
            </div>
          </Card>
          <Card className="card col s4 hide-on-small-only hide-on-med-and-down">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={consularisSys} alt="Consularis" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Consularis Service Sistema de Administración
                <i className="material-icons right">close</i>
              </span>
              <Parrafo>
                Sistema de Administración: con inicio de sesión, manejo de
                usuarios, manejo de formularios, envío de correos y otras
                herramientas de Administración.
              </Parrafo>
              <CardButtom href="#!" className="btn disabled">
                PHP
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Bootstrap
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Jquery
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Ajax
              </CardButtom>
            </div>
          </Card>
          <Card className="card col s4 offset-s2 hide-on-small-only hide-on-med-and-down">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={ovigallery} alt="Consularis" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Ovi Gallery<i className="material-icons right">close</i>
              </span>
              <Parrafo>Landing page de la galería de arte Ovi Gallery.</Parrafo>
              <CardButtom href="#!" className="btn disabled">
                Bootstrap
              </CardButtom>
            </div>
          </Card>
          <br />
          <NoSeVe className="hide-on-small-only hide-on-med-and-down">
            Here is some more information about this product that is only
            revealed once clicked on. Here is some more information about this
            product that is only revealed once clicked on. Here is some more
            information about this product that is only revealed once clicked
            on. Here is some more information about this product that is only
            revealed once clicked on. Here is some more information about this
            product that is only revealed once clicked on. Here is some more
            information about this product that is only revealed once clicked
            on.
          </NoSeVe>
          {/* MOBILE */}
          <Card className="card col s12 show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={consularis} alt="Consularis" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Consularis Service
                <i className="material-icons right">close</i>
              </span>
              <Parrafo>Sitio Web de Servicios Legales & Migratorios.</Parrafo>
              <Buttom
                className="waves-effect waves-light btn brown lighten-4"
                href="www.consularisservice.com"
              >
                <b>Visitar Sitio</b>
              </Buttom>
              <br />
              <CardButtom href="#!" className="btn disabled">
                PHP
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Bootstrap
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Jquery
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Ajax
              </CardButtom>
            </div>
          </Card>
          <Card className="card col s12 show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={consularisSys} alt="Consularis" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Consularis Service Sistema de Administración
                <i className="material-icons right">close</i>
              </span>
              <Parrafo>
                Sistema de Administración: con inicio de sesión, manejo de
                usuarios, manejo de formularios, envío de correos y otras
                herramientas de Administración.
              </Parrafo>
              <CardButtom href="#!" className="btn disabled">
                PHP
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Bootstrap
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Jquery
              </CardButtom>
              <CardButtom href="#!" className="btn disabled">
                Ajax
              </CardButtom>
            </div>
          </Card>
          <Card className="card col s12 show-on-small show-on-medium hide-on-large-only hide-on-med-and-up">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={ovigallery} alt="Consularis" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Ovi Gallery<i className="material-icons right">close</i>
              </span>
              <Parrafo>Landing page de la galería de arte Ovi Gallery.</Parrafo>
              <CardButtom href="#!" className="btn disabled">
                Bootstrap
              </CardButtom>
            </div>
          </Card>
        </Contenedor>
      </div>
    </Fragment>
  );
};

export default Portfolio;
