import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const NavHeader = styled.h1`
  font-family: sans-serif;
  align-items: center;
  display: block;
`;

const NavBar = styled.nav`
  font-size: 30px;
  min-width: 10vh;
  display: inline-flex;
`;

const HotLinks = styled.div`
  position: absolute;
  right: 16px;
  padding-top: 3vh;
  display: block;
  display: flex;
`;

const NavLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: blueviolet;
  font-weight: bold;
  display: block;
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
