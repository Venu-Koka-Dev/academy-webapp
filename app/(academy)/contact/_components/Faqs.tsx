"use client";
import React, { useState } from 'react';

const questions = [
    {
      question: 'Can I use Flowbite in open-source projects?',
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a href="#" className="text-primary-600 dark:text-primary-500 hover:underline">
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </>
      ),
    },
    {
      question: 'Is there a Figma file available?',
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a href="#" className="text-primary-600 dark:text-primary-500 hover:underline">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </>
      ),
    },
    {
      question: 'What are the differences between Flowbite and Tailwind UI?',
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            However, we recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
          </p>
        </>
      ),
    },
    {
      question: 'What about browser support?',
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is fully supported on all major modern browsers, including Chrome, Firefox, Safari, and Edge.
          </p>
        </>
      ),
    },
  ];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
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
            {questions.map((faq, index) => (
              <div key={index}>
                <h2>
                  <button type="button" className="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white" onClick={() => toggleAccordion(index)}>
                    <span>{faq.question}</span>
                    <svg
                      className={`w-6 h-6 transform ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                {openIndex === index && (
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    {faq.answer}
                  </div>
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
