import HoverButton from '../../ui/HoverButton';


const Experiences = ({left, right}) => {
  return(
    <div className="container mx-auto flex flex-col gap-3 md:gap-5 xl:gap-5 items-center lg:mb-10 mt-5 md:mt-[60px] relative px-2 truncate">
      <p className="text-3xl md:text-4xl font-bold text-stone-600">GEM Experiences</p>
      <p className=" md:text-lg text-stone-500">Choose The Memories You'll Taking Home</p>

      <div className="h-[90vh] md:h-[40vh] lg:h-[65vh]	w-full flex rounded flex-col md:flex-row lg:flex-row gap-2 md:gap-6">

        <div className='experience-left w-full md:w-1/2 lg:w-1/2 h-48 md:h-full lg:h-full zoom truncate whitespace-normal relative rounded md:rounded-l-xl md:rounded-r-none ex-hover'>
          <img className='h-full w-full object-cover' src={left.image} alt='experiences'/>
          <div className='absolute left-5 bottom-6 lg:hidden content'>
            <p className='text-orange-500 font-bold mb-2 md:text-lg lg:text-xl'>{left?.title}</p>
            <p className='font-normal text-sm text-white md:text-lg lg:text-xl'>{left.details}</p>
          </div>
        </div>

        <div className='experience-right w-full md:w-1/2 lg:w-1/2 md:h-full lg:h-full flex flex-col gap-2 md:gap-6'>
          {right.map((item) => (
            <div key={item?.id} className='zoom whitespace-normal truncate h-48 md:h-1/2 lg:h-1/2 w-full rounded md:rounded-tr-lg md:rounded-l-none relative ex-hover'>
              <img className='h-full w-full object-cover' src={item.image} alt='experiences'/>
              <div className='absolute left-5 bottom-6 lg:hidden content'>
                <p className='text-orange-500 font-bold mb-2 md:text-lg lg:text-xl'>{item?.title}</p>
                <p className='font-normal text-sm text-white md:text-lg lg:text-xl'>{item.details}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-8">
        <HoverButton text="Discover More"/>
      </div>
    </div>
  )
}

export default Experiences;