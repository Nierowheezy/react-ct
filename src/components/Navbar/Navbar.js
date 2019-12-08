import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";
const App = () => {
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="tours of city"
        style={{ width: "80px", height: "80px" }}
      />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default App;
