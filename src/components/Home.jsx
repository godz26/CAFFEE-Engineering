import React, { useState, useEffect } from 'react'

const Home = () => {
  const images = [
  '/images/picture1.jpg',
  '/images/picture2.jpg',
  '/images/picture3.jpg'
]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="w-full bg-white lg:px-20 pt-10 lg:pt-24 pb-24" id="home">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Banner / Slideshow */}
        <div className="order-1 md:order-2 relative overflow-hidden rounded-2xl shadow-lg mx-10">
          
          {/* Sliding Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="
                  w-full 
                  shrink-0
                  h-75
                  md:h-105
                  lg:h-125
                  xl:h-140
                  object-cover
                "
              />
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                  index === current ? 'bg-orange-50' : 'bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left mx-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Engineering Your Dream Home <br />
            <span className="text-orange-600">Into Reality</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
            CAFFE Engineering delivers professional electrical, HVAC, fire
            protection, plumbing, and engineering services—turning complex
            requirements into efficient, long-lasting solutions you can trust.
          </p>

          <p className="mt-6 text-sm font-semibold text-gray-600">
            Precision • Safety • Reliability
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button className="primary-btn">Get a Quote</button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Our Services
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
