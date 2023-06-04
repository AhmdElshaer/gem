import { NavLink } from "react-router-dom";

const CollBanner = ({image, title, description}) => {
  return(
    <div className="z-30 w-full h-[90vh] flex relative flex-col justify-center items-center">

        <div className="bg-black absolute w-full h-full opacity-40 truncate"></div>
        <img className='h-full w-full object-cover' src={image} alt='collictions'/>
        
        <div className="absolute z-20 px-4 md:px-20 lg:px-20 w-full h-full flex flex-col !text-white text-2xl justify-center items-start">
          <p className="mb-6">
            <NavLink to='/museum' className='mr-2 !text-white'>Museum |</NavLink>
            <span className="font-bold">{title}</span>
            </p>
          <p className="font-semibold tracking-wider md:w-1/2 lg:w-1/2">{description}</p>
        </div>

        <div className="absolute z-30 bottom-0 w-full h-[15vh] flex flex-row justify-center items-center gap-4 backdrop-blur-md bg-black/30">
          <input type="text" className="rounded p-3 w-[67%] md:w-2/5 lg:w-2/5 font-bold text-xs placeholder-shown:border-0" placeholder="Search"/>
          <button className="orangeButton relative w-[20%] md:w-36 lg:w-36 text-white bg-orange-500 h-10 hover:bg-transparent hover:text-orange-500 rounded font-bold text-xs">Search</button>
        </div>

    </div>
  )
}

export default CollBanner;