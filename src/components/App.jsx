import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Trending from './Trending';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
    </div>
  );
}

export default App;
