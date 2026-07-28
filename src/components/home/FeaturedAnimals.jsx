import React from 'react';
import animals from "@/data/animals.json";
import Link from "next/link";
import AnimalCard from "../animal/AnimalCard";

const FeaturedAnimals = () => {
    // Show only the first 4 animals (or filter as needed)
    const featuredList = animals.slice(0, 14);

    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-4">

                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold">
                        Featured Animals
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Explore our handpicked healthy livestock for this
                        year's Qurbani.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredList.map((animal) => (
                        <AnimalCard
                            key={animal.id}
                            animal={animal}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/animals"
                        className="inline-flex rounded-xl border border-green-700 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                    >
                        View All Animals
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedAnimals;