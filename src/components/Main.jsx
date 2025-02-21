import React, { act, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About"
import Footer from "./Footer"
import BookingPage  from "./BookingPage"
import BookingForm from "./BookingForm"
import { fetchAPI, submitAPI } from '../api'

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      const newTimes = fetchAPI(new Date(action.date));
      //console.log("Action date: " , action.date);
      //console.log('New times fetched:', newTimes);
      return newTimes;
    default:
      return state;
  }
}

const Main = () => {
  // Use initializeTimes to set the initial state
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <main className="main">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
      {/* Pass state and dispatch down to BookingPage */}
      {/* <BookingPage availableTimes={availableTimes} dispatch={dispatch} /> */}
      {/* <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} /> */}
    </main>
  );
}

export default Main;

// Export the functions for testing
export { initializeTimes, updateTimes };