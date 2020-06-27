import React from "react";
import styled from "styled-components";
import me from "../img/me.jpg";

const Contenedor = styled.div`
  background-color: #3f54a3;
  text-align: center;
  color: #fff;
  padding-bottom: 3rem;
  padding-top: 3rem;

  h5 {
    margin: 2rem;
    width: 40%;
    margin-left: 30rem;
    left: auto;
    right: auto;

    @media (max-width: 1024px) {
      width: 100%;
      margin-left: 0px;
    }
  }
`;

const Me = styled.img`
  width: 200px;
  max-width: 100%;
`;

const Buttom = styled.a`
  color: #3f54a3;
  margin: 0.5rem;
  font-size: 22px;
`;

const Contact = () => {
  return (
    <Contenedor className="col s12">
      <div className="center-align">
        <Me src={me} alt="" className="circle responsive-img" />
        <h3>¡Puedo ayudarte!</h3>
        <h5>
          Si tiene un proyecto que desea comenzar, cree que necesita mi ayuda
          con algo o simplemente quiere decir hola, póngase en contacto conmigo.
        </h5>
        <Buttom
          className="waves-effect waves-light btn brown lighten-4"
          href="#!"
        >
          <b>
            Contáctame <i className="material-icons">markunread</i>
          </b>
        </Buttom>
      </div>
    </Contenedor>
  );
};

export default Contact;
