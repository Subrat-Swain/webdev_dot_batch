import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {

    let courses = props.courses;

    let category = props.category;

    const[likedCourses, setLikedCourses] = useState([]);

    // getting all courses
    function getCourses() {

        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach( (array) =>{
                array.forEach( (course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else {
            // only send specific category 
            return courses[category];
        }
       
    }
  return (
    <div className='flex flex-wrap justify-center gap-4'>
        {
            getCourses().map( (course) => {
                return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>)
            })
        }
    </div> 
  )
}

export default Cards;