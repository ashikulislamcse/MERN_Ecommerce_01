import React from 'react'
import { FaStar } from "react-icons/fa";
import { addToCart } from '../redux/CartSlice';
import {useDispatch} from 'react-redux'


const ProductCart = ({product}) => {
  const dispatch = useDispatch();

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
        alert("Product Added succesfully!")
    };
  return (
    <div className='bg-white shadow p-4 rounded relative border transform transition-transform duration-300 hover:scale-105'>
      <img src={product.image} alt="" className='w-full h-48 object-contain mb-4' />
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>${product.price}</p>
      <div className='flex items-center mt-2'>
         <FaStar className='text-yellow-500'/>
         <FaStar className='text-yellow-500'/>
         <FaStar className='text-yellow-500'/>
         <FaStar className='text-yellow-500'/>
      </div>
      <div className='absolute bottom-4 right-2 w-8 h-8 bg-red-600 text-white group text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all cursor-pointer flex items-center justify-center' onClick={(e)=> handleAddToCart(e, product)}>
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>ADD TO CART</span>
      </div>
    </div>
  )
}

export default ProductCart
