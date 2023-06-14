import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const CollectionsCard = ({title, para}) => {
  return(
    <div className="md:absolute md:h-fit lg:h-fit py-4 bg-white md:w-96 z-20 md:left-8 lg:left-[20%] pt-3 md:top-1/2 md:-translate-y-1/2 lg:top-1/2 lg:-translate-y-1/2 rounded-lg px-4">
          <p className="text-orange-500 text-lg md:text-xl font-medium mb-4">{title}</p>
          <p className='text-lg font-medium mb-2 text-stone-700'>{para}</p>
          <div className="pr-4 flex justify-end text-stone-500 items-center text-sm hover:text-orange-500">
            <span className='mr-1'>Discover More</span>
            <span className='pr-4'>
            <HiOutlineArrowNarrowRight />
            </span>
          </div>
          </div>
  )
}

export default CollectionsCard;