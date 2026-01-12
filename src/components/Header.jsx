import React, {useState} from 'react';
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { navItems } from '../Constant/data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full py-5 lg:px-20 sticky top-0 rounded-lg z-50 bg-gray-50 shadow-sm'>
        <div className="container flex items-center justify-between">

            {/* Logo */}
            <a href="#home" className='flex items-center gap-1 hover:text-orange-50 transition-colors'>
                <img src="../../public/images/caffeLogo.png" alt="Logo" width={65} height={50}/>
                <h1 className='text-2xl font-bold'>CAFFE ENGINEERING</h1>
            </a>

            {/* Mobile Menu */}
            <nav className={`navBar ${isMenuOpen ? "active" : "" }`}>
                {/* Close Menu */}
                <div className='absolute top-8 left-8 right-8 flex items-center justify-between mb-10'>
                    {/* Logo */}
                    <a href="#about" className='flex items-center gap-1 hover:text-orange-50 transition-colors'>
                        <img src="../../public/images/caffeLogo.png" alt="Logo" width={65} height={50}/>
                        <h1 className='text-2xl font-bold'>CAFFE ENGINEERING</h1>
                    </a>
                    <button onClick={toggleMenu} className='hover:text-orange-50'>
                        <RiCloseLine size={30}/>
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="space-y-5 text-center">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <a href={item.href} className='text-lg font-medium hover:text-orange-50 transition-colors'>{item.label}</a>
                      </li>
                    ))}
                </ul>

                {/* Login Btn */}
                <button className="primary-btn mt-12 max-w-40 w-full">Login</button>
            </nav>

            {/* Menu Btn */}
            <button className="lg:hidden hover:text-orange-50" onClick={toggleMenu}>
                <RiMenuLine/>
            </button>

            {/* Desktop Menu */}
            <nav className="max-lg:hidden flex items-center gap-10">
                {/* Menu Items */}
                <ul className="gap-10 flex">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <a href={item.href} className='hover:text-orange-50 transation-colors font-medium text-lg'>{item.label}</a>
                      </li>
                    ))}
                </ul>
                <button className='max-lg:hidden primary-btn'>Login</button>
            </nav>
        </div>
    </header>
  )
}

export default Header