import Image from "next/image";
import BookingForm from "./BookingForm";

export default function AnimalDetails({ animal }) {
  // Defensive check in case animal object is null or undefined during loading
  if (!animal) {
    return <div className="py-16 text-center text-gray-500">Animal details unavailable.</div>;
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src={animal.image || "/placeholder.jpg"}
            alt={animal.name || "Animal image"}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Details Container */}
        <div>
          {/* Changed span to inline-block so py-2 works properly */}
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            {animal.type}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {animal.name}
          </h1>

          <p className="mt-6 text-gray-600">
            {animal.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Info label="Breed" value={animal.breed} />
            <Info label="Weight" value={animal.weight ? `${animal.weight} KG` : "N/A"} />
            <Info label="Age" value={animal.age ? `${animal.age} Years` : "N/A"} />
            <Info label="Location" value={animal.location} />
            <Info label="Category" value={animal.category} />
            <Info 
              label="Price" 
              value={animal.price ? `৳ ${animal.price.toLocaleString()}` : "N/A"} 
            />
          </div>

          <BookingForm animalId={animal.id} />
        </div>

      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="mt-1 font-semibold text-gray-900">
        {value || "N/A"}
      </h3>
    </div>
  );
}