"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaCow } from "react-icons/fa6";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/animals" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Replace with Better Auth session later
    const user = null;

    return (
        <header className="sticky top-0 z-50 shadow-lg bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-700">
                    <FaCow className="text-4xl font-bold text-green-700" />
                    QurbaniHat
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition hover:text-green-700 ${pathname === link.href
                                ? "font-semibold text-green-700"
                                : "text-gray-700"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Auth */}
                <div className="hidden items-center gap-3 md:flex">
                    {user ? (
                        <div className="flex items-center gap-3">

                        </div>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="rounded-lg border border-green-700 px-4 py-2 text-green-700 transition hover:bg-green-50"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-lg bg-green-700 px-4 py-2 text-white transition hover:bg-green-800"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <BiX size={28} /> : <BiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="shadow-md bg-white md:hidden">
                    <div className="space-y-2 p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`block rounded-lg px-3 py-2 ${pathname === link.href
                                    ? "bg-green-100 font-semibold text-green-700"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {user ? (
                            <>
                                <Link
                                    href="/my-profile"
                                    className="block rounded-lg px-3 py-2 hover:bg-gray-100"
                                >
                                    My Profile
                                </Link>

                                <button className="w-full rounded-lg bg-red-500 px-3 py-2 text-left text-white">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="block rounded-lg border px-3 py-2 text-center"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="block rounded-lg bg-green-700 px-3 py-2 text-center text-white"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}