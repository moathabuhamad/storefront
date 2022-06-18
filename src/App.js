import React from 'react';
import './App.css';
import { Routes, Route  } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Cart from './components/Cart';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-between items-center bg-slate-800'>
      <Header />
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
