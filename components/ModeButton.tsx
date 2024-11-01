"use client";
import React, { useEffect, useState } from 'react'
import { IoSunny } from "react-icons/io5";    
import { AiFillMoon } from "react-icons/ai";  

const ModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Sync theme with system preference
  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setIsDarkMode(true);
  //     document.documentElement.classList.add('dark');
  //   }
  // }, []);

  return (
    <div>
        <button onClick={toggleDarkMode} type="button" className="inline-flex hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 items-center justify-center gap-2 p-2 text-gray-900 dark:text-white">
          <span className="sr-only">Mode</span>
          <div className="relative">
             {isDarkMode ? <IoSunny /> : <AiFillMoon />}                      
          </div>
        </button>                  
    </div>
  )
}

export default ModeButton;