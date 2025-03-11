import React from 'react' 
import logo from "../../assets/image/logo.png" 
import { navItems } from '../../Constant/index'
import {X , Menu} from "lucide-react";
import { useState } from 'react';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-2 py-3 border-b z-50 backdrop-blur border-neutral-700/80">
      <div className="px-4 mx-auto lg:max-w-[1180px] lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-2xl font-bold">VirtualR</span>
          </div>
          <div  className="hidden lg:flex gap-6 text-[19px] font-normal">
            {navItems.map((item, index) => (
                <a href={item.href}>{item.label}</a>
            ))}
          </div>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-4 px-5 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-5 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end text-white">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X/> : <Menu/> }
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex gap-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;