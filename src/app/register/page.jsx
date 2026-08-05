"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const image = form.get("image");
        const password = form.get("password");

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message || "Registration failed");
            return;
        }

        toast.success("Registration successful");
        router.push("/login");
    };

    const handleGoogleLogin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Google login failed");
        }
    };

    return (
        <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-50 px-4 py-16">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                <h1 className="mb-2 text-center text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Join QurbaniHat today
                </p>

                <form onSubmit={handleRegister} className="space-y-5">
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
                    />

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
                    />

                    <input
                        name="image"
                        type="url"
                        required
                        placeholder="Photo URL"
                        className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
                    />

                    <input
                        name="password"
                        type="password"
                        required
                        minLength={8}
                        placeholder="Password"
                        className="w-full rounded-lg border p-3 outline-none focus:border-green-600"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>
                </form>

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-sm text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg border py-3 font-medium transition hover:bg-gray-100"
                >
                    <FcGoogle size={22} />
                    Continue with Google
                </button>

                <p className="mt-6 text-center text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-green-700 hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </section>
    );
};

export default RegisterPage;