import React from "react";
import styled from "styled-components";
import portfolio from "../img/rightnavbar/portfolio.png";
import products from "../img/rightnavbar/products.png";
import cursos from "../img/rightnavbar/cursos.png";
import blog from "../img/rightnavbar/blog.png"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 10rem;
  li {
    padding: 15px 7px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(34, 58, 106);
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

const MiniIcons = styled.img`
     width:45px;
     display: none;

     @media (max-width: 768px){
       display: block;
     }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Icons href="#!">
          <MiniIcons src={portfolio} alt="" /><b>Portafolio</b>
        </Icons>
      </li>
      <li>
        <Icons href="#!">
        <MiniIcons src={products} alt="" /><b>Productos</b>
        </Icons>
      </li>
      <li>
        <Icons href="#!">
        <MiniIcons src={cursos} alt="" /><b>Cursos</b>
        </Icons>
      </li>
      <li>
        <Icons href="#!">
        <MiniIcons src={blog} alt="" /><b>Blog</b>
        </Icons>
      </li>
    </Ul>
  );
};

export default RightNav;
