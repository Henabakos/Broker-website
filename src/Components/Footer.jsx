
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-200">
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between">
        <div className="footer-brand flex flex-col items-center">
        <div className="flex items-center pb-10">
        <img
          className="w-10 h-10 mr-2 rounded-full"
          src="/villa.png"
          alt="H2B Brokers Logo"
        />
        <h1 className="text-2xl font-bold text-gray-500">H2B Brokers</h1>
      </div>
      <h4 className='text-orange-600 text-xl'>"Choice For The Best"</h4>
        </div>
        <nav className="flex flex-wrap space-x-8">
          <ul className="mr-8">
            <li>
              <h4 className="text-gray-700 font-bold mb-2">Explore</h4>
            </li>
            <li className='pb-3'>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline ">How it Works</a>
            </li>
            <li className='pb-3'>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline ">Our Services</a>
            </li>
            <li className='pb-3'>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline ">FAQs</a>
            </li>
          </ul>
          <ul className="mr-8">
            <li>
              <h4 className="text-gray-700 font-bold mb-2">Contact</h4>
            </li>
            <li className='pb-3'>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline">Phone: + 2519 123 456</a>
            </li>
            <li className='pb-3'>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline">Email: info@yourcompany.com</a>
            </li>
          </ul>
          <ul>
            <li className='pb-3'>
              <h4 className="text-gray-700 font-bold mb-2">Social Media</h4>
            </li>
            <li className='pb-3'>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline flex items-center">
                <i className="fab fa-facebook-f mr-2"></i> Facebook
              </a>
            </li>
            <li className='pb-3'>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline flex items-center">
                <i className="fab fa-twitter mr-2"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500 underline flex items-center">
                <i className="fab fa-instagram mr-2"></i> Instagram
              </a>
            </li>
          </ul>
        </nav>
        <form action="#" className="flex items-center mt-4">
          <input type="email" placeholder="Enter your email" className="rounded-md border border-gray-300 px-3 py-2 mr-2 focus:outline-none focus:ring-orange-500 focus:ring-1" />
          <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-700">Subscribe</button>
        </form>
      </div>
      <div className="copyright text-center py-4 text-gray-500">
        &copy; Copyright 2024 Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
