import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState} from "react";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import Header from "../components/Header";
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner';

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(err){
      console.log("Error in Blog id API call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    if(blogId){
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[66px] mx-auto'>
        <Header/>
        <div>
          <button onClick={ () => navigation(-1)}
            className='border-2 border-gray-300 py-1 px-4 rounded-md'>
            back
          </button>
        </div>

        {
          loading ? 
          (
            <Spinner/>
          ): 
          (
            blog ?
            (<div className=''>
              <BlogDetails post={blog}/>
              <h2 className='font-bold text-2xl text-center mt-4 uppercase'> Related Blogs</h2>
              {
                relatedBlogs.map( (post) => (
                  <div key = {post.id}
                    className='py-6'>
                    <BlogDetails post ={blog}/>
                  </div>
                ))
              }
            </div>):
            (
              <div>
                <p>No Blog Found</p>
              </div>
            )
          )
        }
    </div>
  )
}

export default BlogPage