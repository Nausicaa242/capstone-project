import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-column-links">
                    <Link to="/">
                        <img className="footer-logo" src="/images/footer-logo.jpg" width="150" alt="Little Lemon Logo" />
                    </Link>
                </div>
                <div className="footer-column-links">
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="footer-column-links">
                <h2>Contact</h2>
                    <ul>
                        <li><a href="/">Address</a></li>
                        <li><a href="/">Phone Number</a></li>
                        <li><a href="/">Email</a></li>
                    </ul>
                </div>
                <div className="footer-column-links">
                    <h2>Social Media Links</h2>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;