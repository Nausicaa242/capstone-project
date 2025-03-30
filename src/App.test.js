import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from './api'; // Import fetchAPI to use its real implementation

// test('Renders the BookingPage heading', () => {
//   render(<BookingPage />);
//   const headingElement = screen.getByText("Book a Table");
//   expect(headingElement).toBeInTheDocument();
// });

// test('BookingForm can be submitted by the user', () => {
//   // Mock available times and dispatch function
//   const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//   const mockDispatch = jest.fn(); // Create a mock function for dispatch

//   // Render BookingForm with mock props
//   render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

//   // Simulate user inputs
//   fireEvent.change(screen.getByLabelText(/choose date/i), {
//       target: { value: '2025-03-28' },
//   });
//   fireEvent.change(screen.getByLabelText(/choose time/i), {
//       target: { value: '18:00' },
//   });
//   fireEvent.change(screen.getByLabelText(/number of guests/i), {
//       target: { value: '4' },
//   });
//   fireEvent.change(screen.getByLabelText(/occasion/i), {
//       target: { value: 'Birthday' },
//   });

//   // Submit the form
//   fireEvent.submit(screen.getByRole('form'));

//   // Assert that dispatch is called with correct arguments
//   expect(mockDispatch).toHaveBeenCalled();
// });

describe('initializeTimes function', () => {
  test('returns the correct array of times', () => {
    const today = new Date();
    const expectedTimes = fetchAPI(today); // Use fetchAPI to get expected times
    const result = initializeTimes();
    expect(result.availableTimes).toEqual(expectedTimes); // Check that availableTimes matches expectedTimes
  });
});

describe('updateTimes function', () => {
  test('returns the correct state for "SELECT_DATE" action', () => {
    const selectedDate = '2025-03-28';
    const expectedTimes = fetchAPI(new Date(selectedDate)); // Use fetchAPI to get expected times
    const initialState = { availableTimes: [] };
    const action = { type: 'SELECT_DATE', date: selectedDate };
    const result = updateTimes(initialState, action);
    expect(result.availableTimes).toEqual(expectedTimes); // Check that availableTimes matches expectedTimes
  });

  test('returns the same state for an unknown action type', () => {
    const initialState = { availableTimes: ['17:00', '18:00', '19:00'] };
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState); // Ensure state remains unchanged
  });
});