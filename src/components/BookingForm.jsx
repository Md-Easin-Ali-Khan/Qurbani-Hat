"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function BookingForm() {

    const router = useRouter();

    const { data: session } = authClient.useSession();

    const handleBooking = (e) => {
        e.preventDefault();

        if (!session?.user) {
            toast.error("Please login first");

            router.push("/login");

            return;
        }

        e.target.reset();

        toast.success("Booking placed successfully");
    };

    return (
        <section className="mx-auto mt-16 max-w-4xl rounded-2xl bg-white p-8 shadow-lg">

            <h2 className="mb-6 text-3xl font-bold">
                Book This Animal
            </h2>

            <form
                onSubmit={handleBooking}
                className="grid gap-5 md:grid-cols-2"
            >

                <input
                    required
                    placeholder="Full Name"
                    className="rounded-lg border p-3"
                />

                <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-lg border p-3"
                />

                <input
                    required
                    placeholder="Phone"
                    className="rounded-lg border p-3"
                />

                <input
                    required
                    placeholder="Address"
                    className="rounded-lg border p-3"
                />

                <button
                    className="rounded-lg bg-green-700 py-3 text-white hover:bg-green-800 md:col-span-2"
                >
                    Confirm Booking
                </button>

            </form>

        </section>
    );
}