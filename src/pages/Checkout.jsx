import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shipingToggle, setShipingToggle] = useState(false)
    const [paynentToggle, setPaymentToggle] = useState(false)
    const [paymentMethod,setPaymentMethod] = useState('cod')
    const cart = useSelector(state => state.cart)

    const [shipingInfo, setShipingInfo] = useState({
        address: '',
        city:'',
        zip:''
    })
    const navigate = useNavigate()
    const handleOrder = () => {
        const newOrder ={
            products: cart.products,
            orderNumber: '1234543',
            shippingAddress: shipingInfo,
            totalprice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h2 className='mb-4 text-2xl text-bold text-center bg-blue-700 text-white p-3'>CHECKOUT</h2>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    {/* Checklist area Started Here */}
                    
                    <div className='border p-2 md-6'>
                        <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => setBillingToggle(!billingToggle)}
                        >
                            <h1 className='text-lg font-semibold md-2'
                            >Billing information</h1>
                            {billingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? "": "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor="">Name</label>
                                <input className='w-full px-3 py-2 border' type="text" placeholder='Enter Your Name..' />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input className='w-full px-3 py-2 border' type="email" placeholder='Enter Your email..' />
                            </div>
                            <div>
                                <label htmlFor="">phone Number</label>
                                <input className='w-full px-3 py-2 border' type="text" placeholder='Enter Your phone..' />
                            </div>
                        </div>
                    </div>
                    
                    {/* Shiping Area */}
                    
                    <div className='border p-2 md-6'>
                        <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => setShipingToggle(!shipingToggle)}
                        >
                            <h1 className='text-lg font-semibold md-2'
                            >Shiping information</h1>
                            {shipingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                        </div>
                        <div className={`space-y-4 ${shipingToggle ? "": "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor="">Address</label>
                                <input className='w-full px-3 py-2 border' type="text"
                                name='name' 
                                placeholder='Enter Your Address..' 
                                onChange={(e) => setShipingInfo({...shipingInfo, address: e.target.value})}
                                />
                            </div>
                            <div>
                                <label htmlFor="">City</label>
                                <input className='w-full px-3 py-2 border' type="text"
                                name='city'
                                placeholder='Enter Your City name..'
                                onChange={(e) => setShipingInfo({...shipingInfo, city: e.target.value})}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Zip Code</label>
                                <input className='w-full px-3 py-2 border' type="text"
                                name='zip'
                                placeholder='Enter Your zip code..' 
                                onChange={(e) => setShipingInfo({...shipingInfo, zip: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method Here */}
                    <div className='border p-2 md-6'>
                        <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => setPaymentToggle(!paynentToggle)}
                        >
                            <h1 className='text-lg font-semibold md-2 cursor-pointer'
                            >Payment information</h1>
                            {paynentToggle ? <FaAngleDown/> : <FaAngleUp/>}
                        </div>
                        <div className={`space-y-4 ${paynentToggle ? "": "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input 
                                type="radio"
                                name="payment"
                                checked = {paymentMethod === 'cod'}
                                onChange={() => setPaymentMethod('cod')}
                                className='cursor-pointer'
                                />
                                <label className='block text-gray-700 ml-2' htmlFor="">Cash on Delivery</label>
                            </div>

                            <div className='flex items-center mb-2'>
                                <input 
                                type="radio"
                                name="payment"
                                checked = {paymentMethod === 'dc'}
                                onChange={() => setPaymentMethod('dc')}
                                className='cursor-pointer'
                                />
                                <label className='block text-gray-700 ml-2' htmlFor="">Debit Card</label>
                            </div>
                            {paymentMethod === "dc" &&(
                                <div className='bg-gray-100 p-4 mb-4 rounded-lg'>
                                    <h2 className='text-xl font-semibold mb-4'>Debit Card Information</h2>
                                    <div>
                                        <label htmlFor="" className='font-semibold text-gray-700'>Card Number</label>
                                        <input type="text" placeholder='Enter Card Number' className='border p-2 w-full rounded'
                                        required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='block mb-2 font-semibold text-gray-700'>Card Holder Name</label>
                                        <input type="text" placeholder='Enter Card Holder Name' className='border p-2 w-full rounded'
                                        required
                                        />
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label htmlFor="" className='block mb-2 font-semibold text-gray-700'>Expire Date</label>
                                            <input type="text" placeholder='Enter Expire Date' className='border p-2 w-full rounded'
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="" className='block mb-2 font-semibold text-gray-700'>CVV</label>
                                            <input type="text" placeholder='Enter CVV' className='border p-2 w-full rounded'
                                            required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                    <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                        <h2 className='text-lg font-semibold mb-4 text-center bg-red-500 text-white'>Order Summery</h2>
                        <div className='space-y-4'>
                            {cart.products.map(product =>(
                                <div key={product.id} className='flex justify-between'>
                                    <div className='flex items-center'><img src={product.image} alt="product.name" className='w-16 h-16 object-contain rounded'/>
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>
                                            ${product.price} ⨯ {product.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ${product.price * product.quantity}
                                </div>
                            </div>
                            ))}
                            <div className='mt-4 pt-4 border-t-2'>
                                <div className='flex justify-between'>
                                    <span>Total price:</span>
                                    <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                            <button className='w-full bg-green-600 text-white py-2 hover:bg-green-700 font-bold text-lg' onClick={handleOrder}>Place Order</button>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Checkout
