import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {GiCricketBat} from "react-icons/gi";
import {toast} from "react-toastify";

const Card = (props) => {

  let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;
  // let setWishlist = props.setWishlist;


  function clickHandlar(){

    if (likedCourse.includes(course.id)){
      //pehle se liked hai
      setLikedCourse( (prev) => prev.filter((cid)=> (cid !==course.id) ));
      // setWishlist( (prev) => prev.filter((cid)=> (cid !==course.id) ));
      toast.warning("like removed");
    }

    else{
      // pehle se like nahi hai
      // to is course ko insert krna hai liked course ke under
      if (likedCourse.length === 0){
        setLikedCourse([course.id]);
        // setWishlist([course.id])
      }
      else {
        setLikedCourse((prev) => [...prev,course.id]);
        // setWishlist((prev) => [...prev,course.id]);
        // newWish.push(setWishlist([course.id]));


      }
      toast.success("Liked Successfully");
    }

  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className={"relative"}>

        <img src={course.image.url} alt=""/>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-1rem]
            grid place-items-center'>
          <button onClick={clickHandlar}>
            {
              likedCourse.includes(course.id)?(<FcLike fontSize={"1.75rem"} />):(<FcLikePlaceholder fontSize={"1.75rem"} />)
            }
          </button>
        </div>
        </div>

      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'>
           {
            course.description.length > 100 ? (course.description.substring(0,100)) + `...` :(course.description)
           }
        </p>
        </div>

    </div>
  )
}

export default Card; 