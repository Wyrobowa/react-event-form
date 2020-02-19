import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="navbar-nav">
      <Link to="#" className="nav-item nav-link">Events list</Link>
      <Link to="#" className="nav-item nav-link">Add event</Link>
    </div>
  </nav>
);

export default Header;
