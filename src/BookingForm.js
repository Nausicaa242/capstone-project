import React, { useState } from 'react';

function BookingForm({ availableTimes = [], dispatch }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17.00');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('none');

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'SELECT_DATE', date: selectedDate });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion: ${occasion}`);
    }

    return (
        <form className="booking-form" role="form" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="res-date" className="lead">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    aria-label="Choose date"
                    value={date}
                    onChange={handleDateChange}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="res-time" className="lead">Choose time</label>
                <select
                    id="res-time"
                    aria-label="Choose time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {availableTimes.map((availableTimes) => (
                        <option key={availableTimes} value={availableTimes}>
                            {availableTimes}
                        </option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="guests" className="lead">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1" max="10"
                    id="guests"
                    aria-label="Number of guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="occasion" className="lead">Occasion</label>
                <select
                    id="occasion"
                    aria-label="Occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </fieldset>
            <button className="button" type="submit" aria-label="Make Your reservation">Make Your reservation</button>
        </form>
    );
}

export default BookingForm;