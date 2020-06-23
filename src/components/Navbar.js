import React, { Fragment } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Logo = styled.a`
  font-size: 1.8rem;
  color: #595fe1ff;
  margin-left: 18rem;

  @media (max-width: 768px) {
      margin-left: 0rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0 0 0;
`;

const Navbar = ({ tittle }) => {
  return (
    <Fragment>
      <div className="navbar-fixed">
        <Nav className="nav-wrapper brown lighten-4">
          <div className="container">
            <Logo href="#!">
              <b>{tittle}</b>
            </Logo>
          </div>
          <Burger />
        </Nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
