import HoverButton from '../../ui/HoverButton';


const Experiences = ({left, right}) => {
  return(
    <div className="container mx-auto h-[125vh] lg:h-[90vh] md:h-[60vh] flex flex-col items-center lg:mb-10 mt-5 relative px-2 truncate">
      <p className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-stone-600">GEM Experiences</p>
      <p className="mb-4 md:mb-8 md:text-lg text-stone-500">Choose The Memories You'll Taking Home</p>

      <div className="md:h-[60%] lg:h-[75%]	w-full flex rounded flex-col md:flex-row lg:flex-row justify-between gap-6">

        <div className='experience-left w-full md:w-1/2 lg:w-1/2 h-48 md:h-full lg:h-full zoom truncate whitespace-normal relative rounded md:rounded-l-lg lg:rounded-l-lg ex-hover'>
          <img className='h-full w-full object-cover' src={left.image} alt='experiences'/>
          <div className='absolute left-5 bottom-6 lg:hidden content'>
            <p className='text-orange-500 font-medium'>{left?.title}</p>
            <p className='font-light text-sm text-white'>{left.details}</p>
          </div>
        </div>

        <div className='experience-right w-full md:w-1/2 lg:w-1/2 md:h-full lg:h-full flex flex-col gap-6'>
          {right.map((item) => (
            <div key={item?.id} className='zoom whitespace-normal truncate h-48 md:h-1/2 lg:h-1/2 w-full rounded md:rounded-tr-lg lg:rounded-tr-lg relative ex-hover'>
              <img className='h-full w-full object-cover' src={item.image} alt='experiences'/>
              <div className='absolute left-5 bottom-6 lg:hidden content'>
              <p className='text-orange-500 font-medium'>{item?.title}</p>
              <p className='font-light text-sm text-white'>{item.details}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <HoverButton text="Discover More"/>
      </div>
    </div>
  )
}

export default Experiences;