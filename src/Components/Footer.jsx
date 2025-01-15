import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-100 border-t border-gray-300">
      <div className="container mx-auto px-6 lg:px-12 py-10 flex flex-wrap gap-y-10">
        {/* Brand Section */}
        <div className="footer-brand flex flex-col items-center lg:items-start w-full lg:w-1/4">
          <div className="flex items-center pb-5">
            <img
              className="w-12 h-12 mr-3 rounded-full"
              src="/villa.png"
              alt="H2B Brokers Logo"
            />
            <h1 className="text-2xl font-bold text-gray-800">H2B Brokers</h1>
          </div>
          <h4 className="text-orange-500 text-lg font-semibold italic">
            "Choice For The Best"
          </h4>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-wrap justify-between w-full lg:w-3/4">
          <div className="w-1/2 md:w-1/3 px-4">
            <h4 className="text-gray-700 font-bold mb-4">Explore</h4>
            <ul>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/3 px-4">
            <h4 className="text-gray-700 font-bold mb-4">Contact</h4>
            <ul>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Phone: +2519 123 456
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Email: h2bbrockers.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/3 px-4">
            <h4 className="text-gray-700 font-bold mb-4">Social Media</h4>
            <ul>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 flex items-center transition-colors"
                >
                  <i className="fab fa-facebook-f mr-2"></i> Facebook
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 flex items-center transition-colors"
                >
                  <i className="fab fa-twitter mr-2"></i> Twitter
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 flex items-center transition-colors"
                >
                  <i className="fab fa-instagram mr-2"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Subscription Section */}
        <form
          action="#"
          className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-orange-500 focus:ring-2"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="copyright bg-gray-200 py-4 text-center text-gray-600 text-sm">
        &copy; 2025 Developed by Henok Assefa. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
