import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI } from './api'; // Import fetchAPI to mock it

jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Test for static text rendering

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

// Test for initializeTimes function

test('initializeTimes returns correct initial times', () => {
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

// Test for updateTimes function

test('updateTimes returns updated times based on the action date', () => {
    const state = ["17:00", "18:00"];
    const action = { type: 'update', date: '2023-10-01' };
    fetchAPI.mockReturnValue(["19:00", "20:00"]);
    const newState = updateTimes(state, action);
    expect(newState).toEqual(["19:00", "20:00"]);
});

test('BookingForm has required attributes on inputs', () => {
    render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(dateInput).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('required');
});

test('Submit button is disabled when form is invalid', () => {
    render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    expect(submitButton).toBeDisabled();

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });

    expect(submitButton).toBeDisabled(); // Still disabled because occasion is not selected
});

test('Submit button is enabled when form is valid', () => {
    render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} submitForm={() => {}} />);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });

    // Mock setting an occasion
    fireEvent.click(screen.getByText(/some occasion/i));

    expect(submitButton).not.toBeDisabled();
}); 