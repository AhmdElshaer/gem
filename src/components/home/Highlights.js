import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";


const Highlights = (props) => {
  return(
    <div className="h-[90vh] lg:h-[90vh] md:h-[65vh] flex flex-col items-center px-2 z-30 bg-white mt-6 relative">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold mb-8 text-stone-700">Highlights</p>
        <p className="mb-8 text-lg text-stone-500">Welcome to the very best of GEM</p>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
        }}
        speed={1200}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper h-4/5	w-full"
        style={{color: '#000000b3'}}
      >
        {props.props.map((item) => (
          <SwiperSlide key={item?.id} className="">
          <div className="flex flex-col w-full h-full  zoom">
            <div className="h-4/5 w-full rounded-t-lg truncate">
              <img className='h-full w-full  object-cover' src={item.banner} alt='highlights'/>
            </div>
            <div className="flex flex-col items-start h-1/5 w-full text-stone-400 hover:text-stone-700 ease-in duration-300">
              <p className="font-bold text-xl md:text-2xl w-full my-2 md:my-4 ">{item?.title}</p>
              <p className="px-0 w-full h-1/2 text-sm">{item.details}</p>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Highlights;