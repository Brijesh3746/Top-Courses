import React from 'react'


const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandlar(title){
    // console.log(title)
    setCategory(title);
  }

  return (
    <div className={"flex flex-wrap w-11/12 justify-center mx-auto space-x-4 gap-y-4 py py-4 max-w-max"}>{
      filterData.map( (data) =>{
       return <button key={data.id}
           className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title?
            "opacity-60 border-white":
            "opacity-40 border-transparent"}`}
       onClick={() =>filterHandlar(data.title)}>{data.title}</button>
      })
    }</div>
  )
}

export default Filter;