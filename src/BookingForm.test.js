import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

// Test for static text rendering

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

// Test for initializeTimes function

test('initializeTimes returns correct initial times', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

// Test for updateTimes function

test('updateTimes returns the same times provided in the action', () => {
    const state = ["17:00", "18:00"];
    const action = { type: 'update', times: ["19:00", "20:00"] };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(action.times);
}); 