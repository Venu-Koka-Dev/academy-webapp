"use client";
import React, { useState } from 'react';
import { RiFullscreenFill } from "react-icons/ri";  //<RiFullscreenFill />
import { BiExitFullscreen } from "react-icons/bi";  //<BiExitFullscreen />

const ScreenSizeModeButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Fullscreen toggle function
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Safari
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE11
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE11
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };
  
  return (
    <div>
        <button onClick={toggleFullScreen} type="button" className="inline-flex hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 items-center justify-center gap-2 p-2 text-gray-900 dark:text-white">
          <span className="sr-only">Full Screen</span>
          <div className="relative">
             {isFullScreen ? <BiExitFullscreen /> : <RiFullscreenFill />}                      
          </div>
        </button>                  
    </div> 
  )
}

export default ScreenSizeModeButton;