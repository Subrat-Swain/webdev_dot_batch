import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='w-11/12 max-w-[670px] mx-auto'>
        <Header/>
        <div className='mt-[70px] py-1'>
            <button onClick={() => navigation(-1)}
                className='border-2 border-gray-300 py-1 px-4 rounded-md'>
                back
            </button>
        </div>
        <h2 className='font-bold text-2xl text-center uppercase'>
            Blogs on <span>{category}</span>
        </h2>
        <div className='mt-[-70px]'>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default CategoryPage