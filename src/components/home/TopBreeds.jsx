import React from 'react';
import Image from "next/image";

const breeds = [
    {
        id: 1,
        name: "Brahman",
        type: "Cow",
        image: "/breeds/brahman.jpg",
        description: "Known for its strength, large size, and excellent meat quality.",
    },
    {
        id: 2,
        name: "Sahiwal",
        type: "Cow",
        image: "/breeds/sahiwal.jpg",
        description: "A popular breed in South Asia, healthy and well-adapted.",
    },
    {
        id: 3,
        name: "Black Bengal",
        type: "Goat",
        image: "/breeds/black-bengal.jpg",
        description: "Famous for premium meat quality and widespread in Bangladesh.",
    },
    {
        id: 4,
        name: "Jamunapari",
        type: "Goat",
        image: "/breeds/jamunapari.jpg",
        description: "Large-sized goat breed with an attractive appearance.",
    },
];

const TopBreeds = () => {
    return (
        <section className="bg-green-50 py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Top Breeds
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Discover some of the most popular cattle and goat breeds for Qurbani.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {breeds.map((breed) => (
                        <div
                            key={breed.id}
                            className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={breed.image}
                                    alt={breed.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5">
                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                    {breed.type}
                                </span>

                                <h3 className="mt-4 text-xl font-bold">
                                    {breed.name}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {breed.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopBreeds;