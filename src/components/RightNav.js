import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 10rem;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #c5cae9;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    margin-right: 0rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const Icons = styled.a`
  font-size: 1.4rem;
  color: #3f54a3;

  &:hover{
    color: #f44336;
  }

  @media (max-width: 768px){
      color: #fff;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Icons href="#!">
          <b>Inicio</b>
        </Icons>
      </li>
      <li>
        <Icons href="#!">
          <b>Skills</b>
        </Icons>
      </li>
      <li>
        <Icons href="#!">
          <b>Experiencia</b>
        </Icons>
      </li>
      <li>
        <Icons href="#!">
          <b>Portafolio</b>
        </Icons>
      </li>
    </Ul>
  );
};

export default RightNav;
