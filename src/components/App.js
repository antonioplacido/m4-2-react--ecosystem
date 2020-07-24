import React from "react";

import Homepage from "../components/Homepage";
import Header from "../components/Header";
import About from "../components/About";
import ItemDetails from "../components/ItemDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
