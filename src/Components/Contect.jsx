import React from 'react'

function Contect() {
  return (
    <>
    <div className="bg-[#1a0139] text-white font-sans">
    <section className="p-10">
        <h2 className="text-3xl font-bold text-center text-orange-400">Contact</h2>
        <form className="max-w-lg mx-auto mt-6 bg-[#14002b] p-5 rounded-xl">
          <input type="text" placeholder="Full Name" className="w-full p-2 mb-4 bg-gray-800 rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-2 mb-4 bg-gray-800 rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 bg-gray-800 rounded"></textarea>
          <button className="w-full bg-orange-500 py-2 rounded-full">Send</button>
        </form>
      </section>
    </div>
    </>
  )
}

export default Contect