
const DoubleCards = (props) => {

  return(
    <div className='flex flex-col mt-8 md:mt-[60px] md:gap-8 mb-3 md:mb-6 h-[230vh] md:h-[100vh] lg:h-[200vh]'>
      {props.props.map((item) => (
      <div key={item?.id} className={`flex flex-col ${item.image_direction === 'left' ? 'md:flex-row lg:flex-row' : 'md:flex-row-reverse lg:flex-row-reverse'} w-full md:h-1/2 truncate whitespace-normal`}>
        <div className="zoom h-1/2 md:h-full lg:h-full w-full md:w-1/2 lg:w-1/2 truncate">
          <img className='md:h-full w-full object-cover' src={item.home_image} alt='gempic'/>
        </div>
        <div className='h-fit md:h-full  w-full md:w-1/2 lg:w-1/2 bg-stone-100 flex flex-col justify-center items-start py-4 md:py-2 px-8'>
          <p className='text-orange-500 font-bold text-xl md:text-2xl lg:text-3xl mb-4'>{item?.title}</p>
          <p className='mb-5 text-stone-500 text-sm font-normal md:text-lg'>{item.details}</p>
          <a href='#museum' className='hover:text-orange-500 text-xs md:text-sm lg:text-base font-normal underline '>{item.learn_more_txt}</a>
        </div>
      </div>
      ))}
    </div>
  )
}

export default DoubleCards;