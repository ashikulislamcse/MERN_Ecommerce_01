import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Order = ({order}) => {
    const navigate = useNavigate()
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h1 className='text-2xl font-semibold mb-2'>Thank you for your Orders</h1>
      <p>Your order has been placed successfully you will receive an email confirmation shortly</p>
      <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
        <h2 className='text-2xl font-semibold mb-2'>Order Summery</h2>
        <p>Order Number: {order.orderNumber}</p>
        <div className='mt-4'>
            <h2 className='text-2xl font-semibold mb-2'>Shipping Information</h2>
            <p>Address: {order.shippingAddress.address}</p>
            <p>City: {order.shippingAddress.city}</p>
            <p>Zip Code: {order.shippingAddress.zip}</p>
        </div>
        <div className='mt-4'>
            <h3 className='text-2xl font-semibold mb-2'>Product Ordered</h3>
            {order.products.map((product) => (
                <div key={product.id} className='flex justify-between mt-2'>
                    <p>{product.name} (⨯ {product.quantity})</p>
                    <p>${product.price * product.quantity}</p>
                </div>
            ))}
        </div>
        <div className='flex justify-between mt-4'>
            <span>Total Price:</span>
            <span className='bg-blue-800 text-white p-2 font-bold'>${order.totalprice.toFixed(2)}</span>
        </div>
        <div className='mt-6'>
            <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600 font-xl font-semibold'>Order Tracking</button>
            <button onClick={()=> navigate('/')} className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800 font-xl font-semibold'>Continue Shoping</button>
        </div>
      </div>
    </div>
  )
}

export default Order