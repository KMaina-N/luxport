// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <section className="custom-section-1">
        <div className="">
          <Home />
        </div>
      </section>
    </div>
  );
}

export default App;
