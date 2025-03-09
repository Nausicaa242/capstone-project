import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <img className="" src="/images/footer-logo.jpg" alt="Little Lemon Logo" />
                <div className="footer-column-links">
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
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
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;