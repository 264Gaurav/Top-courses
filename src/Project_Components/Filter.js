import React from "react";

const Filter=(props)=>{
   let filterData=props.filterData;
   let category=props.category;
   let setCategory=props.setCategory;

   const filterHandler=(title)=>{
      setCategory(title);
   }

    return(
       <div className="filter">
         {
            filterData.map( (data)=>(
             <button key={data.id}  onClick={()=>filterHandler(data.title)} className= { ` ${category === data.title ? "active" : "btn" } `}>
               {data.title} </button>
            ))
         }
       </div>
    );
};

export default Filter;