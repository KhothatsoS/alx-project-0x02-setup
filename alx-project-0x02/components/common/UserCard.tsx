import React from "react";
import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white mb-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700 mt-2">Email: {email}</p>
      <p className="text-gray-500 mt-2">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}