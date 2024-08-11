"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import '../globals.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full sticky top-0 z-50 transition-all duration-300 ${scroll ? 'bg-gray-200 shadow-md' : 'bg-transparent'}`}>
      <nav className="md:flex items-center justify-between p-2 md:py-3 md:px-6 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-50"> 
      <div className="navbar flex justify-between items-center w-full">
          <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex uppercase items-center gap-40 px-5">
          <NavLinks />
        </div>
        {/* Mobile Nav */}
        <div className={`md:hidden absolute w-full transition-all duration-1000 ${open ? 'left-0' : 'left-[-100%]'}`}>
          {open && (
            <ul className="w-full h-[25vh] p-10 bg-gray-200 gap-5">
              <NavLinks />
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
