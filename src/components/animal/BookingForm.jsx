"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function BookingForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Booking submitted successfully!");

        setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
        });
    };

    return (
        <div className="mt-10 rounded-2xl border bg-white p-6">
            <h2 className="mb-6 text-2xl font-bold">
                Book This Animal
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value,
                        })
                    }
                    className="w-full rounded-lg border p-3"
                />

                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                    className="w-full rounded-lg border p-3"
                />

                <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={form.phone}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            phone: e.target.value,
                        })
                    }
                    className="w-full rounded-lg border p-3"
                />

                <textarea
                    rows={4}
                    placeholder="Address"
                    required
                    value={form.address}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            address: e.target.value,
                        })
                    }
                    className="w-full rounded-lg border p-3"
                />

                <button
                    className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800"
                >
                    Confirm Booking
                </button>

            </form>
        </div>
    );
}