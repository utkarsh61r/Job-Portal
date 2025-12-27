import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto mt-10">

      {/* PURPLE HERO */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-950 
                      text-white text-center rounded-2xl 
                      px-6 py-12 md:py-14 mx-2">

        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Over 10,000+ jobs to apply
        </h2>

        <p className="text-sm md:text-base max-w-xl mx-auto opacity-90 mb-8">
          Your Next Big Career Move Starts Right Here – Explore the Best Job Opportunities
          And Take The First Step Toward Your Future!
        </p>

        {/* SEARCH BAR */}
        <div className="bg-white max-w-2xl mx-auto rounded-lg 
                        flex items-center overflow-hidden shadow-lg">

          <div className="flex items-center gap-2 px-4 flex-1">
            <img src={assets.search_icon} className="h-4" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="w-full py-3 outline-none text-sm"
            />
          </div>

          <div className="w-px h-6 bg-gray-300"></div>

          <div className="flex items-center gap-2 px-4 flex-1">
            <img src={assets.location_icon} className="h-4" />
            <input
              type="text"
              placeholder="Location"
              className="w-full py-3 outline-none text-sm"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700  transition">
            Search
          </button>
        </div>
      </div>

      {/* TRUSTED BY SECTION */}
      <div className="bg-white max-w-4xl mx-auto mt-[-28px] 
                      rounded-xl shadow-md border px-6 py-4 relative z-10">

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
          <span className="text-gray-500">Trusted by</span>

          <img src={assets.microsoft_logo} className="h-6" />
          <img src={assets.walmart_logo} className="h-6" />
          <img src={assets.accenture_logo} className="h-6" />
          <img src={assets.samsung_logo} className="h-6" />
          <img src={assets.amazon_logo} className="h-6" />
        </div>
      </div>

    </div>
  )
}

export default Hero
