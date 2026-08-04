import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <main className="grid min-h-screen place-items-center bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    {/* Status Code */}
                    <p className="text-5xl font-semibold text-green-600">404</p>

                    {/* Heading */}
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Page not found
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-base leading-7 text-slate-600">
                        Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or doesn’t exist.
                    </p>

                    {/* Illustration / Visual */}
                    <div className="my-8 flex justify-center">
                        <svg
                            className="h-32 w-32 text-slate-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-10 flex items-center justify-center">
                        <Link
                            href="/"
                            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;