"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavMenu = () => {
  const pathname = usePathname();  // "/about" - If URL is locsalhost:3000/about 

  console.log(pathname);

  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link href="/" className={`block py-2 px-3 text-black ${pathname === "/" ? "bg-blue-700 md:text-blue-700" : ""}  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500`} aria-current="page">Home</Link>
          </li>
          <li>
            <Link href="/about" className={`block py-2 px-3 text-black ${pathname === "/about" ? "bg-blue-700 md:text-blue-700" : ""}  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500`} >About</Link>
          </li>
          <li>
            <Link href="/courses" className={`block py-2 px-3 text-black ${pathname === "/courses" ? "bg-blue-700 md:text-blue-700" : ""}  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500`} >Courses</Link>
          </li>
          <li>
            <Link href="/blog" className={`block py-2 px-3 text-black ${pathname === "/blog" ? "bg-blue-700 md:text-blue-700" : ""}  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500`} >Blog</Link>
          </li>
          <li>
            <Link href="/contact" className={`block py-2 px-3 text-black ${pathname === "/contact" ? "bg-blue-700 md:text-blue-700" : ""}  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500`} >Contact</Link>
          </li>
        </ul>
    </div>
  )
}

export default NavMenu