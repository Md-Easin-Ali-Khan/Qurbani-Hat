import Image from "next/image";
import Link from "next/link";

export default function AnimalCard({ animal }) {
    const {
        id,
        name,
        breed,
        type,
        price,
        weight,
        location,
        image,
    } = animal;

    return (
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-60 w-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {type}
                    </span>

                    <span className="font-bold text-green-700">
                        ৳ {price.toLocaleString()}
                    </span>
                </div>

                <h3 className="text-xl font-bold">{name}</h3>

                <div className="space-y-1 text-sm text-gray-600">
                    <p>
                        <span className="font-medium">Breed:</span> {breed}
                    </p>

                    <p>
                        <span className="font-medium">Weight:</span> {weight} kg
                    </p>

                    <p>
                        <span className="font-medium">Location:</span> {location}
                    </p>
                </div>

                <Link
                    href={`/animals/${id}`}
                    className="block rounded-xl bg-green-700 py-3 text-center font-semibold text-white transition hover:bg-green-800"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}