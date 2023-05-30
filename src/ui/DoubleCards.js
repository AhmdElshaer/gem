

const DoubleCards = ({Img1, Title1, Content1, LinkText1, Link1, Img2, Title2, Content2, LinkText2, Link2}) => {
  return(
    <div className='flex flex-col md:h-screen lg:h-screen gap-8 mb-5 px-3 '>

      <div className='flex flex-col md:flex-row lg:flex-row w-full md:h-1/2 lg:h-1/2 truncate whitespace-normal'>
        <div className="zoom md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 truncate">
          <img className='md:h-full lg:h-full w-full object-cover' src={Img1} alt='gempic'/>
        </div>
        <div className='md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 bg-stone-100 flex flex-col justify-center items-start py-4 px-8'>
          <p className='text-orange-500 font-bold text-xl mb-3'>{Title1}</p>
          <p className='mb-3 text-slate-400 text-sm md:text-md lg:text-md'>{Content1}</p>
          <a href={Link1} className='hover:text-orange-500 text-xs md:text-sm lg:text-sm underline underline-offset-2 text-slate-500'>{LinkText1}</a>
        </div>
      </div>

      <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse w-full md:h-1/2 lg:h-1/2 truncate whitespace-normal'>
      <div className="zoom md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 truncate">
        <img className='md:h-full lg:h-full w-full object-cover' src={Img2} alt='gempic'/>
      </div>
        <div className='md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 bg-stone-100 flex flex-col justify-center items-start py-4 px-8'>
          <p className='text-orange-500 font-bold text-xl mb-3'>{Title2}</p>
          <p className='mb-3 text-slate-400 text-sm md:text-md lg:text-md'>{Content2}</p>
          <a href={Link2} className='hover:text-orange-500 text-xs md:text-sm lg:text-sm underline underline-offset-2 text-slate-500'>{LinkText2}</a>
        </div>
      </div>
    </div>
  )
}

export default DoubleCards;