import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link" to="/store">
              Store
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/about">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
