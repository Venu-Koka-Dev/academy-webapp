"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const NavbarWithSearch = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showAllCategoriesDD, setShoeAllCategoriesDD] = useState(false);

  const handleSearchBtn = () => {
    setShowSearchModal(prevState => !prevState);
  }

  const handleAllCategoriesDD = () => {
    setShoeAllCategoriesDD(prevState => !prevState);
  }

  return (
    <>
        <nav className="py-4 bg-white dark:bg-gray-800 antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              <div className="lg:order-1 shrink-0">
                <Link href="#" title="" className="">
                  <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt=""/>
                  <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt=""/>
                </Link>
              </div>        
              <div className="flex items-center justify-end lg:space-x-2 lg:order-3">
                <div className="relative">
                  <button id="eCommerceSearchModalButton" type="button" data-modal-toggle="ecommerce-search-modal" data-modal-target="ecommerce-search-modal" className="inline-flex items-center justify-center hover:bg-gray-100 rounded-md text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white p-2" onClick={handleSearchBtn}>
                    <span className="sr-only">Search</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                  </button>
                </div>
        
                <div>
                  <button id="cartDropdownButton2" data-dropdown-toggle="cartDropdown2" type="button" className="inline-flex hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 items-center justify-center gap-2 p-2 text-gray-900 dark:text-white">
                    <span className="sr-only">
                      Cart
                    </span>
                    <div className="relative">
                      <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"></path>
                      </svg>  
                      <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-700 rounded-full -top-1.5 -end-1.5 dark:bg-red-600">
                        2</div>
                    </div>
                  </button>
                  <div id="cartDropdown2" className="z-50 mx-auto hidden max-w-sm divide-y divide-gray-200 overflow-hidden rounded-lg bg-white antialiased shadow-lg dark:divide-gray-600 dark:bg-gray-700">
                    <div className="p-4 ">
                      <dl className="flex items-center gap-2">
                        <dt className="font-semibold leading-none text-gray-900 dark:text-white">Your shopping cart</dt>
                        <dd className="leading-none text-gray-500 dark:text-gray-400">(5 items)</dd>
                      </dl>
                    </div>
                
                    <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-center gap-2">
                        <Link href="#" className="flex aspect-square h-9 w-9 shrink-0 items-center">
                          <img className="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                          <img className="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                        </Link>
                        <div>
                          <Link href="#" className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</Link>
                          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,299</p>
                        </div>
                      </div>
                
                      <div className="flex items-center justify-end gap-3">
                        <form action="#">
                          <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                          <div className="relative flex items-center">
                            <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                            <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </form>
                        <button data-tooltip-target="tooltipRemoveItem6" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                          <span className="sr-only"> Remove </span>
                          <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                          </svg>
                        </button>
                        <div id="tooltipRemoveItem6" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                          Remove
                          <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-center gap-2">
                        <Link href="#" className="flex aspect-square h-9 w-9 shrink-0 items-center">
                          <img className="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="imac image" />
                          <img className="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="imac image" />
                        </Link>
                        <div>
                          <Link href="#" className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</Link>
                          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,899</p>
                        </div>
                      </div>
                
                      <div className="flex items-center justify-end gap-3">
                        <form action="#">
                          <label htmlFor="counter-input-2" className="sr-only">Choose quantity:</label>
                          <div className="relative flex items-center">
                            <button type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input type="text" id="counter-input-2" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="3" required />
                            <button type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </form>
                        <button data-tooltip-target="tooltipRemoveItem7" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                          <span className="sr-only"> Remove </span>
                          <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                          </svg>
                        </button>
                        <div id="tooltipRemoveItem7" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                          Remove
                          <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-center gap-2">
                        <Link href="#" className="flex aspect-square h-9 w-9 shrink-0 items-center">
                          <img className="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
                          <img className="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
                        </Link>
                        <div>
                          <Link href="#" className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPad PRO</Link>
                          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$899</p>
                        </div>
                      </div>
                
                      <div className="flex items-center justify-end gap-3">
                        <form action="#">
                          <label htmlFor="counter-input-3" className="sr-only">Choose quantity:</label>
                          <div className="relative flex items-center">
                            <button type="button" id="decrement-button-3" data-input-counter-decrement="counter-input-3" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input type="text" id="counter-input-3" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                            <button type="button" id="increment-button-3" data-input-counter-increment="counter-input-3" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </form>
                        <button data-tooltip-target="tooltipRemoveItem8" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                          <span className="sr-only"> Remove </span>
                          <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                          </svg>
                        </button>
                        <div id="tooltipRemoveItem8" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                          Remove
                          <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-center gap-2">
                        <Link href="#" className="flex aspect-square h-9 w-9 shrink-0 items-center">
                          <img className="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                          <img className="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                        </Link>
                        <div>
                          <Link href="#" className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple iPhone 15</Link>
                          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$999</p>
                        </div>
                      </div>
                
                      <div className="flex items-center justify-end gap-3">
                        <form action="#">
                          <label htmlFor="counter-input-4" className="sr-only">Choose quantity:</label>
                          <div className="relative flex items-center">
                            <button type="button" id="decrement-button-4" data-input-counter-decrement="counter-input-4" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input type="text" id="counter-input-4" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="1" required />
                            <button type="button" id="increment-button-4" data-input-counter-increment="counter-input-4" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </form>
                        <button data-tooltip-target="tooltipRemoveItem9" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                          <span className="sr-only"> Remove </span>
                          <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                          </svg>
                        </button>
                        <div id="tooltipRemoveItem9" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                          Remove
                          <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-center gap-2">
                        <Link href="#" className="flex aspect-square h-9 w-9 shrink-0 items-center">
                          <img className="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
                          <img className="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
                        </Link>
                        <div>
                          <Link href="#" className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white">Apple Watch</Link>
                          <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$1,099</p>
                        </div>
                      </div>
                
                      <div className="flex items-center justify-end gap-3">
                        <form action="#">
                          <label htmlFor="counter-input-4" className="sr-only">Choose quantity:</label>
                          <div className="relative flex items-center">
                            <button type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input type="text" id="counter-input-5" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value="2" required />
                            <button type="button" id="increment-button-5" data-input-counter-increment="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </form>
                        <button data-tooltip-target="tooltipRemoveItem10" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                          <span className="sr-only"> Remove </span>
                          <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                          </svg>
                        </button>
                        <div id="tooltipRemoveItem10" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                          Remove
                          <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 p-4">
                      <dl className="flex items-center justify-between">
                        <dt className="font-semibold leading-none text-gray-900 dark:text-white">Total</dt>
                
                        <dd className="font-semibold leading-none text-gray-900 dark:text-white">$6,196</dd>
                      </dl>
                
                      <Link href="#" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> See your cart </Link>
                    </div>
                  </div>
                </div>
        
                <div className="relative shrink-0">
                  <button id="accountDropdownButton2" data-dropdown-toggle="accountDropdown2" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                    <img className="w-6 h-6 rounded-full me-1.5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Rounded avatar"/>
                    <span className="hidden sm:block lg:hidden xl:block">
                      My Account
                    </span>
                    <svg className="w-4 h-4 text-gray-900 dark:text-white sm:ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                    </svg>
                  </button>
        
                  <div id="accountDropdown2" className="z-10 hidden w-52 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                          </svg>
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
                          </svg>
                          My Wallet
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                          </svg>
                          Favourites Items
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                          </svg>
                          My Returns
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.9 1.3 3.9 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.2-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                          </svg>
                          Gift Cards
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                          </svg>
                          Subscriptions
                        </Link>
                      </li>
                    </ul>
                
                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
                            />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          </svg>
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z" />
                          </svg>
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.3-.5 1.3h-13c-.5 0-.5-.7-.5-1.3 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4ZM8.7 18c.1.9.3 1.5 1 2.1a3.5 3.5 0 0 0 4.6 0c.7-.6 1.3-1.2 1.4-2.1h-7Z" />
                          </svg>
                          Notifications
                        </Link>
                      </li>
                    </ul>
                
                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13c-2.8-.8-4.7-1-8-1a1 1 0 0 0-1 1v11c0 .6.5 1 1 1 3.2 0 5 .2 8 1m0-13c2.8-.8 4.7-1 8-1 .6 0 1 .5 1 1v11c0 .6-.5 1-1 1-3.2 0-5 .2-8 1" />
                          </svg>
                          Help Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          Help Center
                        </Link>
                      </li>
                    </ul>
                
                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                      <li>
                        <span className="group flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                          <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z" />
                          </svg>
                          Dark Mode
                
                          <label className="ml-auto inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" className="peer sr-only" name="dark-mode" />
                            <div
                              className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-600 dark:peer-focus:ring-primary-800 rtl:peer-checked:after:-translate-x-full"
                            ></div>
                            <span className="sr-only">Toggle</span>
                          </label>
                        </span>
                      </li>
                    </ul>
                
                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                      <li>
                        <Link href="#" title="" className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-gray-600">
                          <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                          </svg>
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>        
              <div className="w-full md:flex md:items-center md:justify-center lg:order-2">
                <div className="sm:flex relative items-center justify-center sm:gap-4 sm:p-2 sm:bg-gray-100 rounded-lg sm:dark:bg-gray-700">
                  <button onClick={handleAllCategoriesDD} type="button" className="w-full sm:w-auto justify-center inline-flex items-center flex-1 px-3 py-2 text-sm font-medium text-gray-900 border border-gray-200 dark:border-gray-700 sm:border-0 bg-white hover:bg-gray-50 rounded-lg md:flex-none dark:bg-gray-800 dark:hover:bg-gray-700 sm:dark:bg-gray-600 sm:dark:hover:bg-gray-500 dark:text-white">
                    <svg className="w-4 h-4 me-2 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
                    </svg>              
                    All categories
                    <svg className="w-4 h-4 ms-2 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                    </svg>              
                  </button>
                  {showAllCategoriesDD && (                        
                        <div className="z-50 hidden w-[672px] mx-auto overflow-hidden antialiased bg-white rounded-lg shadow-lg dark:bg-gray-700">
                            <div className="sm:flex sm:items-stretch">
                              <div className="w-full px-2 py-4 space-y-4 sm:max-w-sm md:max-w-md sm:p-6 shrink-0">
                                <Link href="#" title="" className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Fashion
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Trending designs to inspire you
                                    </p>
                                  </div>
                        
                                  <div className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title="" className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Electronics
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Up-and-coming designers
                                    </p>
                                  </div>
                        
                                  <div
                                    className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title=""
                                  className="flex items-center gap-4 px-2 py-2 bg-gray-100 rounded-lg dark:bg-gray-600 sm:px-4 group">
                                  <div
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v5m-3 0h6M4 11h16M5 15h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v9c0 .6.4 1 1 1Z" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">Computer and Office</p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">Work designers are riffing on</p>
                                  </div>
                        
                                  <div className="transition-all duration-200 translate-x-0 opacity-100">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title=""
                                  className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 4H5a1 1 0 0 0-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Gaming/Consoles
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Interviews, tutorials, and more
                                    </p>
                                  </div>
                        
                                  <div
                                    className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title=""
                                  className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Books
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Prompt to flex your skills
                                    </p>
                                  </div>
                        
                                  <div
                                    className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title=""
                                  className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                        d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2c0 1.1.9 2 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Sports and Outdoors
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Prompt to flex your skills
                                    </p>
                                  </div>
                        
                                  <div
                                    className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title=""
                                  className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Food and Grocery
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Prompt to flex your skills
                                    </p>
                                  </div>
                        
                                  <div
                                    className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title=""
                                  className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 13.9a5 5 0 0 1 2 4V21M7 3v3.2A5 5 0 0 0 8.9 10M17 3v3.2a5 5 0 0 1-2.4 4.3l-5.2 3A5 5 0 0 0 7 17.8V21M7 5h10M7.4 8h9.3M8 16h8.7M7 19h10" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Health Advanced Beauty
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Prompt to flex your skills
                                    </p>
                                  </div>
                        
                                  <div
                                    className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                        
                                <Link href="#" title=""
                                  className="flex items-center gap-4 px-2 py-2 rounded-lg sm:px-4 hover:bg-gray-100 group dark:hover:bg-gray-600">
                                  <div
                                    className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full shadow shrink-0 dark:bg-gray-600">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                    </svg>
                                  </div>
                        
                                  <div className="flex-1 min-w-0 space-y-0.5">
                                    <p className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white">
                                      Car and Motorbike
                                    </p>
                                    <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                      Prompt to flex your skills
                                    </p>
                                  </div>
                        
                                  <div
                                    className="transition-all duration-200 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                  </div>
                                </Link>
                              </div>
                        
                              <ul className="w-full p-4 space-y-4 sm:p-6 bg-gray-50 dark:bg-gray-600 text-sm font-medium text-gray-500 dark:text-gray-400">
                                <li className="text-sm font-semibold text-gray-900 dark:text-white">Browse Categories</li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Laptops
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Tablets
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Desktop PC
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Monitors
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Memory  Storage
                                  </Link>
                                </li>
                                <li>             
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Networking
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Computer Components
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Software
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#" title="" className="block hover:underline dark:hover:text-white hover:text-gray-900">
                                    Printers  Ink
                                  </Link>
                                </li>
                              </ul>
                            </div>
                        </div>
                  )}    
                     
        
                  <ul className="flex items-center space-x-4">
                    <li>              
                      <Link href="#" title="" className="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg sm:inline-flex dark:text-white">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link href="#" title="" className="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg sm:inline-flex dark:text-white">
                        Gift Cards
                      </Link>
                    </li>
                    <li>
                      <Link href="#" title="" className="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg sm:inline-flex dark:text-white">
                        Gift Ideas
                      </Link>
                    </li>
                    <li>
                      <Link href="#" title="" className="items-center hidden gap-2 px-2 py-1 text-sm hover:text-primary-700 dark:hover:text-primary-500 font-medium text-gray-900 rounded-lg md:inline-flex dark:text-white">
                        Deal of the day
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {showSearchModal && (            
            <div id="ecommerce-search-modal" tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden absolute top-0 right-0 left-200 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full antialiased">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-3 sm:p-5">        
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced search</h3>
                        <button onClick={() => setShowSearchModal(false)} type="button" className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="ecommerce-search-modal">
                          <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                        
                    <form className="w-full mx-auto pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search in all categories..." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                        </div>
                    </form>
            
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Suggested results</h3>
                        <ul className="text-sm font-normal text-gray-500 dark:text-gray-400 space-y-2">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                            </svg>
                            <Link href="#" className="hover:underline">Apple iMac 2024 (All-in-One PC)</Link>
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                            </svg>
                            <Link href="#" className="hover:underline">Samsung Galaxy S24 Ultra (1Tb, Titanium Violet)</Link>
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                            </svg>
                            <Link href="#" className="hover:underline">MacBook Pro 14-inch M3 - Space Gray - Apple</Link>
                          </li>
                        </ul>
                    </div>
            
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">History</h3>
                        <ul className="text-sm font-normal text-gray-500 dark:text-gray-400 space-y-2">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <Link href="#" className="hover:underline">Microsoft - Surface Laptop, Platinum, 256 GB SSD</Link>
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <Link href="#" className="hover:underline">Huawei - P40 Lite - Smartphone 128GB, Black</Link>
                          </li>
                        </ul>
                    </div>
            
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Featured products</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          <Link href="#" className="block rounded-lg p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 group space-y-2">
                            <div>
                              <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" className="dark:hidden h-16" alt=""/>
                              <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" className="hidden dark:block h-16" alt=""/>
                            </div>
                            <h4 className="group-hover:underline text-sm font-medium dark:text-white text-gray-900">Apple Imac 2024, 27”, 256GB</h4>
              
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <p className="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">4.95</p>
                            </div>
              
                            <span className="text-gray-900 dark:text-white text-sm font-bold block">$1,799</span>
                          </Link>
                          <Link href="#" className="block rounded-lg p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 group space-y-2">
                            <div>
                              <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" className="dark:hidden h-16" alt=""/>
                              <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" className="hidden dark:block h-16" alt=""/>
                            </div>
                            <h4 className="group-hover:underline text-sm font-medium dark:text-white text-gray-900">Apple iPad PRO, 12”, Space Gray</h4>
              
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <p className="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">4.7</p>
                            </div>
              
                            <span className="text-gray-900 dark:text-white text-sm font-bold block">$999</span>
                          </Link>
                          <Link href="#" className="block rounded-lg p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 group space-y-2">
                            <div>
                              <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" className="dark:hidden h-16" alt=""/>
                              <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" className="hidden dark:block h-16" alt=""/>
                            </div>
                            <h4 className="group-hover:underline text-sm font-medium dark:text-white text-gray-900">Apple MacBook PRO, 1TB</h4>
              
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                              </svg>
                              <p className="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">4.8</p>
                            </div>
              
                            <span className="text-gray-900 dark:text-white text-sm font-bold block">$2,999</span>
                          </Link>
                        </div>
                    </div>
            
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">All categories</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Computer & Office</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Collectibles & Toys</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Books</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Fashion/Clothes</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Sports & Outdoors</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Painting & Hobby</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Electronics</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Food & Grocery</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Music</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">TV/Projectors</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Health & beauty</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Home Air Quality</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/>
                              <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
                              <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Gaming/Consoles</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Car & Motorbike</span>
                          </Link>
                          <Link href="#" className="rounded-lg py-2 px-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"/>
                              <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Photo/Video</span>
                          </Link>
                        </div>
                    </div>        
                </div>
                </div>
            </div>
        )}
        
    </>
  )
}

export default NavbarWithSearch;