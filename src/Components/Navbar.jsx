import React from 'react';
import { Link } from 'react-router-dom';
import { logout ,auth} from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const adminEmail = 'bini@gmail.com';
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
      <ul className="hidden md:flex space-x-8 text-white">
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
        
          {user && user.email === adminEmail && 
        <li>
          <Link to="/create-post" className="hover:text-gray-400">
            Create Post +
          </Link>
        </li>}
      </ul>
      </div>

      <div className="flex items-center space-x-2">
        <Link to="/login" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700">
          <h4 onClick={()=>{logout()}}>Logout</h4>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
