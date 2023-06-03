// import { useState, useEffect, useRef } from "react";
// import { Progress } from "@material-tailwind/react";
// import { Link } from "react-router-dom";

const Banner = ({image, title, description}) => {

  return(
    <div className="z-30 w-full flex relative flex-col justify-center items-center">

      <div className="relative h-screen w-full flex justify-center items-center">
        <div className="bg-black absolute w-full h-full opacity-40 truncate"></div>
        <img className='h-full w-full object-cover' src={image} alt='collictions'/>
        
        <div className="absolute z-20 px-4 md:px-20 lg:px-20 w-full h-full flex flex-col text-white text-2xl justify-center items-start">
          <p className="mb-6">{title}</p>
          <p className="font-semibold tracking-wider md:w-1/2 lg:w-1/2">{description}</p>
        </div>
      </div>

    </div>
  )
}

export default Banner;