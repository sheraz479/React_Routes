import React from "react";
import { Link } from "react-router-dom";
import './App.css'

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary text">
        <div className="container-fluid">
          <h3>Sheraz Khan</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-Link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;
