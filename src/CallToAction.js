import React from 'react';
import { Link } from "react-router-dom";

function CalltoAction() {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta-text">
                    <h1>Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <p className="lead">Little Lemon is a local family-owned restaurant that takes pride in serving fresh, flavorful dishes made with love and the finest ingredients.</p>
                    <Link className="button" to="/booking">Reserve a Table</Link>
                </div>
                <div className="cta-image">
                    <img className="image" src="/images/restaurantfood.jpg" alt="Little Lemon Restaraunt Food" />
                </div>
            </div>
        </section>
    );
}

export default CalltoAction;