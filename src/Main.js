import React, { useReducer } from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import ConfirmedBooking from './ConfirmedBooking'; // Import the ConfirmedBooking component
import { Routes, Route } from 'react-router-dom';
import { fetchAPI } from './api'; // Note: module import instead of global import

export function initializeTimes() {
    const today = new Date();
    const availableTimes = fetchAPI(today); // Fetch available times for today's date
    return { today, availableTimes };
}

export function updateTimes(state, action) {
    switch (action.type) {
        case 'SELECT_DATE':
            const selectedDate = new Date(action.date);
            return { ...state, availableTimes: fetchAPI(selectedDate) }; // Fetch available times for the selected date
        default:
            return state;
    }
}

function Main() {
    const [{ today, availableTimes }, dispatch] = useReducer(updateTimes, [], initializeTimes);

    // Format today to YYYY-MM-DD
    const formattedToday = today.toISOString().split('T')[0];

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage today={formattedToday} availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
}

export default Main;