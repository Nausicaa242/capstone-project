import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ today, availableTimes, dispatch }) {
    return (
        <section className="booking-page">
            <div className="container">
                <h1>Book a Table</h1>
                <BookingForm today={today} availableTimes={availableTimes} dispatch={dispatch}/>
            </div>
        </section>
    );
}

export default BookingPage;