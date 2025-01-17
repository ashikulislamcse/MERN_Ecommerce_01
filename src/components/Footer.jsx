import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-2xl font-bold'>E-SHOP</h2>
          <p className='mt-4'>E-SHOP is your one-stop destination for all your shopping needs. We offer a wide range of products at competitive prices, ensuring a seamless and enjoyable shopping experience.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h2 className='text-2xl font-bold'>Quick Link</h2>
          <div>
            <ul className='mt-4 space-y-2'>
              <li className='flex flex-col font-lg'>
                <Link to='/' className='hover:text-yellow-500'>Home</Link>
                <Link to='/Shop' className='hover:text-yellow-500'>Shop</Link>
                <Link to='/about' className='hover:text-yellow-500'>About</Link>
                <Link to='/contact' className='hover:text-yellow-500'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Follow Us</h2>
          <div className='flex mt-4 space-x-4'>
            <a href="" className='hover:text-yellow-400'><FaFacebook/></a>
            <a href="" className='hover:text-yellow-400'><FaTwitter/></a>
            <a href="" className='hover:text-yellow-400'><FaInstagramSquare/></a>
            <a href="" className='hover:text-yellow-400'><FaLinkedin/></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type="email" placeholder='Enter your email address' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 '/>
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mt-4 border-t border-gray-500 pt-4'>
        <div className='container flex flex-col mx-auto md:flex-row justify-between items-center'>
          <p>© 2024 E-SHOP All Right Resurve</p>
          <div className='flex space-x-4 mt-4'>
          <a href="" className='hover:text-yellow-500'>Privacy Policy</a>
          <a href="" className='hover:text-yellow-500'>Terms and Conditions</a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
