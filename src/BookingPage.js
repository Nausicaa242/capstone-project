import React from 'react';
import BookingForm from './BookingForm';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function BookingPage({ today, availableTimes, dispatch }) {
    return (
        <>
            <section className="booking-page">
                <div className="container">
                    <div className="booking-text">
                        <h1>Book a Table</h1>
                        <BookingForm today={today} availableTimes={availableTimes} dispatch={dispatch}/>
                    </div>
                    <div className="booking-image">
                        <img className="image" src="/images/restaurantfood.jpg" alt="Little Lemon Restaraunt Food" />
                    </div>
                </div>
            </section>
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    );
}

export default BookingPage;