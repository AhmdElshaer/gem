import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper";


const Highlights = () => {
  return(
    <div className="h-screen flex flex-col gap-20 items-center mt-16 relative">
      <p className="text-5xl font-bold">Highlights</p>
      <p>Welcome to the very best of GEM</p>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper h-3/5	w-full"
      >
        <SwiperSlide>
          <img className='h-full' src={require('../../imgs/7.png')} alt='highlights'/>
          
          </SwiperSlide>
        <SwiperSlide><img className='h-full' src={require('../../imgs/2.png')} alt='highlights'/></SwiperSlide>
        <SwiperSlide><img className='h-full' src={require('../../imgs/5.png')} alt='highlights'/></SwiperSlide>
        <SwiperSlide><img className='h-full' src={require('../../imgs/8.png')} alt='highlights'/></SwiperSlide>
        <SwiperSlide><img className='h-full' src={require('../../imgs/1.png')} alt='highlights'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Highlights;