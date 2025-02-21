import React, { useState } from 'react';
import Occasion from './Occasion';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState(availableTimes[0] || "");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...submission logic...
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    // Only dispatch if dispatch is a function
    if (dispatch && typeof dispatch === 'function') {
      dispatch({ type: 'update', times: availableTimes }); // Dispatch with type 'update' and available times
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        <Occasion occasion={occasion} setOccasion={setOccasion} />

        <input type="button" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;