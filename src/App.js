import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Occasion from './components/Occasion'

function App() {
  const [occasion, setOccasion] = useState(false);
  return (
    <>
    <Header/>
    <Main/>
    <Occasion occasion={occasion} setOccasion={setOccasion} />
    </>
  );
}

export default App;
