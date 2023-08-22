import { useState ,useEffect} from "react";   


const WindowSize=()=>{
   const [widthResize,setWidthResize] = useState(window.innerWidth);
   const[heightResize,setHeightResize] = useState(window.innerHeight);
   
   useEffect( ()=>{
    const handleWindowResize =()=>{
        setWidthResize(window.innerWidth);
        setHeightResize(window.innerHeight);
    };

    window.addEventListener('resize',handleWindowResize); 

    return ()=>{  // delete old listeners before the new one is called
        window.removeEventListener('resize',handleWindowResize);
    };
   });
    
    return (
        <>
            <h2>Current window width is : {widthResize} </h2>
            <h2>Current window height is : {heightResize}</h2>
        </>
    )
}
export default WindowSize;