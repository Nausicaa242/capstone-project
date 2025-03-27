import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <div className="container">
        <Link className="logo" to="/">
          <img src="/images/logo.png" alt="Little Lemon Logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;