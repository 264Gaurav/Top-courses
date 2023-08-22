import React, { useReducer } from "react";


const initialState = 0;
const reducer=(state,action)=>{
    switch(action){
        case "Increment":return state+1;
        case "Decrement":return state-1;
        default : return state; 
    }
}

function Counter(){
    const [count,dispatch]=useReducer(reducer,initialState);
    return(
        <>
            <div className="title">Count : {count} </div>
            <button className="btn" onClick={()=>dispatch("Increment")}>Increment</button>
            <button className="btn" onClick={()=>dispatch("Decrement")}>Decrement</button>
        </>
    );
};

export default Counter;