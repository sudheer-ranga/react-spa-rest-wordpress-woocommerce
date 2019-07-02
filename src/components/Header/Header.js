import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './../Navigation/Navigation';
import './header.scss';

function Header() {
  return (
    <div className="header row">
      <div className="four columns logo-container">
        <h1 className="logo-text">
          <Link className="logo-link" to="/">
            React WP
          </Link>
        </h1>
      </div>
      <div className="eight columns logo-container">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
