"use client";
import React, { useState } from 'react';
import { questions } from '@/data/academyFaqs';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6 lg:pb-64">
        <h2 className="mb-6 lg:mb-8 text-md md:text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="mx-auto max-w-screen-xl">
          <div>
            {questions.map((faq) => (
              <div key={faq.id}>
                <h2>
                  <button type="button" className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white" onClick={() => toggleAccordion(faq.id)}>
                    <span>{faq.question}</span>
                    <svg className={`w-6 h-6 transform ${openIndex === faq.id ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </h2>
                {openIndex === faq.id && (
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
