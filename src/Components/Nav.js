import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="nav">
      <Link to="/">Landing Page </Link>
      <Link to="/paths">Paths</Link>
      <Link to="/newPath">New Path</Link>
      <Link to="/map">Map</Link>
      <Link to="/account">Account</Link>
      <Link to="/tutorials">Tutorials List</Link>
      <Link to="/add">Add Tutorial</Link>
      <Link to="/tutorials/:id">Tutorial</Link>
    </div>
  );
}

export default Nav;
