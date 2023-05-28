import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const CollectionsCard = ({title, para}) => {
  return(
    <div className="absolute bg-white w-96 font-bold z-20 left-8 p-5 top-1/2 -translate-y-1/2 rounded px-4">
          <p className="text-orange-600">{title}</p>
          <p>{para}</p>
          <div className="w-full flex justify-end items-center">
            <span>Discover More</span>
            <HiOutlineArrowNarrowRight />
          </div>
          </div>
  )
}

export default CollectionsCard;