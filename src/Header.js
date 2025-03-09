import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img className="logo" src="/images/logo.jpg" alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}

export default Header;