import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);

    return (
        <section className="booking-page">
            <div className="container">
                <h1>Book a Table</h1>
                <BookingForm availableTimes={availableTimes} />
            </div>
        </section>
    );
}

export default BookingPage;