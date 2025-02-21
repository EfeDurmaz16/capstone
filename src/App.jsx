import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingPage from './components/BookingPage';
import Header from './components/Header';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header/>
          <Main/>
        </>
      } />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default App;
