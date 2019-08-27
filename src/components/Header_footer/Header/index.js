import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="forum">
                Forum{""}
                <span>X</span>
              </h1>
            </div>
            <div className="col-4">
              <Link
                to="/register_login"
                className="btn btn-outline-primary"
                role="button"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-success"
                role="button"
              >
                Sign-Up
              </Link>
            </div>
          </div>
        </div>
        <header>
          <div className="menu-toggle" id="hamburger">
            <i className="fas fa-bars" />
          </div>
          <div className="overlay" />
          <div className="container">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/forum">forum</Link>
                </li>
                <li>
                  <Link to="/forum_modal_rule">rule</Link>
                </li>
                <li>
                  <Link to="/event">donation</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </section>
    );
  }
}

export default Header;
