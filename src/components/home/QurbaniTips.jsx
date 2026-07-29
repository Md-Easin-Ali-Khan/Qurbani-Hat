import React from 'react';

import { BsHeartPulse, BsShieldCheck, BsTruck } from 'react-icons/bs';
import { BiLeaf } from 'react-icons/bi';

const tips = [
    {
        id: 1,
        title: "Choose a Healthy Animal",
        description:
            "Select an active and healthy animal that meets Islamic Qurbani requirements.",
        icon: BsHeartPulse,
    },
    {
        id: 2,
        title: "Check Age & Teeth",
        description:
            "Ensure the animal has reached the required age before purchasing.",
        icon: BsShieldCheck,
    },
    {
        id: 3,
        title: "Natural Feeding",
        description:
            "Animals raised with natural food are healthier and better for Qurbani.",
        icon: BiLeaf,
    },
    {
        id: 4,
        title: "Safe Transportation",
        description:
            "Arrange proper transport to avoid stress or injury to the animal.",
        icon: BsTruck,
    },
];

const QurbaniTips = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Qurbani Tips
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Helpful tips to choose the right animal for a meaningful Qurbani.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {tips.map((tip) => {
                        const Icon = tip.icon;

                        return (
                            <div
                                key={tip.id}
                                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-4 inline-flex rounded-full bg-green-100 p-4">
                                    <Icon className="h-7 w-7 text-green-700" />
                                </div>

                                <h3 className="mb-3 text-xl font-semibold">
                                    {tip.title}
                                </h3>

                                <p className="text-gray-600">
                                    {tip.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default QurbaniTips;