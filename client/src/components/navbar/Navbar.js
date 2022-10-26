import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/zaio-logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="company logo" />
      </Link>
      <nav className="navbar-links">
        <ul>
          <li className="navbar-link">
            <Link to="/companies">Explore Companies</Link>
          </li>
          <li className="navbar-link">
            <Link to="/postjob">Post a Job </Link>
          </li>
        </ul>
      </nav>
      <aside className="navbar-right">
        <figure className="tooltip">
          <Link to="/settings">
            <span className="material-symbols-outlined nav-icon">settings</span>
          </Link>
          <figcaption className="tooltip-text">Settings</figcaption>
        </figure>
        <figure className="tooltip">
          <Link to="/profile">
            <span className="material-symbols-outlined nav-icon">person</span>
          </Link>
          <figcaption className="tooltip-text">Profile</figcaption>
        </figure>
        <figure className="tooltip">
          <span className="material-symbols-outlined nav-icon">logout</span>
          <figcaption className="tooltip-text">Logout</figcaption>
        </figure>
      </aside>
    </header>
  );
};

export default Navbar;
