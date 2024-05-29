import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import { useState } from "react";

const App = () => {

  const[courses, setCourses] = useState(null);

  useEffect( () => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards courses={courses}/>
    </div>
  );
};

export default App;
