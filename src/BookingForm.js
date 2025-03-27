import React, { useState } from 'react';

function BookingForm({ availableTimes }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17.00');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('none');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion: ${occasion}`);
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date" className="lead">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="res-time" className="lead">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>
            <label htmlFor="guests" className="lead">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1" max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            <label htmlFor="occasion" className="lead">Occasion</label>
            <select
                id="occasion"
                value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button className="button" type="submit">Make Your reservation</button>
        </form>
    );
}

export default BookingForm;