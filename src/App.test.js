import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from './api';

const mockNavigate = jest.fn(); // Define mockNavigate

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate, // Use mockNavigate
}));

describe('BookingForm HTML5 validation', () => {
    test('Date input has required and min attributes', () => {
        render(
            <MemoryRouter>
                <BookingForm today="2023-01-01" availableTimes={[]} dispatch={jest.fn()} />
            </MemoryRouter>
        );
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('required');
        expect(dateInput).toHaveAttribute('min', '2023-01-01');
    });

    test('Time select has required attribute', () => {
        render(
            <MemoryRouter>
                <BookingForm today="2023-01-01" availableTimes={[]} dispatch={jest.fn()} />
            </MemoryRouter>
        );
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute('required');
    });

    test('Guests input has min and max attributes', () => {
        render(
            <MemoryRouter>
                <BookingForm today="2023-01-01" availableTimes={[]} dispatch={jest.fn()} />
            </MemoryRouter>
        );
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });
});

describe('BookingForm JavaScript validation', () => {
    test('Valid form submission', async () => {
        const mockDispatch = jest.fn();
        render(
            <MemoryRouter>
                <BookingForm today="2023-01-01" availableTimes={['18:00']} dispatch={mockDispatch} />
            </MemoryRouter>
        );

        await act(async () => {
            fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-01-02' } });
            fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
            fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
            fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });
            fireEvent.submit(screen.getByRole('form'));
        });

        expect(mockNavigate).toHaveBeenCalledWith('/booking-confirmed'); // Assert that mockNavigate is called
    });

    test('Invalid form submission shows errors', async () => {
        render(
            <MemoryRouter>
                <BookingForm today="2023-01-01" availableTimes={[]} dispatch={jest.fn()} />
            </MemoryRouter>
        );

        await act(async () => {
            fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
            fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '' } });
            fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
            fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: '' } });
            fireEvent.submit(screen.getByRole('form'));
        });

        expect(screen.getByText(/date is required/i)).toBeInTheDocument();
        expect(screen.getByText(/please select a time for your reservation/i)).toBeInTheDocument();
        expect(screen.getByText(/please select at least 2 guests/i)).toBeInTheDocument();
        expect(screen.getByText(/please let us know if this is a special occasion/i)).toBeInTheDocument();
    });
});

describe('initializeTimes function', () => {
    test('returns the correct array of times', () => {
        const today = new Date();
        const expectedTimes = fetchAPI(today);
        const result = initializeTimes();
        expect(result.availableTimes).toEqual(expectedTimes);
    });
});

describe('updateTimes function', () => {
    test('returns the correct state for "SELECT_DATE" action', () => {
        const selectedDate = '2025-03-28';
        const expectedTimes = fetchAPI(new Date(selectedDate));
        const initialState = { availableTimes: [] };
        const action = { type: 'SELECT_DATE', date: selectedDate };
        const result = updateTimes(initialState, action);
        expect(result.availableTimes).toEqual(expectedTimes);
    });

    test('returns the same state for an unknown action type', () => {
        const initialState = { availableTimes: ['17:00', '18:00', '19:00'] };
        const action = { type: 'UNKNOWN_ACTION' };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });
});