import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const CollectionsCard = ({title, para}) => {
  return(
    <div className="md:absolute lg:absolute shadow-lg bg-white w-96 font-bold z-20 left-8 p-5 top-1/2 -translate-y-1/2 rounded px-4">
          <p className="text-orange-600">{title}</p>
          <p className='text-md text-stone-700'>{para}</p>
          <div className="pr-4 flex justify-end text-stone-600 items-center text-sm hover:text-orange-500">
            <span className='mr-1'>Discover More</span>
            <span className='pr-4'>
            <HiOutlineArrowNarrowRight />
            </span>
          </div>
          </div>
  )
}

export default CollectionsCard;