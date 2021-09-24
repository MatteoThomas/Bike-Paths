import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="nav">
      <Link to="/">Dashboard</Link>
      <Link to="/signup">Sign Up </Link>
      <Link to="/paths">Paths</Link>
      <Link to="/newPath">New Path</Link>
      <Link to="/map">Map</Link>
      <Link to="/account">Account</Link>
      <Link to="/tutorials">Tutorials List</Link>
      <Link to={"/tutorials"}>Tutorial</Link>
      <Link to={"/add"}>Add Tutorial</Link>
    </div>
  );
}

export default Nav;
