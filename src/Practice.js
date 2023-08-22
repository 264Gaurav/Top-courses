import {useEffect, useState} from 'react';
import WindowSize from './WindowSize';

function Practice() {

  const[name,setName]=useState('');

   // //variation -1  -> execute after each rendering 
  // useEffect(()=>{
  //   console.log("UI rendered");
  // } );

  // //variation -2  -> run at initial render only
  // useEffect(()=>{
  //   console.log("UI rendered when empty[] used as dependency");
  // }, []);

  //variation -3  -> run at initial render + run if the dependency i.e., name will change 
  useEffect(()=>{
    console.log("UI rendered when [dependency] changes");
  }, [name]);

  const changeHandler=(e)=>{
    // console.log("input changed");
    // setName(e.target.value);
    setName((name)=>name=e.target.value);
    console.log(name);
  }

  return (
    <>
      <h1>Project-2</h1>
      <WindowSize />
      <input type="text" onChange={changeHandler}  />
      <h3>you have entered : {name} </h3>
    </>
   
  );
}

export default Practice;
