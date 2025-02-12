import React, { useReducer } from 'react'
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About"
import Footer from "./Footer"
import BookingPage  from "./BookingPage"

// Reducer for available times
const initialTimes = []  // or your default times array
const availableTimesReducer = (state, action) => {
  switch(action.type){
    case 'update':
      return action.times
    default:
      return state
  }
}

const Main = () => {
  // Lifted up availableTimes state using useReducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialTimes)

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
  )
}

export default Main