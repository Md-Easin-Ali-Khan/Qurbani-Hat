import Image from "next/image";
import Link from "next/link";

export default function AnimalCard({ animal }) {
    // Return early or a skeleton if animal data is completely missing
    if (!animal) return null;

    const {
        id,
        name,
        breed,
        type,
        price,
        weight,
        age,
        location,
        image,
    } = animal;

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="relative h-60 w-full">
                <Image
                    src={image || "/placeholder.jpg"} // Fallback image if missing
                    alt={`Image of ${name}, a ${breed}`} // Better accessibility
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Performance boost!
                    className="object-cover"
                />
            </div>

            <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        {type}
                    </span>

                    <span className="font-bold text-green-700 dark:text-green-400">
                        ৳ {price?.toLocaleString() || "N/A"}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {name}
                </h3>

                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Breed:</span> {breed || "Unknown"}
                    </p>

                    <p>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Age:</span> {age ? `${age} Years` : "Unknown"}
                    </p>

                    <p>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Weight:</span> {weight ? `${weight} kg` : "Unknown"}
                    </p>

                    <p>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Location:</span> {location || "Unknown"}
                    </p>
                </div>

                <Link
                    href={`/animals/${id}`}
                    className="block rounded-xl bg-green-700 py-3 text-center font-semibold text-white transition hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}