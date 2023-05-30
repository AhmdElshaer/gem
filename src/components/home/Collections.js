import { Swiper, SwiperSlide } from "swiper/react";
import classes from './Collections.module.css';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";
import HoverButton from "../../ui/HoverButton";
import CollectionsCard from "../../ui/CollectionsCard";

const Collections = () => {
  const title = 'Grand Staircase';
  const para = 'Gaze upon the faces of kings, queens and deities of ancient Egypt at the Grand Stairs.';
  const className = `${classes.collections} md:h-screen lg:h-screen z-30 bg-white flex flex-col items-center py-5 relative px-2`;

  return(
    <div className={className}>
      <p className="text-4xl font-bold mb-8">Collections</p>
      <p className="mb-8">A Deep-Dive the Egyptian Culture</p>
      <div className="h-screen md:h-3/5 lg:h-3/5 w-full relative">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper h-screen md:h-full lg:h-full w-full"
      >
        <SwiperSlide>
          <div className='h-full w-full rounded relative flex flex-col md:flex-row lg:flex-row justify-end'>
            <img className='h-full w-full md:w-2/3 lg:w-2/3 rounded object-cover' src={require('../../imgs/4.png')} alt='highlights'/>
            <CollectionsCard title={title} para={para} />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full rounded relative flex flex-col md:flex-row lg:flex-row justify-end'>
            <img className='h-full w-full md:w-2/3 lg:w-2/3 rounded object-cover' src={require('../../imgs/3.png')} alt='highlights'/>
            <CollectionsCard title={title} para={para} />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full rounded relative flex flex-col md:flex-row lg:flex-row justify-end'>
            <img className='h-full w-full md:w-2/3 lg:w-2/3 rounded object-cover' src={require('../../imgs/6.png')} alt='highlights'/>
            <CollectionsCard title={title} para={para} />
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-4">
        <HoverButton text="See All"/>
      </div>
    </div>
  )
}

export default Collections;