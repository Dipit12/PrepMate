import React from 'react'
import Desktop2 from '../assets/Desktop2.png'
import fb from '../assets/fb.png'
import figma from '../assets/figma.png'
import ig from '../assets/ig.png'
import github from '../assets/github.png'

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center relative" // Removed h-screen
      style={{ backgroundImage: `url(${Desktop2})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#162027]/35 to-[#162027]/80"></div>

      <div className="relative z-10 flex flex-col items-center py-10"> {/* Added padding */}
        <div className="flex space-x-5">
          <img src={fb} className="w-[39px] h-[40px]" alt="Facebook" />
          <img src={figma} className="w-[39px] h-[40px]" alt="Figma" />
          <img src={ig} className="w-[39px] h-[40px]" alt="Instagram" />
          <img src={github} className="w-[39px] h-[40px]" alt="GitHub" />
        </div>

        <div className="mt-10 flex space-x-5 text-white"> {/* Combined margin and flex */}
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Events</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">Team</a>
        </div>

        <hr className="w-full my-5 border-t-2 border-gray-300" />

        <div className='text-white'> {/* Adjusted margin */}
          &#xA9; 2025 All Rights Reserved
        </div>

        <hr className="w-full my-5 border-t-2 border-gray-300" /> {/* Removed extra margin */}
      </div>
    </div>
  )
}

export default Footer