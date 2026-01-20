import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 pt-10 text-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start mb-6">
                {/* Company Info */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Caffe Engineering</h2>
                    <p className="text-sm">8X98+HHF, Mustang Rd, Lapu-Lapu, Cebu</p>
                    <p className="text-sm mt-2">Phone:
                        <a href="tel:+0322619472" className="text-blue-400 hover:text-blue-300"> 0322619472</a>
                    </p>
                    <p className="text-sm mt-2">Email:
                        <a href="mailto:contact@caffeengineering.com" className="text-blue-400 hover:text-blue-300"> contact@caffeengineering.com</a>
                    </p>
                </div>
                {/* Company Info */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Caffe Engineering</h2>
                    <p className="text-sm">1234 Engineering Lane<br />Tech City, TC 56789</p>
                    <p className="text-sm mt-2">Email:
                        <a href="mailto:contact@caffeengineering.com" className="text-blue-400 hover:text-blue-300">contact@caffeengineering.com</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start border-t-2 border-gray-700 pt-6 pb-4 space-y-6 md:space-y-0 md:space-x-12">
                {/* Copyright */}
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Caffe Engineering. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
