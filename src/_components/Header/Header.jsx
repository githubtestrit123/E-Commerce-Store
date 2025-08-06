import React from 'react'
import Link from "next/link"
import { FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-pink-600">
        E-Store<span className="text-black">.</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md mx-6">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button className="bg-pink-600 text-white px-4 py-2 rounded-r-full">
          <FaSearch />
        </button>
      </div>

      {/* Navigation + Cart */}
      <nav className="flex items-center gap-6 text-black">
        <Link href="/">Home</Link>
        <Link href="/Store">Store</Link>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>
      </nav>
  
      
    </header>
  )
}

