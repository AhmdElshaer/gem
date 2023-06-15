

const Banner = ({image, title, description}) => {

  return(
    <div className="z-30 w-full flex relative flex-col justify-center items-center">

      <div className="relative h-[90vh] w-full flex justify-center items-center">
        <div className="bg-black absolute w-full h-full opacity-40 truncate"></div>
        <img className='h-full w-full object-cover' src={image} alt='collictions'/>
        
        <div className="container mx-auto absolute z-20 px-2 md:px-4 md:px-20 lg:px-20 w-full h-full flex flex-col text-white justify-center items-start">
          <p className="mb-6 lg:mb-12 text-3xl font-light text-stone-400">{title}</p>
          <p className="font-base text-2xl md:text-3xl lg:text-4xl leading-relaxed lg:leading-[3rem] tracking-wider md:w-[45%] lg:w-[50%]">{description}</p>
        </div>
      </div>

    </div>
  )
}

export default Banner;