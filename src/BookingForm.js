import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ today, availableTimes = [], dispatch }) {
    const navigate = useNavigate();
    const [date, setDate] = useState(today);
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('none');

    useEffect(() => {
        dispatch({ type: 'SELECT_DATE', date: today }); // Fetch available times for today's date on initial render
    }, [dispatch, today]);

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'SELECT_DATE', date: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion: ${occasion}`);
        navigate('/booking-confirmed'); // Navigate to the booking confirmation page
    };

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
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
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