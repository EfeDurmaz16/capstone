import React, { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today) || []; // Ensure it returns an array
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'update':
      return fetchAPI(new Date(action.date)) || []; // Ensure it returns an array
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Retrieve existing bookings from local storage
  const getBookingsFromLocalStorage = () => {
    const bookings = localStorage.getItem('bookings');
    return bookings ? JSON.parse(bookings) : [];
  };

  // Save bookings to local storage
  const saveBookingsToLocalStorage = (bookings) => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // Retrieve existing bookings
      const existingBookings = getBookingsFromLocalStorage();
      // Add new booking
      const updatedBookings = [...existingBookings, formData];
      // Save updated bookings to local storage
      saveBookingsToLocalStorage(updatedBookings);
      // Navigate to confirmation page
      navigate('/confirmed');
      console.log(updatedBookings)
    }
  };

  return (
    <main className="main">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
};

export default BookingPage;