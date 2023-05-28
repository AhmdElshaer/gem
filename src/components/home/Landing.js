

const Landing = () => {
  return(
    <div className="w-full h-screen landing relative">
      <div className="absolute z-20 flex flex-col top-1/3 left-20 text-white">
        <p className="text-3xl mb-12 font-bold">What's happening behind the scenes at GEM?</p>
        <p className="mb-12">
        From microscopic investigations, non destructive analysis, to mechanical cleaning. Click here to meet the heroes at the Conservation Center labs.
          </p>
        <button className='w-60 text-white bg-transparent h-10 rounded hover:bg-orange-600 border border-white hover:border-orange-600'>See All</button>
      </div>
      <div className="bg-black w-full h-full opacity-40 truncate"></div>
    </div>
  )
}

export default Landing;