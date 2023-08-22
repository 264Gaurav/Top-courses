import './App.css';
import {useEffect,useState} from 'react';
// import Practice from './Practice';
// import Counter from './Counter';
import './App.css';
import Navbar from'./Project_Components/Navbar';
import Filter from'./Project_Components/Filter';
import Cards from'./Project_Components/Cards';
import {apiURL,filterData}from './Project_Components/Data';
import {toast} from 'react-toastify';
import Spinner from './Project_Components/Spinner';


function App() {
  const [courses,setCourses]=useState([]); 
  const [loading,setLoading]=useState(true);  //jb tk response n aa jaye tb tk
  const [category,setCategory]=useState(filterData[0].title);

    async function fetchData(){
      try{
        let response=await fetch(apiURL);
        let output=await response.json(); //to convert into json format 
       
        //save the data into a variable
        setCourses(output.data);
        console.log(output);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false); //jb api fetch ho jaye tb 
    };

    useEffect( ()=>{   //run at initial render
      fetchData();  
    },[]);

  
  return(
    <div className="container">
      {/* <Practice /> */}
      {/* <Counter/> */}
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div>
        {
          loading ? (<Spinner/>) : ( <Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  );
 
};
export default App;
