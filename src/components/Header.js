import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import img from "../img/WilmerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import dominican from '../img/dominican-republic.svg';
import hand from '../img/waving-hand.png';

const Github = <FontAwesomeIcon icon={faGithub} />;
const Google = <FontAwesomeIcon icon={faGoogle} />;
const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />;

const Logo = styled.img`
  width: 530px;
  max-width: 100%;
  display: block;
  float: left;
  margin: 0px 15px 15px 0px;
  margin-left: 5rem;
  margin-top: 2rem;

  @media(max-width: 992px){
      margin-left:0px;
  }
`;

const Greetings = styled.div`
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

const Button = styled.a`
    color: #3f54a3;
    margin: 0.5rem;
    font-size:22px;
`;

const Icon = styled.a`
    margin: 0.5rem;
    font-size: 22px;
    margin-bottom: 2rem;
`;

const DO = styled.img`
     width:25px;
     margin-right: 0.6rem;
`;

const Waving = keyframes`
    0% { transform: rotate(0deg); }
    80% { transform: rotate(0deg); }
    85% { transform: rotate(8deg); }
    95% { transform: rotate(-8deg); }
    100% { transform: rotate(0deg); }
`;

const WavingHand = styled.img`
     width:45px;
     animation: ${Waving} 2s linear infinite;
`;

const Header = () => {
  return (
    <div className="row">
      <div className="col s10 card-pannel offset-s1">
        <Greetings>
          <Logo src={img} alt="foto" />
          <h1>¡Hola! Soy Wilmer <WavingHand src={hand} /></h1>
          <p>
            Soy un dominicano <DO src={dominican} />
            aficionado por la tecnología. Actualmente me dedico al Desarrollo de Páginas Web como Freelancer. Me encanta aprender y enseñar a otros.
            ¡Disfruta mi portafolio!
          </p>
          <Icon className="btn-floating btn-large waves-effect waves-light grey darken-4" href="#!">{Github}</Icon>
          <Icon className="btn-floating btn-large waves-effect waves-light red accent-4" href="#!">{Google}</Icon>
          <Icon className="btn-floating btn-large waves-effect waves-light blue darken-3" href="#!">{LinkedIn}</Icon>
          <br />
          <Button className="waves-effect waves-light btn-large brown lighten-4" href="#!"><b>Contáctame</b></Button>
          <Button className="waves-effect waves-light btn-large brown lighten-4" href="#!"><b>Ver mi CV</b></Button>
        </Greetings>
      </div>
    </div>
  );
};

export default Header;
