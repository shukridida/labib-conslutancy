"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500">
          ConsultancyPro
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
