import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import "../AppContainer.css";
import "./dashboard.css";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory;

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <div>Email: {currentUser.email}</div>
      <Link to="/update-profile" className="btn btn-primary">
        Update Profile
      </Link>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}
