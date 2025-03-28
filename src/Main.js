import React, { useReducer } from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

export function initializeTimes() {
    return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]
}

export function updateTimes(state, action) {
    switch (action.type) {
        case 'SELECT_DATE':
            return state;
        default:
            return state;
    }
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
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