import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const NavHeader = styled.h1`
  font-family: sans-serif;
  align-items: center;
`;

const NavBar = styled.nav`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-space-between;
`;

const HotLinks = styled.div`
  /* padding-top: 45px; */
  padding: 25px;
  position: fixed;
  right: 5%;
`;

const NavLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: blueviolet;
  font-weight: bold;
  font-size: 30px;
  text-align: right;
`;

// const Link = styled;

const Header = (props) => {
  return (
    <NavBar>
      <NavHeader>Fruit Emporium</NavHeader>
      <HotLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </HotLinks>
    </NavBar>
  );
};

export default Header;
