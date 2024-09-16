'use client';

import React, { useEffect, useState } from 'react';
import HomePage from './Home/Home';
import LoadingScreen from './Components/LoadingScreen'; // Import your LoadingScreen component
import NavBar from './Components/NavBar';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loader
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay to match your animation duration

    // Clean up function to clear the timeout
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className='w-full bg-gradient-white'>
      <NavBar  />
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} /> // Show loader if isLoading is true
      ) : (
        <HomePage /> // Show LandingPage once loading is complete
      )}
    </div>
  );
};
