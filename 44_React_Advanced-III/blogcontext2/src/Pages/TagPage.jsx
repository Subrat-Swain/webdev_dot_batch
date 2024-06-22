import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Header from '../components/Header';

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);


  return (
    <div className='w-11/12 max-w-[670px] mx-auto'>
        <Header/>
        <div className='mt-[70px] py-1'>
            <button onClick={() => navigation(-1)}
                className='border-2 border-gray-300 py-1 px-4 rounded-md'>
                back
            </button>
            <h2 className='font-bold text-2xl text-center uppercase'>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <div className='mt-[-70px]'>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default TagPage