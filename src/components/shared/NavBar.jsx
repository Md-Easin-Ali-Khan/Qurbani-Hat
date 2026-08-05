"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaCow } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/animals" },
];

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Logout successful");
        setOpen(false);
        router.replace("/");
        router.refresh();
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 shadow-lg backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-700">
                    <FaCow className="text-4xl text-green-700" />
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
                    {isPending ? (
                        <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-200" />
                    ) : user ? (
                        <div className="flex items-center gap-4">
                            <Link
                                href="/my-profile"
                                className="flex items-center gap-2 font-medium text-gray-700 hover:text-green-700"
                            >
                                <img
                                    src={user.image || "/default-avatar.png"}
                                    alt={user.name || "User"}
                                    title={user.email}
                                    className="h-10 w-10 rounded-full border object-cover"
                                />
                                <span>{user.name || "My Profile"}</span>
                            </Link>

                            <button
                                onClick={handleSignOut}
                                className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
                            >
                                Logout
                            </button>
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-gray-700 md:hidden"
                    aria-label="Toggle Navigation Menu"
                >
                    {open ? <BiX size={28} /> : <BiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {open && (
                <div className="bg-white shadow-md md:hidden">
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
                                <div className="mb-2 flex items-center gap-3 rounded-lg border p-3">
                                    <img
                                        src={user.image || "/default-avatar.png"}
                                        alt={user.name || "User"}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />

                                    <div>
                                        <p className="font-semibold">{user.name}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                </div>

                                <Link
                                    href="/my-profile"
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2 hover:bg-gray-100"
                                >
                                    View Profile
                                </Link>

                                <button
                                    onClick={handleSignOut}
                                    className="w-full rounded-lg bg-red-500 px-3 py-2 text-left text-white hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <div className="space-y-2 pt-2">
                                <Link
                                    href="/login"
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg border px-3 py-2 text-center text-gray-700"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg bg-green-700 px-3 py-2 text-center text-white"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;