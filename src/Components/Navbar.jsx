import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout, auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const adminEmail = "bini@gmail.com";

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-10 flex justify-between items-center px-8 py-5">
      <div className="flex items-center">
        <img
          className="w-10 h-10 mr-2 rounded-full"
          src="/villa.png"
          alt="H2B Brokers Logo"
        />
        <h1 className="text-2xl font-bold text-white">H2B Brokers</h1>
      </div>

      <div>
        <ul className="hidden lg:flex space-x-8 text-white">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/for-sell" className="hover:text-gray-400">
              For Sell
            </Link>
          </li>
          <li>
            <Link to="/for-rent" className="hover:text-gray-400">
              For Rent
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-gray-400">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-gray-400">
              Contact Us
            </Link>
          </li>

          {user && user.email === adminEmail && (
            <li>
              <Link to="/create-post" className="hover:text-gray-400">
                Create Post +
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="flex lg:hidden">
        <div onClick={toggleMenu}>
          <BiMenu size={24} className="text-white hover:text-orange-600" />
        </div>
        {menuOpen && (
          <div className="absolute top-24 right-0 w-1/2 bg-gray-800 text-white">
            <ul className="flex flex-col items-center gap-2 py-10">
              <li className="hover:bg-orange-500 w-[80%] text-center py-2 rounded-md hover:text-white">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className="hover:bg-orange-500 w-[80%] text-center py-2 rounded-md hover:text-white">
                <Link to="/for-sell" className="">
                  For Sell
                </Link>
              </li>
              <li className="hover:bg-orange-500 w-[80%] text-center py-2 rounded-md hover:text-white">
                <Link to="/for-rent" className="">
                  For Rent
                </Link>
              </li>
              <li className="hover:bg-orange-500 w-[80%] text-center py-2 rounded-md hover:text-white">
                <Link to="/service" className="">
                  Service
                </Link>
              </li>
              <li className="hover:bg-orange-500 w-[80%] text-center py-2 rounded-md hover:text-white">
                <Link to="/contact-us" className="">
                  Contact Us
                </Link>
              </li>
              <li className=" w-[80%] text-center ">
                <div className="">
                  <Link to="/login" className="">
                    <h4
                      onClick={() => {
                        logout();
                      }}
                      className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700"
                    >
                      Logout
                    </h4>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden lg:flex items-center space-x-2">
        <Link
          to="/login"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700"
        >
          <h4
            onClick={() => {
              logout();
            }}
          >
            Logout
          </h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
