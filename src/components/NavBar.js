import React, { Component } from 'react';

export default class NavBar extends Component {


  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Ted Shin</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
