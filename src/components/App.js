import React from "react";

import Header from "../components/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const About = () => {
  return <span>About</span>;
};

const Homepage = () => {
  return <span>Homepage</span>;
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
