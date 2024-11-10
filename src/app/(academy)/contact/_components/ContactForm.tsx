"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { send } from "@/lib/actions/email-action";
import TextInput from './TextInput';
import toast from 'react-hot-toast';
import SendButton from './SendButton';

const ContactForm = () => {
  const [state, formAction] = useActionState(send, { success: false, error: false });  // { success: true, data: "" }

  const showToast = () => {
    toast.success('This is a success message!', {
        duration: 4000,
        position: 'top-center',
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900 pb-16 mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">            
            <div className="grid gap-16 lg:grid-cols-3">
                <div className="hidden lg:block">
                    <h3 className="mb-4 text-md font-semibold text-gray-900 dark:text-white">Points of contact</h3>
                    <h4 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">Sifting Bytes Technologies LLP</h4>
                    <address className="text-sm font-normal text-gray-500 non-italic">
                        Sri Nilayam Building, Second Floor, Kondapur
                        <br/>Hyderabad, Telangana 500084
                    </address>
                    <h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Information & Sales</h4>
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link href="#">sales@siftingbytes.com</Link></p>
                    <h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Support</h4>
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link href="#">support@siftingbytes.com</Link></p>
                    <h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Verification of Employment</h4>
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link href="#">hr@siftingbytes.com</Link></p>
                    <h4 className="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Trainings & Admissions</h4>
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link href="#">admin@siftingbytes.com</Link></p>                    
                </div>
                <div className="col-span-2">
                    <h2 className="mb-4 text-md tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-xl dark:text-white">How can we help you?</h2>
                    {state.success && (
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                           <span className="font-medium">Success alert!</span> Email sent!
                        </div>
                    )}
                    {state.error && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                          <span className="font-medium">Danger alert!</span> Something went wrong!
                        </div>
                    )}
                    <form action={(formData) => formAction(formData)} className="space-y-8">
                        <div>   
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email address <span className="text-xs text-gray-500">(So we can reply to you)</span></label>
                            <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>                            
                        </div>
                        <div>
                            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Topic</label>
                            <select name="topic" id="topic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <option selected value="Trainings & Admissions">Trainings & Admissions</option>
                                <option value="Doubts & Queries">Doubts & Queries</option>                                
                            </select>                            
                        </div>
                        <TextInput id="subject" name="subject" placeholder="Let us know how we can help you" label="Subject"/>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea name="message" id="message" rows={6} minLength={50} maxLength={500} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                            {/* <div className="flex mt-4">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">By submitting this form, you confirm that you have read and agree to our <Link className="font-normal text-gray-900 underline hover:no-underline dark:text-white" href="#">Terms of Service</Link> and <Link className="font-normal text-gray-900 underline hover:no-underline dark:text-white" href="#">Privacy Statement</Link>.</label>
                            </div> */}
                        </div>
                        <SendButton />
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm;