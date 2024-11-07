"use client";
import React, { useEffect, useRef, useState } from 'react';

type TextInputProps ={
    id: string;
    name: string;
    placeholder: string;
    label: string;
}

const TextInput = ({ id, name, placeholder, label}: TextInputProps) => {
  const [value, setValue] = useState<string>("");  
  const [error, setError] = useState<string>("");

  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  } 

  useEffect(() => {
    let timer = setTimeout(() => {
        if(value.length > 0) {
            setError("Please enter message less than 25 characters");
        }  
    }, 1000);  
    return () => {
        clearTimeout(timer);
    }
  }, [value]);

  return (    
    <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        <input value={value} onChange={handleChange} type="text" name={name} id={id} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={placeholder} required/>
        {error && <p style={{ color: 'red' }}>{error}</p>}       
    </div>
  )
}

export default TextInput;


//  // Update debounced value after 1 second of no typing
//  useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, 1000);

//     // Clear timeout if input changes (before delay is complete)
//     return () => clearTimeout(handler);
//   }, [value]);

//   // Validate length on debounced value change
//   useEffect(() => {
//     if (debouncedValue.length < 25 || debouncedValue.length > 100) {
//       setError('Input length must be between 25 and 100 characters.');
//     } else {
//       setError('');
//     }
//   }, [debouncedValue]);