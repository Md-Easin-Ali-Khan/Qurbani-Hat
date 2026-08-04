"use client";

import React from 'react';
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile updated successfully");

    router.push("/my-profile");
  };

  return (
    <section className="mx-auto max-w-xl py-16">
      <form
        onSubmit={handleUpdate}
        className="space-y-5 rounded-2xl border bg-white p-8 shadow"
      >
        <h2 className="text-3xl font-bold">
          Update Profile
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          type="url"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <button
          className="w-full rounded-lg bg-green-700 py-3 text-white"
        >
          Update Information
        </button>
      </form>
    </section>
  );
}

export default UpdateProfilePage;