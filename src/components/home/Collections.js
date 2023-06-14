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
    <div className='h-[110vh] lg:h-[90vh] md:h-[57vh] z-30 bg-white flex flex-col gap-6 md:gap-8 items-center py-5 relative px-2'>
      <p className="md:text-4xl text-3xl font-bold text-stone-700">Collections</p>
      <p className="md:text-lg text-md text-stone-500">A Deep-Dive the Egyptian Culture</p>
      <div className="h-full md:h-[55%] lg:h-3/5 w-[90%] md:ml-auto relative">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.1,
              spaceBetween: 50,
            },
          }}
          speed={2200}
          freeMode={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="mySwiper h-full md:h-full lg:h-full w-full shadow-2xl"
        >
          {props.props.map((item) => (
            <SwiperSlide key={item.id}>
            <div className='h-full w-full rounded relative flex flex-col md:flex-row md:justify-end'>
              <img className='h-[60%] md:h-full w-full md:w-2/3 lg:w-2/3 rounded object-cover' src={item.banner} alt='collictions'/>
              <CollectionsCard title={item.title} para={item.details} />
            </div>
            </SwiperSlide>
          ))}
          </Swiper>
      </div>
      <NavLink to='/museum/collections' className="mt-8">
        <HoverButton text="See All"/>
      </NavLink>
    </div>
  )
}

export default Collections;