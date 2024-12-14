import React from "react";
import { Link } from "react-router-dom"; // Correct import
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[70%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-x-xl shadow-md`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
        <ul className="flex flex-col space-y-4 text-xl">
              {/* Use Link for proper navigation */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mens">Mens</Link>
              </li>
              <li>
                <Link to="/womens">Womens</Link>
              </li>
              <li>
                <Link to="/kids">Kids</Link>
              </li> 
              <li>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">
                  Login
                </button>
              </li>
            </ul>
        </nav>
      </div>
      <div className="">
          Made with by Putul Tongchangya
      </div>
    </div>
  );
};

export default ResponsiveMenu;
