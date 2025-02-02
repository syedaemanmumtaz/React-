import React from 'react'

function Navbar() {
  return (
    <>{/* Navbar */}
     <div className="bg-[#1a0139] text-white font-sans">
      <nav className="flex justify-between p-5 bg-[#14002b]">
        <h1 className="text-2xl font-bold"> Web</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About Me</li>
          <li className="hover:text-orange-500 cursor-pointer">Services</li>
          <li className="hover:text-orange-500 cursor-pointer">Skills</li>
          <li className="hover:text-orange-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-orange-500 px-4 py-2 rounded-full">Hire Me</button>
      </nav>
      </div>
    </>
  )
}

export default Navbar