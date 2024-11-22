import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Food Zone </h1>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
         
          <li><Link to="/cart"></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/auth">Sign up</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;