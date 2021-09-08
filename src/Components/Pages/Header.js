import { Link } from "react-router-dom";

import "../AppContainer.css";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Bike Paths</h1>
      </Link>
    </div>
  );
}
