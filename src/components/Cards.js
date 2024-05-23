import React, {useState} from 'react'
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const [likedCourse,setLikedCourse] = useState([]);
  // const [wishlist,setWishlist] = useState([]);

  // console.log(wishlist);

  // first method
  // convert a all data object into a list from api response
  // badhay object ne array na form ma store krya

  let allCourses = [];
  function getCourses(){
    if(category === "All"){
      Object.values(courses).forEach((array) =>{
        array.forEach((course)=>{
          allCourses.push(course);
        })
      })
      return allCourses;
    }

    else{
      return courses[category];
    }

  }
  
  return(
      <div>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {
            getCourses().map( (course) =>{
            return <Card key={course.id}
                         course={course}
                         likedCourse={likedCourse}
                         setLikedCourse={setLikedCourse}
                         // wishlistArray = {wishlistArray}
                         // setWishlist={setWishlist}
                />
          })
          }
        </div>
        
      </div>
  )
}


  // second method
//   const coursesData = courses;
//
// // Initialize an empty array to store all courses
//   const allCourses = [];
//
// // Iterate through each category
//   for (const category in coursesData) {
//     if (coursesData.hasOwnProperty(category)) {
//       // Iterate through each course in the category
//       coursesData[category].forEach(course => {
//         allCourses.push(course);
//       });
//     }
//   }

  // console.log(courses);
//   return (
//     <div>
//       {
//         allCourses.map((course) =>{
//           return <Card course={course}/>
//         })
//       }
//     </div>
//   )
// }

export default Cards;