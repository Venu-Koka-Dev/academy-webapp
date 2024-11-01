"use client";
import React, { useState } from 'react'
import SearchModal from './SearchModal'

const SearchButton = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchBtn = () => {
    setShowSearchModal(prevState => !prevState);
  }

  return (
    <>
        <div className="relative">
            <button type="button" className="inline-flex items-center justify-center hover:bg-gray-100 rounded-md text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white p-2" onClick={handleSearchBtn}>
              <span className="sr-only">Search</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </button>
        </div>
        <SearchModal showSearchModal={showSearchModal} setShowSearchModal={setShowSearchModal}/> 
    </>
  )
}

export default SearchButton