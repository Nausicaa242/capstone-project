// Import the functions to test
import { initializeTimes, updateTimes } from './Main';

describe('initializeTimes function', () => {
    test('returns the correct array of times', () => {
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const result = initializeTimes();
        expect(result).toEqual(expectedTimes);
    });
});

describe('updateTimes function', () => {
    test('returns the same state for "SELECT_DATE" action', () => {
        const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const action = { type: 'SELECT_DATE', date: '2025-03-28' };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });

    test('returns the same state for an unknown action type', () => {
        const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const action = { type: 'UNKNOWN_ACTION' };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });
});