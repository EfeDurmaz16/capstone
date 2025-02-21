import React, { useReducer } from 'react';
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

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <main className="main">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
};

export default BookingPage;