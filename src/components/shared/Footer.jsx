import React from 'react';

import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaCow } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-16">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-700">
                            <FaCow className="text-4xl font-bold text-green-700" />
                            QurbaniHat
                        </Link>

                        <p className="mt-4 leading-7">
                            QurbaniHat is a trusted livestock booking platform
                            where you can find healthy cows and goats from
                            verified sellers across Bangladesh.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="hover:text-green-400">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/animals"
                                    className="hover:text-green-400"
                                >
                                    All Animals
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/login"
                                    className="hover:text-green-400"
                                >
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/register"
                                    className="hover:text-green-400"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-white">
                            Contact
                        </h3>

                        <ul className="space-y-3">
                            <li>Email: support@qurbanihat.com</li>
                            <li>Phone: +880 1712-345678</li>
                            <li>Location: Dhaka, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-white">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-green-600"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-green-600"
                            >
                                <FaGithub />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-green-600"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm">
                    © {new Date().getFullYear()} QurbaniHat. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;