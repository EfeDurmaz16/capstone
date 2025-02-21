import React, { useState } from 'react';
import Occasion from './Occasion';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState(availableTimes[0] || "");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ resDate, resTime, guests, occasion });
    console.log('Selected Occasion:', occasion);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    if (dispatch && typeof dispatch === 'function') {
      dispatch({ type: 'update', date: newDate });
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
          required
          aria-label="Choose date"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
          required
          aria-label="Choose time"
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
          required
          aria-label="Number of guests"
        />

        <Occasion selectedOption={occasion} setSelectedOption={setOccasion} />
        
        <div className="button-container"> 
          <button type="submit" onClick={handleSubmit} disabled={!resDate || !resTime || guests < 1 || !occasion} aria-label="On Click">Make Your Reservation</button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;