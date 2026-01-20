import React from 'react'

const Services = () => {
  return (
    <section className="w-full bg-white lg:px-20 py-10" id="services">
        <div className="container lg:py-15 py-15 flex flex-col items-center">
            <div className="mx-auto">
                <h1 className="text-black text-3xl font-bold text-center px-10 mb-2">Our Services</h1>
                <div className='w-25 h-0.5 mx-auto bg-orange-50 lg:mb-10'></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="/Services/1.jpg" alt="Electrical Design" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Electrical Design, Estimate & Installation</h3>
                        <p className='text-justify indent-8'>We provide comprehensive electrical services including system design, detailed cost estimation, and professional installation. All works are executed in accordance with applicable electrical codes, safety standards, and project specifications.</p>
                    </div>
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="public/Services/2.jpg" alt="Structured Cabling" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Structured Cabling</h3>
                        <p className='text-justify indent-8'>We supply and install structured cabling systems for data, voice, and communication networks. Our solutions ensure reliability, scalability, and organized infrastructure for commercial and industrial applications.</p>
                    </div>
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="/Services/3.jpeg" alt="Cable Tray Fabrication" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Cable Tray Fabrication</h3>
                        <p className='text-justify indent-8'>We fabricate and install high-quality cable tray systems to support and protect electrical and communication cables. Our cable management solutions are designed for durability, safety, and ease of maintenance.</p>
                    </div>
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="public/Services/4.png" alt="Fabrication and Installation" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Fabrication and Installation</h3>
                        <p className='text-justify indent-8'>We offer custom fabrication and installation services for various project requirements. Our team ensures precision workmanship, proper alignment, and secure installation on site.</p>
                    </div>
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="public/Services/5.jpg" alt="Heating, Ventilation, and Air-Conditioning (HVAC)" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Heating, Ventilation, and Air-Conditioning (HVAC)</h3>
                        <p className='text-justify indent-8'>We provide HVAC installation services designed to maintain optimal indoor comfort, air quality, and energy efficiency in residential, commercial, and industrial facilities.</p>
                    </div>
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="public/Services/6.jpg" alt="Fabrication and Installation" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Fabrication and Installation</h3>
                        <p className='text-justify indent-8'>We install fire protection systems to safeguard life and property. Our services comply with fire safety codes and include proper system integration and testing.</p>
                    </div>
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="public/Services/7.jpeg" alt="Fabrication and Installation" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Fabrication and Installation</h3>
                        <p className='text-justify indent-8'>We supply and install fire detection and alarm systems that provide early warning and rapid response. Our systems are designed for accuracy, reliability, and regulatory compliance.</p>
                    </div>
                    <div className="faqItem relative bg-gray-50 p-6 shadow-md">
                        <img src="public/Services/8.jpg" alt="Fabrication and Installation" className="w-full h-48 object-cover rounded-[14px] mb-4" />
                        <h3 className="text-xl font-semibold mb-4 text-center">Fabrication and Installation</h3>
                        <p className='text-justify indent-8'>We provide complete plumbing works including water supply, sanitary, and drainage system installation. All installations are performed in accordance with plumbing standards and project requirements.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services