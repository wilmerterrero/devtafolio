import React from "react";
import styled from "styled-components";
import img from "../img/experience.png";

const Container = styled.div`
  flex: 1 1;
  overflow: auto;
  width: 100%;
  margin-bottom: 30px;

  h1 {
    font-size: 40px;
    line-height: 40px;
    display: block;
  }

  p {
    font-size: 24px;
    line-height: 40px;
    display: block;
  }
`;

const Logo = styled.img`
  width: 530px;
  max-width: 100%;
  display: block;
  float: left;
  margin: 0px 15px 15px 0px;
  margin-left: 5rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;

const ProgressBar = styled.div`
    height: 8px;
    width: 50%;

   @media (max-width: 992px) {
     width: 100%;
  }
`;

const Frontend = styled.div`
    width: 70%;
`;

const Programming = styled.div`
    width: 55%;
`;

const Backend = styled.div`
    width: 20%;
`;

const Experience = () => {
  return (
    <div className="row">
      <div className="col s10 card-pannel offset-s1">
        <Container>
          <Logo src={img} alt="foto" />
          <h1>Mi Experiencia</h1>
          <p>Frontend</p>
          <ProgressBar className="progress">
            <Frontend className="determinate"></Frontend>
          </ProgressBar>
          <p>Programación</p>
          <ProgressBar className="progress">
            <Programming className="determinate"></Programming>
          </ProgressBar>
          <p>Backend</p>
          <ProgressBar className="progress">
            <Backend className="determinate"></Backend>
          </ProgressBar>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
