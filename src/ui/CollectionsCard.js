import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CollectionsCard = ({title, para, id}) => {
  return(
    <div className="md:absolute md:h-fit py-4 bg-white md:w-[45%] lg:w-[45%] z-20 md:left-8 lg:left-[5%] pt-3 md:top-1/2 md:-translate-y-1/2 lg:top-1/2 lg:-translate-y-1/2 rounded-lg px-4 md:shadow-2xl">
          <p className="text-orange-500 text-lg md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
          <p className='text-lg md:text-xl lg:text-3xl font-semibold mb-2 text-stone-700'>{para}</p>
          <div className="pr-4 flex justify-end text-stone-500 items-center text-sm md:text-lg lg:text-xl hover:text-orange-500 ">
            <span className='mr-1'><Link to={`/museum/collections/${id}`}>Discover More</Link></span>
            <span className='pr-4'>
            <HiOutlineArrowNarrowRight />
            </span>
          </div>
          </div>
  )
}

export default CollectionsCard;