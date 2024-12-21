// import React from 'react'
import Logo from "../../assets/Logo.png";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom"; // Correct import
import { useContext, useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { Shopcontext } from "../../Context/ShopContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {getTotalCartItems} = useContext(Shopcontext)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto py-2 px-5 flex justify-between items-center">
        <img src={Logo} alt="Logo" className="md:w-24 w-20" />
        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul className="flex items-center font-semibold text-xl gap-7">
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
          {/* Link to Cart */}
       
          <Link to="/cart" className="relative w-10">
            <ShoppingCart />
          <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">{getTotalCartItems()}</div>
          </Link>
           {/* Mobile menu icon */}

          {showMenu ? (
            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all md:hidden" size={30}/>
          ):(
            <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all md:hidden" size={30}/>
          )}
        </div>
      </div>
    <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  )
}

export default Navbar;
