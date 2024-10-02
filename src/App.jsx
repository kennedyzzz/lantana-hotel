import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Restaurant from './components/Restaurant';
import Conference from './components/Conference';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Rooms />
      <Restaurant />
      <Conference />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
