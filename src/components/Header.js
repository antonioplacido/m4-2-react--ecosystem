import React from "react";

import { Link, Route, BrowserRouter } from "react-router-dom";

import styled from "styled-components";

const Header = (props) => {
  return (
    <nav>
      <header>Fruit Emporium</header>
      <Link to="/">Homepage</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
