import React from 'react';

type SearchModalPropType = {
    showSearchModal: boolean;
    setShowSearchModal: () => {};
}

const SearchModal = ({ showSearchModal, setShowSearchModal}: SearchModalPropType) => {
  return (
    <>
        {showSearchModal && (   
          <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50 ">     
            <div id="ecommerce-search-modal" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden p-12 w-full md:w-1/2 xl:w-1/3 relative top-0 right-0 left-200 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full antialiased">
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
          </div>
        )}
    </>
  )
}

export default SearchModal