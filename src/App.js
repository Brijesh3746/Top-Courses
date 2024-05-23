import React, {useEffect, useState} from "react";
import {filterData,apiUrl} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner"  ;


const App = () => {

    const [courses,setCourses] = useState(null);
    const [loding,setLoding]   = useState(true);
    const [category,setCategory] = useState(filterData[0].title);
    const [error, setError] = useState(null);



    useEffect( () => {
       const fetchData = async() =>{
           setLoding(true);
           try{
              const res = await fetch(apiUrl);
              const output = await res.json();
           //    save the data on variable
               setCourses(output.data);
           }
           catch (error){
                toast.error("Something went wrong");
                setError(error);
           }
           setLoding(false);
       }
       fetchData();
    },[]);


    if (error) {
        return <div className={"w-[100vw] h-[100vh] bg-black flex "}>
        <button className={"text-center text-white text-[56px]  mx-auto my-auto"}>API WAS NOT FOUND</button>;
        </div>
        }



  return (
      <div className={"bg-[#4a4e69] min-h-screen flex flex-col"}>
        <div><Navbar/></div>
        <div>
            <Filter
                filterData={filterData}
                category={category}
                setCategory={setCategory}
            />
        </div>
          <div className="w-11/12 max-w-[1200px]
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">{
            loding ? (<Spinner/>) : (<Cards courses={courses}
                                            category={category}
                                            setCategory={setCategory}


            />)
          }
        </div>
      </div>
  );
};

export default App;
