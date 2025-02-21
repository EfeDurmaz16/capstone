import React, { useReducer } from 'react'
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About"
import Footer from "./Footer"
import BookingPage  from "./BookingPage"

// Reducer for available times
const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]; // Default times

function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today);
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
}

const Main = () => {
  // Lifted up availableTimes state using useReducer
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes, initializeTimes);

  return (
    <main className="main">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
      {/* Pass state and dispatch down to BookingPage */}
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;

// Export the functions for testing
export { initializeTimes, updateTimes };