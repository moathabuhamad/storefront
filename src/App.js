import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-between items-center bg-slate-800'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
