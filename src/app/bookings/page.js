"use client";

import React, { useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} on ${date}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-96">
        <label className="block mb-2">
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1" required />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1" required />
        </label>
        <label className="block mb-4">
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1" required />
        </label>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
