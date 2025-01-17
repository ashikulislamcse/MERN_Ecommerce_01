import React from 'react'
import Man from '../assets/Images/Man.jpg'
import woman from '../assets/Images/Woman.jpg'
import kids from '../assets/Images/Kids.jpg'

const CategoriSection = () => {
    const Categories = [
        {
            title:'Man',
            image:Man,
        },
        {
            title:'Woman',
            image:woman,
        },
        {
            title:'Kids',
            image:kids,
        }
    ];
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 '>
        {Categories.map((category, index) => (
            <div key={index} className='flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <div>
                    <img src={category.image} alt="" className='h-40 w-full object-cover'/>
                </div>
                <div>
                <h3 className='text-lg font-bold'>{category.title}</h3>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategoriSection
