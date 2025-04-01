import React from 'react';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Menu() {
    return (
        <>
            <section className="booking-confirmation">
                <div className="container">
                    <div className="booking-confirmation-text">
                        <h1>Booking Confirmation</h1>
                        <h2 className="subtitle">Thank you for booking with us!</h2>
                        <p className="lead">If you have any questions or need to make changes to your reservation, please don't hesitate to contact us.</p>
                        <p className="lead">We look forward to serving you soon!</p>
                    </div>
                    <div className="booking-confirmation-image">
                        <img className="image" src="/images/restaurant-chef-b.jpg" alt="Little Lemon Restaraunt Food" />
                    </div>
                </div>
            </section>
            <CustomersSay />
            <Chicago />
        </>
    );
}

export default Menu;