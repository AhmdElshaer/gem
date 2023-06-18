

const Landing = (props) => {
  return(
    <div className="w-full h-screen landing relative flex justify-center items-center mt-10 md:mt-[90px]">
      <div className="container mx-auto absolute z-10 flex flex-col gap-5 md:gap-7 px-4 justify-center md:justify-start items-start text-white w-full">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-3/4">{props.props?.title}</p>
        <p className="text-lg md:text-xl lg:text-2xl md:w-3/4">{props.props.details}</p>
        <button className='w-36 text-white text-sm md:text-base bg-transparent h-10 rounded hover:bg-orange-600 border border-white hover:border-orange-600'>Read More</button>
      </div>
      <div className="bg-black w-full h-full opacity-40 truncate"></div>
    </div>
  )
}

export default Landing;