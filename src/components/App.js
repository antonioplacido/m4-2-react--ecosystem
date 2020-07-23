import React from "react";

import Header from "../components/Header";
import About from "../components/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";

const Homepage = () => {
  return <span>Home</span>;
};

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
