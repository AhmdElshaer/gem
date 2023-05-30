import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";


const Highlights = () => {
  return(
    <div className="h-screen flex flex-col items-center z-30 bg-white mt-10 relative">
      <div className="flex flex-col justify-center items-center">
      <p className="text-4xl font-bold mb-8">Highlights</p>
      <p className="mb-8">Welcome to the very best of GEM</p>
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
        <SwiperSlide>
          <div className="flex flex-col w-full h-full rounded zoom">
            <div className="h-4/5 w-full truncate">
              <img className='h-full w-full object-cover' src={require('../../imgs/7.png')} alt='highlights'/>
            </div>
            <div className="flex flex-col items-start h-1/5 w-full">
              <p className="font-bold text-xl w-full h-1/2">Not a coincidence</p>
              <p className="px-0 w-full h-1/2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a fuga eum eligendi quasi odio sed</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col w-full h-full rounded zoom">
            <div className="h-4/5 w-full truncate">
              <img className='h-full w-full object-cover' src={require('../../imgs/2.png')} alt='highlights'/>
            </div>
            <div className="flex flex-col items-start h-1/5 w-full">
              <p className="font-bold text-xl w-full h-1/2">Not a coincidence</p>
              <p className="px-0 w-full h-1/2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a fuga eum eligendi quasi odio sed</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col w-full h-full rounded zoom">
            <div className="h-4/5 w-full truncate">
              <img className='h-full w-full object-cover' src={require('../../imgs/5.png')} alt='highlights'/>
            </div>
            <div className="flex flex-col items-start h-1/5 w-full">
              <p className="font-bold text-xl w-full h-1/2">Not a coincidence</p>
              <p className="px-0 w-full h-1/2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a fuga eum eligendi quasi odio sed</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col w-full h-full rounded zoom">
            <div className="h-4/5 w-full truncate">
              <img className='h-full w-full object-cover' src={require('../../imgs/8.png')} alt='highlights'/>
            </div>
            <div className="flex flex-col items-start h-1/5 w-full">
              <p className="font-bold text-xl w-full h-1/2">Not a coincidence</p>
              <p className="px-0 w-full h-1/2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a fuga eum eligendi quasi odio sed</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col w-full h-full rounded zoom">
            <div className="h-4/5 w-full truncate">
              <img className='h-full w-full object-cover' src={require('../../imgs/1.png')} alt='highlights'/>
            </div>
            <div className="flex flex-col items-start h-1/5 w-full">
              <p className="font-bold text-xl w-full h-1/2">Not a coincidence</p>
              <p className="px-0 w-full h-1/2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a fuga eum eligendi quasi odio sed</p>
            </div>
          </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Highlights;