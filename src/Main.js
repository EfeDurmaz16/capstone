import React, { useReducer } from "react";
import BookingForm from "./components/BookingForm";

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  // action.date is available for future logic
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <div>
      {/* <BookingForm availableTimes={availableTimes} dispatch={dispatch} /> */}
    </div>
  );
}
