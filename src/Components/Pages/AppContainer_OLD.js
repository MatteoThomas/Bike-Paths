import React, { useState } from "react";

import "./AppContainer.css";

import Nav from "./Nav";
import Header from "./Pages/Header";
import Dashboard from "./Pages/Dashboard";
import Paths from "./Pages/Paths";
import NewPath from "./Pages/NewPath";
import Map from "./Pages/Map";
import Account from "./Pages/Account";
import Footer from "./Pages/Footer";

export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState("Landing");

  const renderPage = () => {
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
    if (currentPage === "Paths") {
      return <Paths />;
    }
    if (currentPage === "New Path") {
      return <NewPath />;
    }
    if (currentPage === "Map") {
      return <Map />;
    }

    return <Account />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="appContainer">
      <Header />
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
