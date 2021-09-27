import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./AppContainer.css";
import { AuthProvider } from "../contexts/AuthContext";

import Nav from "./Nav";
import Header from "./Pages/Header";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Signup";
import Login from "./Login";
import Forgot from "./Forgot";
import UpdateProfile from "./UpdateProfile";

import Paths from "./Pages/Paths";
import NewPath from "./Pages/NewPath";
import Map from "./Map";
import Account from "./Pages/Account";
import Footer from "./Pages/Footer";

import AddTutorial from "./AddTutorial";
import Tutorial from "./Tutorial";
import TutorialsList from "./TutorialsList";

export default function AppContainer() {
  return (
    <div>
      <Header />
      <main>
        <Nav />
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/" component={Dashboard} exact />
            <PrivateRoute
              path="/update-profile"
              component={UpdateProfile}
              exact
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={Forgot} />
            <Route path="/paths" component={Paths} />
            <Route path="/newPath" component={NewPath} />
            <Route path="/map" component={Map} />
            <Route path="/account" component={Account} />

            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route component={Error} />
          </Switch>
        </AuthProvider>
      </main>
      <Footer />
    </div>
  );
}
