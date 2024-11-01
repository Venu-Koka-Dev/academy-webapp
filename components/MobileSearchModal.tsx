import React from 'react';

const MobileSearchModal = () => {
  return (
    <form action="#" method="get" id="drawer-mobile-filter" className="fixed left-0 top-0 z-40 h-screen w-full max-w-sm -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
        <h5 id="drawer-label-2" className="mb-4 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400">Filters mobile</h5>
        <button type="button" data-drawer-dismiss="drawer-mobile-filter" aria-controls="drawer-mobile-filter" className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
          <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
    
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-4">
            {/* <!-- Product Brand --> */}
            <div>
              <label htmlFor="product-brand-2" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Product Brand </label>
              <select id="product-brand-2" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected value="apple">Apple</option>
                <option value="lg">LG</option>
                <option value="samsung">Samsung</option>
                <option value="logitech">Logitech</option>
                <option value="lenovo">Lenovo</option>
                <option value="samsung">Philips</option>
                <option value="logitech">Microsoft</option>
                <option value="lenovo">Sony</option>
              </select>
            </div>
    
            {/* <!-- Price --> */}
            <div>
              <h6 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Price Range</h6>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input id="min-price" type="range" min="0" max="7000" value="300" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>
    
                <div>
                  <input id="max-price" type="range" min="0" max="7000" value="3500" step="1" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>
    
                <div className="col-span-2 flex items-center justify-between space-x-4">
                  <div className="w-full">
                    <label htmlFor="min-price-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">From</label>
                    <input type="number" id="min-price-input" value="300" min="0" max="7000" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 " placeholder="" required />
                  </div>
    
                  <div className="w-full">
                    <label htmlFor="max-price-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">To</label>
                    <input type="number" id="max-price-input" value="3500" min="0" max="7000" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="grid grid-cols-2 gap-4">
              {/* <!-- Delivery method --> */}
              <div className="w-full space-y-3">
                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Delivery method</h6>
                <div className="flex items-center">
                  <input id="flowbox-2" type="radio" name="delivery" value="" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label htmlFor="flowbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Flowbox </label>
                </div>
    
                <div className="flex items-center">
                  <input id="pick-from-store-2" type="radio" name="delivery" value="" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label htmlFor="pick-from-store-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Pick from the store </label>
                </div>
    
                <div className="flex items-center">
                  <input id="courier-2" type="radio" name="delivery" value="" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label htmlFor="courier-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fast courier </label>
                </div>
              </div>
              <div className="w-full">
                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Rating</h6>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="five-stars" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="five-stars" className="ml-2 flex items-center">
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="four-stars" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="four-stars" className="ml-2 flex items-center">
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="three-stars" type="radio" value="" name="rating" checked className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="three-stars" className="ml-2 flex items-center">
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="two-stars" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="two-stars" className="ml-2 flex items-center">
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="one-star" type="radio" value="" name="rating" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="one-star" className="ml-2 flex items-center">
                      <svg aria-hidden="true" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" className="h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
    
            {/* <!-- Condition --> */}
            <div>
              <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Condition</h6>
    
              <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                <li className="w-full border-r border-gray-200 dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="condition-all" type="radio" value="" name="list-radio" checked className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                    <label htmlFor="condition-all" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> All </label>
                  </div>
                </li>
                <li className="w-full border-r border-gray-200 dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input id="condition-new" type="radio" value="" name="list-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                    <label htmlFor="condition-new" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> New </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input id="condition-used" type="radio" value="" name="list-radio" className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600" />
                    <label htmlFor="condition-used" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Used </label>
                  </div>
                </li>
              </ul>
            </div>
    
            {/* <!-- Color & Rating --> */}
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full">
                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Colour</h6>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="blue" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
    
                    <label htmlFor="blue" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600"></div>
                      Blue
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="gray" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
    
                    <label htmlFor="gray" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400"></div>
                      Gray
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="green" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
    
                    <label htmlFor="green" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400"></div>
                      Green
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="pink" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
    
                    <label htmlFor="pink" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400"></div>
                      Pink
                    </label>
                  </div>
    
                  <div className="flex items-center">
                    <input id="red" type="checkbox" value="" checked className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
    
                    <label htmlFor="red" className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                      Red
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full space-y-3">
                <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Weight</h6>
                <div className="flex items-center">
                  <input id="weight-6" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label htmlFor="weight-6" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Under 1 kg </label>
                </div>
    
                <div className="flex items-center">
                  <input id="weight-7" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                  <label htmlFor="weight-7" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 1 kg to 5 kg </label>
                </div>
    
                <div className="flex items-center">
                  <input id="weight-8" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label htmlFor="weight-8" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 5 kg to 10 kg </label>
                </div>
    
                <div className="flex items-center">
                  <input id="weight-9" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label htmlFor="weight-9" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 10 kg to 20 kg </label>
                </div>
    
                <div className="flex items-center">
                  <input id="weight-10" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label htmlFor="weight-10" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Over 20 kg </label>
                </div>
              </div>
            </div>
    
            {/* <!-- Delivery --> */}
            <div>
              <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Shipping to</h6>
    
              <ul className="grid gap-4 sm:grid-cols-2">
                <li>
                  <input type="radio" id="delivery-usa" name="delivery" value="delivery-usa" className="peer hidden" checked />
                  <label htmlFor="delivery-usa" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">
                    <div className="block">
                      <div className="w-full text-base font-semibold">USA</div>
                      <div className="w-full text-sm">Delivery only htmlFor USA</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="delivery-europe" name="delivery" value="delivery-europe" className="peer hidden" />
                  <label htmlFor="delivery-europe" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">
                    <div className="block">
                      <div className="w-full text-base font-semibold">Europe</div>
                      <div className="w-full text-sm">Delivery only htmlFor USA</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="delivery-asia" name="delivery" value="delivery-asia" className="peer hidden" checked />
                  <label htmlFor="delivery-asia" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">
                    <div className="block">
                      <div className="w-full text-base font-semibold">Asia</div>
                      <div className="w-full text-sm">Delivery only htmlFor Asia</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="delivery-australia" name="delivery" value="delivery-australia" className="peer hidden" />
                  <label htmlFor="delivery-australia" className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">
                    <div className="block">
                      <div className="w-full text-base font-semibold">Australia</div>
                      <div className="w-full text-sm">Delivery only htmlFor Australia</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
    
          <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 pb-4">
            <button type="submit" className="w-full rounded-lg bg-primary-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">Apply filters</button>
            <button type="reset" className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Clear all</button>
          </div>
        </div>
    </form>
  )
}

export default MobileSearchModal