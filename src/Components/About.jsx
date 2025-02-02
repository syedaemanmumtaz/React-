import React from 'react'
function About() {
  return (
    <>
    <div className="bg-[#1a0139] text-white font-sans">
    <section className="p-10">
        <h2 className="text-3xl font-bold text-center text-orange-400">About Me</h2>
        <div className="flex justify-center mt-6">
          <div className="w-1/3">
            <img src="/profile.jpg" alt="Profile" className="rounded-xl" />
          </div>
          <div className="w-2/3 p-5">
            <h3 className="text-2xl font-semibold">Frontend Developer & Graphic Designer</h3>
            <p className="text-gray-300 mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
            <button className="mt-4 px-6 py-2 bg-orange-500 rounded-full">Read More</button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default About