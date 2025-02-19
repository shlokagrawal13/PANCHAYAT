import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter = () => {
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsAboutDropdownOpen(false);
  };

  return (
    <div className="w-screen bg-gray-900 px-6 py-2 text-gray-200 flex justify-between items-center text-sm fixed z-50 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-3">
        <img
          src="/images/LOGO/LogoMain.jpg"
          alt="Logo"
          className="h-14 w-14 rounded-full border-2 border-blue-500 shadow-lg"
        />
        <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AIPP</p>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-12">
        <Link to="/" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300 
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">Home</Link>

        {/* About Us with Dropdown */}
        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/about" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
            after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
            hover:after:w-full after:transition-all after:duration-300">About Us</Link>
          {isAboutDropdownOpen && (
            <div className="absolute top-full left-0 w-56 bg-gray-800/95 backdrop-blur-md shadow-xl border border-gray-700 rounded-xl mt-2 overflow-hidden transition-all duration-300 ease-out">
              <ul className="flex flex-col py-2">
                <Link to="/About" className="px-6 py-2.5 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
                <Link to="/Conveners" className="px-6 py-2.5 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200">
                  Conveners
                </Link>
                <Link to="/WorkingCommittee" className="px-6 py-2.5 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200">
                  Working Committee
                </Link>
              </ul>
            </div>
          )}
        </div>

        <Link to="/aim-objectives" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">AIM & Objective</Link>
        <Link to="/constitution" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">Constitution</Link>
        <Link to="/programs" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">Programs</Link>
        <Link to="/history" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">History</Link>
        <Link to="/media" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">Media</Link>
        <Link to="/gallery" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">Gallery</Link>
        <Link to="/contact" className="nav-link relative font-medium text-md hover:text-blue-400 transition-colors duration-300
          after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 
          hover:after:w-full after:transition-all after:duration-300">Contact</Link>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200">
          <GiHamburgerMenu size={24} className="text-blue-400" />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="sticky top-0 bg-gray-900 flex justify-end p-4 border-b border-gray-800">
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
            <AiOutlineClose size={24} className="text-blue-400" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-6 pt-4 pb-24">
          <Link to="/" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            Home
          </Link>
          
          {/* Mobile About Section */}
          <div className="flex flex-col gap-1">
            <Link to="/about" 
              className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
              onClick={toggleSidebar}>
              About Us
            </Link>
            <div className="flex flex-col ml-4 pl-4 border-l-2 border-gray-700">
              <Link to="/about" 
                className="text-md py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
                onClick={toggleSidebar}>
                 About Us
              </Link>
              <Link to="/Conveners" 
                className="text-md py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
                onClick={toggleSidebar}>
                Conveners
              </Link>
              <Link to="/WorkingCommittee" 
                className="text-md py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
                onClick={toggleSidebar}>
                Working Committee
              </Link>
            </div>
          </div>
          
          <Link to="/aim-objectives" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            AIM & Objective
          </Link>
          <Link to="/constitution" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            Constitution
          </Link>
          <Link to="/programs" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            Programs
          </Link>
          <Link to="/history" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            History
          </Link>
          <Link to="/media" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            Media
          </Link>
          <Link to="/gallery" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            Gallery
          </Link>
          <Link to="/contact" 
            className="text-lg py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={toggleSidebar}>
            Contact
          </Link>
        </nav>

        {/* Add padding at the bottom to ensure last items are visible */}
        <div className="h-20 bg-gray-900"></div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
