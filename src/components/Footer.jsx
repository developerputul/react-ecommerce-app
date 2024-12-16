import React from 'react'
import { data, Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSquare, FaTwitterSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
        <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
            {/* info */}
            <div className='mb-6 md:mb-0'>
                <Link to='/'>
                <img src={Logo} alt=""  className='w-32'/>
                </Link>
                <p className='mt-2 text-sm'>High-quality, sustainable clothing at affordable prices.</p>
                <p className='mt-2 text-sm'>123 Fashion St, Style City, NY 10001</p>
                <p className='text-sm'>Email: support@clothify.com</p>
                <p className='text-sm'>Phone: (123) 534-7890</p>
            </div>
            {/* Customar Servic Link */}
            <div className='mb-6 md:mb-0'>
                <h3 className='text-xl font-semibold'>Customar Service</h3>
                <ul className='mt-2 text-sm space-y-2'>
                    <li>Contact Us</li>
                    <li>Shipping & Return</li>
                    <li>FAQs</li>
                    <li>Order Traking</li>
                    <li>Size Guide</li>
                </ul>
            </div>
            {/* Social Media link */}
            <div className='mb-6 md:mb-0'>
                <h3 className='text-xl font-semibold'>Follow Us</h3>
                <div className='flex space-x-4 mt-2'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                    <FaTwitterSquare/>
                    <FaPinterest/>
                </div>
            </div>
            {/* New latter Subcription */}
            <div>
                <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
                <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
                <form action="" className='mt-4 flex'>
                    <input type="email"
                    placeholder='Your Email Address'
                    className='w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'/>

                    <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md  hover:bg-red-700'>
                    Subscribe
                    </button>
                </form>
            </div>
        </div>
        {/* button section */}
        <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
            <p>&copy; {new Date().getFullYear()}<span className='text-red-500'>Clothify</span>.All rights reserved </p>

        </div>
    </footer>
  )
}

export default Footer