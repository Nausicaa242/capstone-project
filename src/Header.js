import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src="/images/logo.jpg" alt="Little Lemon Logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;