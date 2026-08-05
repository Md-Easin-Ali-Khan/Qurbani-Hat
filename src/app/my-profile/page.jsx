"use client";

import React from 'react';
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
      </section>
    );
  }

  if (!session?.user) {
    return (
      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p className="text-lg text-gray-600">
          Please login to view your profile.
        </p>
      </section>
    );
  }

  const { user } = session;

  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <div className="flex flex-col items-center text-center">

            <img
              src={user.image || "/default-avatar.png"}
              alt={user.name}
              className="h-32 w-32 rounded-full border-4 border-green-600 object-cover"
            />

            <h1 className="mt-6 text-3xl font-bold">
              {user.name}
            </h1>

            <p className="mt-2 text-gray-500">
              {user.email}
            </p>

          </div>

          <div className="mt-10 grid gap-4 rounded-xl bg-gray-50 p-6 md:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="font-semibold">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="font-semibold">
                {user.email}
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/my-profile/update"
              className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Update Information
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MyProfilePage;