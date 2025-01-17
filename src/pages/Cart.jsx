import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EmteyCart from '../assets/Images/emteycart.png'
import { FaTrashAlt } from "react-icons/fa";
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { DecreaseQuantity, IncreaseQuantity, removeFromcart } from '../redux/CartSlice';
import { Navigate, useNavigate } from 'react-router-dom';



const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address, setAddress] = useState('main stret, 0012')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        {cart.products.length>0 ? 
        <div>
            <h2 className='mb-4 text-2xl text-bold text-center bg-blue-700 text-white p-3'>Shoping Cart Here</h2>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                        <p>PRODUCTS</p>
                        <div className='flex space-x-8'>
                            <p>PRICE</p>
                            <p>QUANTITY</p>
                            <p>SUBTOTAL</p>
                            <p>REMOVE</p>
                        </div>
                    </div>
                    <div>
                        {cart.products.map((product)=>(
                            <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                                <div>
                                    <img src={product.image} alt="product.name" className='w-16 h-16 object-contain rounded'/>
                                    <div className='flex-1 ml-auto items-center'>
                                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                                    </div>
                                </div>
                                <div className='flex space-x-12 items-center'>
                                    <p>${product.price}</p>
                                    <div className='flex items-center justify-center border'>
                                        <button className='text-xl font-bold px-1.5 border-r' 
                                        onClick={() => dispatch(DecreaseQuantity(product.id))}
                                        >-</button>
                                        <p className='text-xl px-2'>{product.quantity}</p>
                                        <button className='text-xl font-bold px-1.5 border-l'
                                        onClick={() => dispatch(IncreaseQuantity(product.id))}
                                        >+</button>
                                    </div>
                                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                                    <button className='text-red-500 hover:text-red-700' onClick={() => dispatch(removeFromcart(product.id))} >
                                        <FaTrashAlt/>
                                    </button>
                                </div>                              
                            </div>
                        ))}
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h2 className='text-lg font-bold mb-5 text-center bg-red-500 text-white'>CART TOTAL</h2>
                    <div className='flex justify-between mb-5 border-b-2 pb-1'>
                        <span className='text-lg'>Total Items:</span>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div className='mb-4 border-b pb-2'>
                        <p>Shipping:</p>
                        <p className='ml-2'>Shipping To{" "}
                        <span className='text-xs font-bold'>{address}</span>
                        </p>
                        <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={()=>setIsModalOpen(true)} >Change Address</button>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <span>Total Price:</span>
                        <span>${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button className='w-full bg-green-600 text-white py-2 hover:bg-green-700 font-bold text-lg'
                    onClick={() => navigate('/checkout')}
                    >
                        Proceed to checkout
                    </button>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
            </Modal>
        </div> 
        : 
        <div className='flex justify-center'>
           <img src={EmteyCart} alt="" className='h-96' /> 
        </div>}
    </div>
  )
}

export default Cart
