import React from 'react';
import { Link } from "react-router-dom";

function CalltoAction() {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta-text">
                    <h1>Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link className="button" to="/booking">Reserve a Table</Link>
                </div>
                <div className="cta-image">
                    <img className="restaurant-food" src="/images/restaurantfood.jpg" alt="Little Lemon Restaraunt Food" />
                </div>
            </div>
        </section>
    );
}

export default CalltoAction;