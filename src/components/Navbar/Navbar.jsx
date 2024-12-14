// import React from 'react'
import Logo from "../../assets/Logo.png"
import { ShoppingCart } from 'lucide-react'
import { Link } from 'lucide-react'
import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu) //it will toggle if the showMenu is false  it will be true and if true it will be false
    }

  return (
    <div className='bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400'>
        <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
            <img src={Logo} alt="" className='md:w-24 w-20'/>
            <div className='flex items-center gap-5'>
                <nav>
                    <ul className='flex items-center font-semibold text-xl gap-7'>
                        <Link to='/'><i>Home</i></Link>
                        <Link to='/mens'><li>Mens</li></Link>
                        <Link to='/womens'><li>Womens</li></Link>
                        <Link to='/kids'><li>Kids</li></Link>
                        <Link to="/login"> <button className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</button></Link>
                    </ul>
                </nav>
                <Link to='/cart' className='relative w-10'>
                    <ShoppingCart/>
                <div className='bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white'>0</div>
                </Link>
                {/* Mobile humburger icon */}

                {!showMenu ? (
                    <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all md:hidden" size={30}/>
                ):(
                    <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all md:hidden" size={30}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar