import React, { useEffect } from "react";
import { Categories, PData } from "../assets/data";
import HeroImage from "../assets/images/Hero_image.jpg";
import InfoSection from "../components/InfoSection";
import CategoriSection from "../components/CategoriSection";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import Shop from "./Shop";
import Header from "../components/Header/Header";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(PData));
  }, [dispatch]);
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 sm:justify-center">
        {/* <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
          <div className='w-full md:w-3/10'>
                <div className='bg-red-600 text-white text-lg font-bold px-2 py-2.5'>Shop By categories</div>
                <ul className='space-y-4 bg-gray-150 p-3 border'>
                  {Categories.map((category, index) => (
                    <li key={index} className='flex items-center text-sm font-medium'>
                    <div className='w-2 h-2 border border-red-600 rounded-full mr-2'></div>
                    {category}</li>
                  ))}
                </ul>
            </div> 
              <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                  <img src={HeroImage} alt="" className='h-full w-full opacity-50' />
                  <div className='absolute top-16 left-8 bg-blue-200 p-4 text-center'>
                    <p className='text-gray-600 mb-4'>Welcome To</p>
                    <h2 className='text-3xl font-bold'>E-SHOP by Ashikul</h2>
                    <p className='text-xl mt-2.5 font-bold text-gray-800'>Millions+ Products</p>
                    <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
                  </div>
              </div>
          </div> */}

        <Header/>
        <InfoSection />
        <CategoriSection />

        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product) => (
              <ProductCart product={product} key={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
