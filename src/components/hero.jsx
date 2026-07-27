import Link from 'next/link';
import React from 'react';
import { IoMoonSharp } from 'react-icons/io5';

const Hero_section = () => {
    return (
        <section className=" from-green-50 via-white to-emerald-50">
            <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col-reverse items-center gap-10 px-4 py-12 md:flex-row">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                        <IoMoonSharp />
                        <span>Eid-ul-Adha 2026</span>
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                        Find Your Perfect
                        <span className="block text-green-700">
                            Qurbani Animal
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                        Browse healthy cows and goats from trusted sellers across
                        Bangladesh. Book your preferred animal online with ease
                        and confidence.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                        <Link
                            href="/animals"
                            className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                        >
                            Browse Animals
                        </Link>

                        <Link
                            href="/animals"
                            className="rounded-xl border border-green-700 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
                        >
                            Explore More
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex flex-1 justify-center">
                    <img
                        src="cow.png"
                        alt="Cow"
                        className="w-full max-w-6xl rounded-3xl object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero_section;