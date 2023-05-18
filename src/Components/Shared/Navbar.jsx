import React, { useState } from 'react';
import logo  from '../../assets/logo.png'
import menu  from '../../assets/menu.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-[50px] justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex">
                            {/* Website logo */}
                            <img className="h-10 md:hidden" onClick={toggleNavbar} src={menu} alt="menu" />
                            <img className="h-10 " src={logo} alt="Logo" />
                        </div>
                        <div className="hidden md:block ml-4">
                            {/* Website name */}
                            <span className="text-white font-semibold text-lg">GeniusGadgets</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        {/* Home */}
                        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        {/* All Toys */}
                        <a href="/toys" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">All Toys</a>
                        {/* My Toys */}
                        <a href="/my-toys" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Toys</a>
                        {/* Add A Toy */}
                        <a href="/add-toy" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add A Toy</a>
                        {/* Blogs */}
                        <a href="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
                    </div>
                    <div className="flex items-center">
                        {/* User profile picture */}
                        <img className="h-[35px] w-[35px] rounded-full" src="/profile.jpg" alt="Profile" />
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    {/* Home */}
                    <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    {/* All Toys */}
                    <a href="/toys" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">All Toys</a>
                    {/* My Toys */}
                    <a href="/my-toys" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">My Toys</a>
                    {/* Add A Toy */}
                    <a href="/add-toy" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add A Toy</a>
                    {/* Blogs */}
                    <a href="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</a>
                </div>
            </div>
        </nav>

    )
}
export default Navbar