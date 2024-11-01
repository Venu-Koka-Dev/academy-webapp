"use client"
import Link from 'next/link';
import React, { useState } from 'react';

import { courses } from '@/data/courses';
import Course from './Course';

const Courses = () => {
  const [showFilterDD, setShowFilterDD] = useState(true);
  const [showSortDD, setShowSortDD] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClassType, setSelectedClassType] = useState("all");
  const [selectedCourseType, setSelectedCourseType] = useState("all");
  const [showClassTypeOptions, setShowClassTypeOptions] = useState(false);
  const [showCourseTypeOptions, setShowCourseTypeOptions] = useState(false);

  const sortBtnHandler = () => {
    setShowSortDD(!showSortDD);
  }

  const filterBtnHandler = () => {
    setShowFilterDD(!showFilterDD);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleClassTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedClassType(e.target.value);
  };

  const handleCourseTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCourseType(e.target.value);
  };

  const toggleClassTypeOptions = () => {
    setShowClassTypeOptions(!showClassTypeOptions);
  }

  const toggleCourseTypeOptions = () => {
    setShowCourseTypeOptions(!showCourseTypeOptions);
  }

  const filteredCourses = courses.filter(course => {
    const matchesSearchQuery = course.title.toLowerCase().includes(searchQuery) || 
      course.tags.some(tag => tag.label.toLowerCase().includes(searchQuery));
    
    const matchesClassType = selectedClassType === 'all' || course.classType.toLowerCase() === selectedClassType;
    
    const matchesCourseType = selectedCourseType === 'all' || course.courseType.toLowerCase() === selectedCourseType;

    return matchesSearchQuery && matchesClassType && matchesCourseType;
  });

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between sm:flex gap-4 md:mb-8">
            <div className="mb-4 sm:mb-0 border-l-[5px] border-blue-700 pl-5">              
              <h2 className="text-md font-semibold text-gray-900 dark:text-white sm:text-md">Let's Learn</h2>
              <p className="font-light text-gray-600 dark:text-gray-400 sm:text-sm">Choose how you want to proceed from the available modules or learning paths</p>
            </div>
            <div className="flex items-center space-x-4">
              <button type="button" onClick={filterBtnHandler} aria-controls="drawer-mobile-filter" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                </svg>
                Filters
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              {/* <button onClick={sortBtnHandler} type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                </svg>
                Sort
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              {showSortDD && (
                <div className="z-50 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom">
                  <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton">
                    <li>
                      <Link href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> The most popular </Link>
                    </li>
                    <li>
                      <Link href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Newest </Link>
                    </li>     
                  </ul>
                </div>
              )} */}
            </div>
          </div>
          <div className="gap-6 lg:flex">
            {showFilterDD && (             
              <aside className="mb-8 w-full h-full md:w-80 shrink-0 border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:block lg:rounded-lg">
                  <div className='pb-4'>
                    <label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                    <div className="relative block">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                        <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type="search" id="search" value={searchQuery} onChange={handleSearchChange} className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search" required />
                    </div>
                  </div>
                  <h2 id="accordion-flush-heading-1">
                    <button type="button" onClick={toggleClassTypeOptions} className="mb-4 flex w-full items-center justify-between text-sm font-medium text-gray-500 hover:text-gray-900 dark:bg-transparent dark:text-gray-400 dark:hover:text-white rtl:text-right dark:!bg-gray-800" aria-expanded="true" aria-controls="accordion-flush-body-1">
                      <span>Class Type</span>  
                      <svg className={`h-4 w-4 transition-transform ${showClassTypeOptions ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                      </svg>                  
                    </button>
                  </h2>  
                  {showClassTypeOptions && (
                    <div className="mb-4 space-y-4" aria-labelledby="accordion-flush-heading-7">
                      <div className="flex items-center">
                        <input id="all" type="radio" name="classType" value="all" checked={selectedClassType === 'all'} onChange={handleClassTypeChange} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" defaultChecked />
                        <label htmlFor="all" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                      </div>      
                      <div className="flex items-center">
                        <input id="online" type="radio" name="classType" value="online" checked={selectedClassType === 'online'} onChange={handleClassTypeChange} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                        <label htmlFor="online" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online</label>
                      </div>      
                      <div className="flex items-center">
                        <input id="classroom" type="radio" name="classType" value="classroom" checked={selectedClassType === 'classroom'} onChange={handleClassTypeChange} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                        <label htmlFor="classroom" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Classroom</label>
                      </div>
                    </div>  
                  )} 
                                                            
                  <h2 className='mt-4'>
                    <button type="button" onClick={toggleCourseTypeOptions} className="mb-4 flex w-full items-center justify-between text-sm font-medium text-gray-500 hover:text-gray-900 dark:bg-transparent dark:text-gray-400 dark:hover:text-white rtl:text-right dark:!bg-gray-800" aria-expanded="false" aria-controls="accordion-flush-body-7">
                      <span>Course Type</span>  
                      <svg className={`h-4 w-4 transition-transform ${showCourseTypeOptions ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                      </svg>                  
                    </button>
                  </h2>  
                  {showCourseTypeOptions && (                
                    <div className="space-y-4" aria-labelledby="accordion-flush-heading-2">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input id="all-courses" name="courseType" type="radio" value="all" checked={selectedCourseType === 'all'} onChange={handleCourseTypeChange} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" defaultChecked />
                          <label htmlFor="all-courses" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                        </div>
                        <div className="flex items-center">
                          <input id="modules" name="courseType" type="radio" value="module" checked={selectedCourseType === 'module'} onChange={handleCourseTypeChange} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                          <label htmlFor="modules" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modules</label>
                        </div>
                        <div className="flex items-center">
                          <input id="learning-paths" name="courseType" type="radio" value="learning path" checked={selectedCourseType === 'learning path'} onChange={handleCourseTypeChange} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                          <label htmlFor="learning-paths" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Learning Paths</label>
                        </div>
                      </div>
                    </div>
                  )} 
              </aside>            
            )}
            {/*  Right content */}
            <div className="w-full">
              {/* Product Cards */}
              <div className={`grid gap-4 sm:grid-cols-2 ${showFilterDD ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
                {filteredCourses.length === 0 ? (
                  <div className="sm:col-span-2 md:col-span-3 p-4 text-base text-gray-800 rounded-md bg-red-200 border dark:bg-gray-800 dark:text-gray-300" role="alert">
                    <span className="text-sm font-medium">Unfortunately we don't have anything for you!!</span> 
                  </div>
                ) : ( 
                  filteredCourses.map(course => (
                  <Course key={course.id} course={course} /> 
                )))}
              </div>
              {/* Pagination */}
              <nav className="mt-6 flex items-center justify-center sm:mt-8" aria-label="Page navigation example">
                <ul className="flex h-8 items-center -space-x-px text-sm">
                  <li>
                    <Link href="#" className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Previous</span>
                      <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
                  </li>
                  <li>
                    <Link href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
                  </li>
                  <li>
                    <Link href="#" aria-current="page" className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-white">3</Link>
                  </li>
                  <li>
                    <Link href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</Link>
                  </li>
                  <li>
                    <Link href="#" className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</Link>
                  </li>
                  <li>
                    <Link href="#" className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Next</span>
                      <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>          
        </div>
    </section>
  )
}

export default Courses;