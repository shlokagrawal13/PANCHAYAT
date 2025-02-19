import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Designer Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src="/images/LOGO/LogoMain.jpg" 
            alt="Logo" 
            className="h-28 w-28 mb-4 rounded-full border border-gray-600 shadow-md"
          />
          <p className="text-sm mt-5 opacity-75">© Designed By Prince Singh Sengar, Shlok Agrawal.</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-gray-700 pb-2">Contact Us</h3>
          <p>1368, Panchayat Dham, Mayur Vihar,</p>
          <p>Phase – 1 New Delhi – 110091</p>
          <p>Email: <a href="mailto:aippindia01@gmail.com" className="hover:underline">aippindia01@gmail.com</a></p>
          <p>Phone: <a href="tel:+919810623351" className="hover:underline">(+91) 98106-23351</a></p>
          <p>Phone: <a href="tel:+919999224042" className="hover:underline">(+91) 99992-24042</a></p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold uppercase tracking-wider border-b-2 border-gray-700 pb-2">Quick Links</h3>
          <ul className="space-y-2 mt-3">
            <li><a href="/about" className="hover:text-gray-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-400 transition">AIM & Objective</a></li>
            <li><a href="/contact" className="hover:text-gray-400 transition">Program and Activities</a></li>
            <li><a href="/privacy" className="hover:text-gray-400 transition">Contact</a></li>
            <li><a href="/services" className="hover:text-gray-400 transition">Gallery</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
