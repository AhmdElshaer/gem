import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";


const Highlights = (props) => {
  return(
    <div className="highlights flex gap-5 md:gap-5 xl:gap-5 flex-col items-center px-2 z-30 bg-white mt-10 md:mt-[90px] relative">

        <p className="text-4xl font-bold text-stone-700">Highlights</p>
        <p className="text-lg text-stone-500">Welcome to the very best of GEM</p>

      <Swiper
      className="mySwiper h-[75vh] md:h-[58vh] lg:h-[75vh] w-full"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
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
        style={{color: '#000000b3'}}
      >
        {props.props.map((item) => (
          <SwiperSlide key={item?.id} className="">
          <div className="flex flex-col w-full h-full  zoom">
            <div className="h-4/5 w-full rounded-t-lg truncate">
              <img className='h-full w-full  object-cover' src={item.banner} alt='highlights'/>
            </div>
            <div className="flex flex-col items-start h-1/5 w-full text-stone-400 hover:text-stone-700 ease-in duration-300">
              <p className="font-bold text-xl md:text-2xl w-full my-2 md:my-2 ">{item?.title}</p>
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