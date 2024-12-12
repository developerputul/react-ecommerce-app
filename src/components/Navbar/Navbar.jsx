import React from 'react'
import Logo from "../../assets/Logo.png"
import { ShoppingCart } from 'lucide-react'
import { Link } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400'>
        <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
            <img src={Logo} alt="" className='md:w-24 w-20'/>
            <div className='flex items-center gap-5'>
                <nav className='hidden md:block'>
                    <ul className='flex items-center font-semibold text-xl gap-7'>
                        <Link to='/'><i>Home</i></Link>
                        <Link to='/mens'><li>Mens</li></Link>
                        <Link to='/womens'><li>Womens</li></Link>
                        <Link to='/kids'><li>Kids</li></Link>
                        <Link to='login'> <button className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</button></Link>
                       
                    </ul>
                </nav>
                <Link to='/cart'className='relative'>
                    <ShoppingCart/>
                <div className='bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white'></div>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar