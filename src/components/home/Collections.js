import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";
import HoverButton from "../../ui/HoverButton";
import CollectionsCard from "../../ui/CollectionsCard";
import { NavLink } from "react-router-dom";

const Collections = (props) => {

  return(
    <div className='md:h-screen lg:h-screen z-30 bg-white flex flex-col items-center py-5 relative px-2'>
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
        speed={1200}
        freeMode={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper h-screen md:h-full lg:h-full w-full"
      >
        {props.props.map((item) => (
          <SwiperSlide key={item.id}>
          <div className='h-full w-full rounded relative flex flex-col md:flex-row lg:flex-row justify-end'>
            <img className='h-full w-full md:w-2/3 lg:w-2/3 rounded object-cover' src={item.banner} alt='collictions'/>
            <CollectionsCard title={item.title} para={item.details} />
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
      <NavLink to='/museum/collections' className="mt-4">
        <HoverButton text="See All"/>
      </NavLink>
    </div>
  )
}

export default Collections;