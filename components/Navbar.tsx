"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Dark mode toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" height={32} width={32} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Academy</span>
        </Link>   
        
        {/* <button onClick={toggleFullScreen} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Toggle Fullscreen">{isFullScreen ? '❌' : '🔲'}</button> */}
        <UserMenu />  
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Toggle Dark Mode">{isDarkMode ? '🌞' : '🌙'}</button>
        <NavMenu />                               
      </div>
    </nav>
  )
}

export default Navbar;