import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './Components/Pages/About/About.tsx';
import Contact from './Components/Pages/Contact/Contact.tsx';
import Homepage from './Components/Pages/Homepage/Homepage.tsx';
import React from 'react';
import Services from './Components/Pages/Services/Services.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Services' element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
