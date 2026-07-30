"use client";

import React from 'react';
import { useMemo, useState } from "react";
import animalsData from "@/data/animals.json";
import AnimalCard from "@/components/animal/AnimalCard";

const AnimalsPage = () => {
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const filteredAnimals = useMemo(() => {
        let filtered = [...animalsData];

        // Search
        if (search.trim()) {
            filtered = filtered.filter((animal) =>
                animal.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sort
        if (sortOrder === "low-high") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-low") {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [search, sortOrder]);
    return (
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4">

                {/* Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-900">
                        All Animals
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Browse, search and sort healthy Qurbani animals.
                    </p>
                </div>

                {/* Search + Sort */}
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <input
                        type="text"
                        placeholder="Search by animal name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600 md:max-w-md"
                    />

                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="rounded-lg border px-4 py-3 outline-none focus:border-green-600"
                    >
                        <option value="">Sort by Price</option>
                        <option value="low-high">
                            Price: Low → High
                        </option>
                        <option value="high-low">
                            Price: High → Low
                        </option>
                    </select>

                </div>

                {/* Results */}
                <p className="mb-6 text-sm text-gray-500">
                    Showing {filteredAnimals.length} animals
                </p>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredAnimals.length > 0 ? (
                        filteredAnimals.map((animal) => (
                            <AnimalCard
                                key={animal.id}
                                animal={animal}
                            />
                        ))
                    ) : (
                        <div className="col-span-full rounded-xl border bg-white py-16 text-center">
                            <h3 className="text-2xl font-semibold">
                                No Animals Found
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Try searching with another name.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default AnimalsPage;