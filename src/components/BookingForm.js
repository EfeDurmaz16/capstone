import React from 'react';

const BookingForm = ({
  resDate,
  setResDate,
  resTime,
  setResTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          onChange={(e) => setResDate(e.target.value)}
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

        {/* <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select> */}

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;