import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";


const App = () => {

  const [loading, setLoading] = useState(true);

  /* Previous Class we get an error due to setCourses sets null 
  as we know it does not update variable immediately to remove error 
  pass an empty array */

  const [courses, setCourses] = useState(null);

  const [category, setCategory] = useState(filterData[0].title);

  
  // API Call
  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output ->
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network Issuses");
    }
    setLoading(false);
  }

  // 1st render 
  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
