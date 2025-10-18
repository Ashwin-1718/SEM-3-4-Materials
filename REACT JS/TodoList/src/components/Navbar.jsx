import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-indigo-900 text-white py-3 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="logo">
          <span className="text-2xl font-extrabold tracking-wide">iTask</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          <li className="cursor-pointer hover:text-violet-300 transition-colors duration-300">Home</li>
          <li className="cursor-pointer hover:text-violet-300 transition-colors duration-300">Your Tasks</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
