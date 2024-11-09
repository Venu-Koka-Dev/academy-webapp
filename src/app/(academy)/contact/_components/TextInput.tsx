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
  const [error, setError] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsTyping(true);
  } 

  useEffect(() => {
    const timer = setTimeout(() => {
        if(value.length > 0 && value.length < 25) {
            setError("Input must be at least 25 characters long");
        } else {
          if (value.length > 100) {
            setError("Input must be lesser than 100 characters long");
          } else {
            setError(null);
          }
        }
        setIsTyping(false);
    }, 500);

    return () => {
       clearTimeout(timer);
    }
  }, [value]);
 
  return (    
    <div>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        <input value={value} onChange={handleChange} type="text" name={name} id={id} className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${isTyping ? "border-gray-300" : error && "border-red-700"}  shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`} placeholder={placeholder} required/>
        {isTyping ? null : error && <p className='text-red-700 text-sm'>{error}</p>}      
    </div>
  )
}

export default TextInput;


