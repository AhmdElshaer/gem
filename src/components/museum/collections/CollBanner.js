import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CollBanner = ({image, title, description}) => {
  const searchValue = useRef();
  const navigate = useNavigate();
  

  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate(`collections-search/?keyword=${searchValue.current.value}&theme_id=&period_id=&material_id=&category_id=&provenance_id=&gallery_id=&collection_id=`);
  }

  return(
    <div className="z-30 w-full h-[90vh] flex relative flex-col justify-center items-center">

      <div className="bg-black absolute w-full h-full opacity-40 truncate"></div>
      <img className='h-full w-full object-cover' src={image} alt='collictions'/>
      
      <div className="container mx-auto absolute z-20 px-4 w-full h-full flex flex-col !text-white justify-center items-start">
        <p className="mb-6 text-2xl md:text-3xl lg:text-4xl">
          <NavLink to='/museum' className='mr-2 !text-stone-400 font-light'>Museum |</NavLink>
          <span className="font-bold text-3xl">{title}</span>
          </p>
        <p className="font-base text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-[3rem] tracking-wider md:w-[60%] lg:w-[50%]">{description}</p>
      </div>

      <form onSubmit={onSubmitHandler} className="absolute z-30 bottom-0 w-full h-[10vh] flex flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 backdrop-blur-md bg-black/30">
        <input ref={searchValue} type="text" className="rounded p-3 h-[45%] w-[67%] md:w-[50%] lg:w-[40%] text-xs md:text-base lg:text-lg placeholder-shown:border-0" placeholder="Search"/>
        <button className="orangeButton relative w-[20%] md:w-[15%] lg:w-[10%] text-white bg-orange-500 h-[45%] hover:bg-transparent hover:text-orange-500 rounded text-sm md:text-base lg:text-lg">Search</button>
      </form>

    </div>
  )
}

export default CollBanner;