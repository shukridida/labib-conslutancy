"use client";

import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">📞 Phone: +254 792 547 465 / +254 113 405 323</p>
      <p className="text-lg mb-4">📧 Email: labib.consultancy@gmail.com </p>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-96">
        <label className="block mb-4">
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1" required />
        </label>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
