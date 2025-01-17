import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaTags } from "react-icons/fa";


const InfoSection = () => {
    const InfoData = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600'/>,
            title: 'Free Shipping',
            description: 'Get your orders delivered to your doorstep for free.'
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600'/>,
            title: 'Support 24/7',
            description: 'we are here to help you 24 hours a day, 7 days a week.'
        },
        {
            icon: <FaMoneyBill className='text-3xl text-red-600'/>,
            title: '100% Money Back',
            description: 'full refund if you are not satisfied with the product.'
        },
        {
            icon: <FaLock className='text-3xl text-red-600'/>,
            title: 'Secure Payment',
            description: 'Your payment is always secure.'
        },
        {
            icon: <FaTags className='text-3xl text-red-600'/>,
            title: 'Best Price',
            description: 'We offer the best price for our products.'
        }

    ]
  return (
    <div className='bg-white pb-8 pt-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4'>
        {InfoData.map((item, index) => (
            <div key={index} className='flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <div>{item.icon}</div>
                <div>
                <h3 className='text-lg font-bold'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection
