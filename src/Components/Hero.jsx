import React from 'react'

function Hero() {
  return (
    <>
    <div className="bg-[#1a0139] text-white font-sans">
    <header className="text-center py-20 grid  ">
        <img className="w-20 h-20 col-end-6 rounded-full object-cover mx-auto mb-10" src="https://example.com/image.jpg" alt="Profile Pic" />
        <div className='col-end-6'>
        <h2 className="text-xl text-orange-400">Hi, It's me</h2>
        <h1 className="text-5xl font-bold">MD RIEAD MIA</h1>
        <p className="text-lg text-gray-300">And I'm a <span className="text-orange-400">Frontend Developer</span></p>
        <button className="mt-5 px-6 py-3 bg-orange-500 rounded-full">Download CV</button>
     </div> 
     </header>
    </div>
    </>
  )
}

export default Hero