import React from 'react'
import CaffeLogo from '../../public/images/CaffeLogo1.png'
import { heroLogos } from '../Constant/data'
import Marquee from 'react-fast-marquee'

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 lg:px-20 py-10" id="about">
      <div className="container lg:py-15 py-15 flex flex-col items-center">
        <h1 className="text-black text-3xl font-bold text-center px-10 mb-2">
          ABOUT US
        </h1>
        <div className='w-25 h-0.5 bg-orange-50'></div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:mt-10">
            <div className="lg:w-1/2 lg:h-170 mt-10 px-5 bg-red flex flex-col justify-center">
                <img 
                    src={CaffeLogo}
                    alt="About Us" 
                    className="w-100 h-100 rounded-lg mx-auto"
                />
            </div>
            <div className="lg:w-1/2 px-5 text-center lg:text-left">
                <h1 className="text-black text-xl font-bold mb-4 text-center">Our Story</h1>
                <p className="text-gray-700 mb-5">
                    CAFFE Engineering was established in October 2003. The company serves in the Design, Estimates, and Installations of Commercial and Industrial MEPF.
                </p>
                <p className="text-gray-700 mb-5">
                    CAFFE ENGINEERING’s first project was at San Miguel Corporation BPSI Plant for Contract Preventive Maintenance in Electrical and Mechanical Equipment’s and Motors. Later on the following year in Mactan Economic Zone Plant at LEAR Corporation as one of supplier/contractor in the Facilities Department.
                </p>
                <p className="text-gray-700 mb-5">
                    In 2007, Caffe Engineering entered SM Prime Holdings serving in Electrical, Mechanical, Fire Protection, and Fire Detection and Protection in the operation department.
                </p>
                <p className="text-gray-700 mb-5">
                    From 2012 to 2015, was part of the APM Mall Construction for Electrical works, Moreover, In those years, CAFFE ENGINEERING joined with other specialized service providers in construction industries in Private and Government local projects.
                </p>
                <p className="text-gray-700 mb-5">
                    Last 2015 to 2017, CAFFE ENGINEERING joined IPM Development Corporation in Aboitiz Housing Projects for Electrical and Auxiliary activities at PREVEJA Phase 2.
                </p>
                <p className="text-gray-700 mb-5">
                    From the same year 2017 to March 2020, CAFFE ENGINEERING serves at the Mactan International Airport CAAP Building and the Renovation of Terminals one and two for Electrical installations and Automation works (Fuel Hydrant).
                </p>
                <p className="text-gray-700 mb-5">
                    CAFFE ENGINEERING was affected and decided to venture out into other businesses. Hence, Easycure Construction and Supply Co. were established. At present, CAFFE ENGINEERING continues to serve at SM Prime Holdings Inc. and at Johndorf Ventures Corporation.
                </p>
            </div>
        </div>
         <h1 className="text-black text-3xl font-bold text-center px-10 mb-2 lg:mt-20 mt-10">
          ACCREDITED BY
        </h1>
        <div className='w-45 h-0.5 bg-orange-50'></div>
        <div className="relative overflow-hidden">
            <Marquee pauseOnHover={true}>
                {heroLogos.map((logo) => (
                    <div className="px-14 py-5" key={logo.id}>
                        <a
                            href={logo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center"
                        >
                            <img
                            src={logo.item}
                            alt="Accredited Logo"
                            width={logo.width}
                            className="w-auto h-20 rounded-lg"
                            />
                        </a>
                    </div>
                ))}
            </Marquee>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
