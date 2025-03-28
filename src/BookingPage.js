import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
    return (
        <section className="booking-page">
            <div className="container">
                <h1>Book a Table</h1>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
            </div>
        </section>
    );
}

export default BookingPage;