import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppContainer.css";

import Nav from "./Nav";
import Header from "./Pages/Header";
import Dashboard from "./Pages/Dashboard";
import Paths from "./Pages/Paths";
import NewPath from "./Pages/NewPath";
import Map from "./Pages/Map";
import Account from "./Pages/Account";
import Footer from "./Pages/Footer";

import TutorialsList from "./TutorialsList";
import Tutorial from "./Tutorial";
import AddTutorial from "./AddTutorial";

export default function AppContainer() {
  return (
    <div>
      <Header />
      <main>
        <Nav />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/paths" component={Paths} />
          <Route path="/newPath" component={NewPath} />
          <Route path="/map" component={Map} />
          <Route path="/account" component={Account} />

          <Route exact path="/tutorials" component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
