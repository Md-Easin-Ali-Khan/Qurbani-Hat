import React from 'react';

import { BiBadgeCheck } from 'react-icons/bi';
import { BsHeadset, BsShieldCheck, BsTruck } from 'react-icons/bs';

const features = [
    {
        id: 1,
        title: "Trusted Sellers",
        description:
            "All livestock are listed by verified and trusted sellers across Bangladesh.",
        icon: BiBadgeCheck,
    },
    {
        id: 2,
        title: "Healthy Animals",
        description:
            "Every animal is carefully raised with proper nutrition and regular health care.",
        icon: BsShieldCheck,
    },
    {
        id: 3,
        title: "Easy Booking",
        description:
            "Reserve your preferred Qurbani animal in just a few simple steps.",
        icon: BsTruck,
    },
    {
        id: 4,
        title: "24/7 Support",
        description:
            "Our support team is always ready to help you before and after booking.",
        icon: BsHeadset,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Why Choose QurbaniHat?
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We make your Qurbani experience simple, secure,
                        and hassle-free with trusted sellers and
                        premium quality livestock.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="group rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
                            >
                                <div className="mb-6 inline-flex rounded-full bg-green-100 p-4 transition group-hover:bg-green-700">
                                    <Icon className="h-8 w-8 text-green-700 group-hover:text-white" />
                                </div>

                                <h3 className="mb-3 text-xl font-bold">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;