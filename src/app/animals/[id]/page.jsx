import { notFound } from "next/navigation";
import animals from "@/data/animals.json";
import BookingForm from "@/components/BookingForm";

export default async function AnimalDetailsPage({ params }) {
    const { id } = await params;

    const animal = animals.find(
        (item) => item.id === Number(id)
    );

    if (!animal) {
        notFound();
    }

    return (
        <section className="bg-slate-50 py-12">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">

                {/* Image */}
                <div>
                    <img
                        src={animal.image}
                        alt={animal.name}
                        className="h-[450px] w-full rounded-2xl object-cover shadow-lg"
                    />
                </div>

                {/* Details */}
                <div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        {animal.category}
                    </span>

                    <h1 className="mt-4 text-4xl font-bold">
                        {animal.name}
                    </h1>

                    <p className="mt-6 text-gray-600">
                        {animal.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">

                        <div className="rounded-xl bg-white p-4 shadow">
                            <p className="text-gray-500">Breed</p>
                            <p className="font-semibold">
                                {animal.breed}
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-4 shadow">
                            <p className="text-gray-500">Weight</p>
                            <p className="font-semibold">
                                {animal.weight} KG
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-4 shadow">
                            <p className="text-gray-500">Age</p>
                            <p className="font-semibold">
                                {animal.age} Years
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-4 shadow">
                            <p className="text-gray-500">Location</p>
                            <p className="font-semibold">
                                {animal.location}
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 text-4xl font-bold text-green-700">
                        ৳ {animal.price.toLocaleString()}
                    </div>

                </div>

            </div>

            <BookingForm />
        </section>
    );
}