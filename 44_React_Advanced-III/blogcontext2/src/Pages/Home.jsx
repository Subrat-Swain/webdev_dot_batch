import React from 'react'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Home