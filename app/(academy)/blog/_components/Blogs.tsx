import Link from 'next/link';
import React from 'react';

const Blogs = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-xl lg:text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-md">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            </div> 
            <div className="grid gap-8 mb-16 lg:divide-x lg:divide-gray-200 dark:lg:divide-gray-700 lg:grid-cols-3">
                <article>
                    <Link href="#">
                        <img className="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png" alt="blog image"/>
                    </Link>
                    <h2 className="my-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        <Link href="#">SEO Basics: Beginner's Guide to SEO Success</Link>
                    </h2>
                    <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                    <Link href="#" className="inline-flex text-sm items-center font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </article> 
                <div className="space-y-8 lg:pl-8">
                    <article>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link href="#">How to quickly deploy a static website</Link>
                        </h2>
                        <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </article> 
                    <article>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link href="#">What is SEO? Search Engine Optimization Explained</Link>
                        </h2>
                        <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </article> 
                    <article>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link href="#">Spotify's Car Thing available to all premium users</Link>
                        </h2>
                        <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </article> 
                </div>
                <div className="space-y-8 lg:pl-8">
                    <article>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link href="#">How to Rank Higher on Google (6 Easy Steps)</Link>
                        </h2>
                        <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </article> 
                    <article>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link href="#">12 SEO Best Practices That Everyone Should Follow</Link>
                        </h2>
                        <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </article>
                    <article>
                        <h2 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            <Link href="#">How to schedule your Tweets to send later</Link>
                        </h2>
                        <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                        <Link href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </article>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default Blogs;