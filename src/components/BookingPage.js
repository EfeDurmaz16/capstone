import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm'; 

const BookingPage = ({ availableTimes, dispatch }) => {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  
  // Update available times when date changes
  useEffect(() => {
    if (resDate) {
      const newTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      dispatch({ type: 'update', times: newTimes });
    }
  }, [resDate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...handle form submission using state...
  };

  return (
    <main className="main">
      <BookingForm 
        resDate={resDate}
        setResDate={setResDate}
        resTime={resTime}
        setResTime={setResTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default BookingPage;