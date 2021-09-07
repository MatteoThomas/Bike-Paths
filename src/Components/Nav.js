import React from "react";

import "./AppContainer.css";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="parent">
      <div className="nav">
        <ul className="nav nav-tabs">
          <h1>{/* Bike <span>Paths</span> */}</h1>
          <li className="nav-item">
            <a
              href="#landing"
              onClick={() => handlePageChange("Landing")}
              className={
                currentPage === "Landing" ? "nav-link active" : "nav-link"
              }
            >
              Landing
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#paths"
              onClick={() => handlePageChange("Paths")}
              className={
                currentPage === "Paths" ? "nav-link active" : "nav-link"
              }
            >
              Paths
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#newPath"
              onClick={() => handlePageChange("New Path")}
              className={
                currentPage === "New Path" ? "nav-link active" : "nav-link"
              }
            >
              New Post
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#map"
              onClick={() => handlePageChange("Map")}
              className={currentPage === "Map" ? "nav-link active" : "nav-link"}
            >
              Map
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#account"
              onClick={() => handlePageChange("Account")}
              className={
                currentPage === "Account" ? "nav-link active" : "nav-link"
              }
            >
              Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
