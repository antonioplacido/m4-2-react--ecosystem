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
  display: flex;
  align-items: center;
  justify-content: space-space-between;
`;

const HotLinks = styled.div`
  padding: 25px;
  position: absolute;
  right: 16px;
  display: block;
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
