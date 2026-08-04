"use client";

import React from 'react';
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <p className="p-10 text-center">Loading...</p>;
  }

  if (!session?.user) {
    return <p className="p-10 text-center">Please login first.</p>;
  }

  return (
    <section className="mx-auto max-w-xl py-16">
      <div className="rounded-2xl border bg-white p-8 shadow">

        <Image
          src={session.user.image || "/avatar.png"}
          alt={session.user.name}
          width={120}
          height={120}
          className="mx-auto rounded-full"
        />

        <h1 className="mt-5 text-center text-3xl font-bold">
          {session.user.name}
        </h1>

        <p className="mt-2 text-center text-gray-500">
          {session.user.email}
        </p>

        <Link
          href="/my-profile/update"
          className="mt-8 block rounded-lg bg-green-700 py-3 text-center text-white"
        >
          Update Information
        </Link>

      </div>
    </section>
  );
}

export default MyProfilePage;