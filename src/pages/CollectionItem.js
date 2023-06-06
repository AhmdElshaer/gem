import { NavLink, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination } from "swiper";


const CollectionItem = () => {
  const collectionItemData = useLoaderData();
  console.log(collectionItemData.data.title);
  return(
    <div className="container mx-auto flex flex-col justify-center items-center">

      <div className="breadCrumb w-full flex justify-start items-center p-2 gap-3 font-semibold">
        <span className="hover:bg-orange-500 hover:text-white ease-in duration-150 rounded w-9 h-9 flex justify-center items-center text-xl "><NavLink to='..'><FaArrowLeft /></NavLink></span>
        <span><NavLink to='/museum' className='p-2'>Museum</NavLink>/</span>
        <span><NavLink to='..' className='p-2'>Collections</NavLink>/</span>
        <span>{collectionItemData.data.title}</span>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-3xl font-bold mb-8">{collectionItemData.data.title}</p>
        <p className="mb-8 text-center font-medium">{collectionItemData.data.description}</p>
      </div>

      <Swiper
        slidesPerView={1}
        freeMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        speed={1200}
        modules={[FreeMode, Pagination, Autoplay]}
        className="collSwiper md:h-[40vh] lg:h-[60vh] w-full mb-8"
      >
        {collectionItemData.data.slides.map((item) => (
          <SwiperSlide key={item.id}>

          <div className='h-full w-full rounded relative flex'>
            <img className='h-full w-full rounded-lg object-cover' src={item.image} alt='collictions'/>
            <div className="w-full absolute bottom-0 text-white p-8 flex flex-col gap-6">
              <p className="font-bold">{item.title}</p>
              <p className="">{item.description}</p>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      
      <div className="highlights w-full flex flex-col justify-center items-start">
        <p className="text-3xl font-bold mb-8 text-stone-700">Highlights</p>
        <div className="grid relative gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {collectionItemData.data.highlights.map((item) => (
            <div key={item.id} className="h-[300px] w-[300px]">
              <img className='w-full h-full rounded-lg object-cover' src={item.thumbnail} alt='collictions'/>

              <div className="absolute  flex flex-col ">
                <p>{item.title}</p>
                <p>See More Details</p>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionItem;