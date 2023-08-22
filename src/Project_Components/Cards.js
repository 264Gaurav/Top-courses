import React,{useState} from "react";
import Card from "./Card";


const Cards=(props)=>{
    const[liked,setLiked]=useState([]); //intially no course is liked 

    let courses=props.courses;
    // console.log(courses);
    let category=props.category;

    function getCourses(){
        if(category==="All"){
            let allCourses=[];   //this will be a single array which will store all data of array
            Object.values(courses).forEach(array =>{
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{ //only specific categories's array data  will be passed
            return courses[category];
        }
    }
    return (
        <div className="cards">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} liked={liked} setLiked={setLiked}/>
                ))
            }
        </div>
    );
};

export default Cards;