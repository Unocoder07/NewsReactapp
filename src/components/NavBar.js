import React, { Component } from "react";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link active" to="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/general">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/technology">
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
