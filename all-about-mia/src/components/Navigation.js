import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/sisters">Sisters</Link></li>
        <li><Link to="/brothers">Brothers</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
