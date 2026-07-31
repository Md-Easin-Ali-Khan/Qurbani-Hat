import animals from "@/data/animals.json";
import { notFound } from "next/navigation";
import AnimalDetails from "@/components/animal/AnimalDetails";

export default async function AnimalDetailsPage({ params }) {
    const { id } = await params;

    const animal = animals.find(
        (item) => item.id === Number(id)
    );

    if (!animal) {
        notFound();
    }

    return <AnimalDetails animal={animal} />;
}