import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.link1}
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <div className="form-check form-switch ms-5 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.modeBtn}
                />
                <label
                  className={`form-check-label text-${props.textmode}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.btnText}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title here",
  link1: "link1",
};
