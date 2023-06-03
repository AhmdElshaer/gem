

const Landing = (props) => {
  return(
    <div className="w-full h-screen landing relative flex md:justify-start lg:justify-start justify-center items-center">
      <div className="absolute z-10 flex flex-col px-4 md:pl-24 lg:pl-24 justify-center items-start text-white w-full md:w-3/5 lg:w-3/5">
        <p className="text-2xl md:text-3xl lg:text-3xl mb-6 font-bold">{props.props.title}</p>
        <p className="mb-6">{props.props.details}</p>
        <button className='w-36 text-white bg-transparent h-10 rounded hover:bg-orange-600 border border-white hover:border-orange-600'>Read More</button>
      </div>
      <div className="bg-black w-full h-full opacity-40 truncate"></div>
    </div>
  )
}

export default Landing;