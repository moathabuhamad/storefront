import React from 'react';
import NavBar from './NavBar';


const Header = () => {
  return (
  <div className='flex w-screen justify-between px-4 bg-teal-400 items-center'>
    <h1 className='font-semibold text-2xl text-left text-slate-800x'>
      Welcome to my Secret Shop
    </h1>
  <NavBar/>
  </div>
  )
};

export default Header;
