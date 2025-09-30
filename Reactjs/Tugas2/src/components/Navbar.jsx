import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">PhotoMate</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="/#portfolio">Portfolio</a></li>
            <li className="nav-item"><NavLink className="nav-link" to="/team">Team</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;