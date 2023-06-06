import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";
import HoverButton from "../../ui/HoverButton";
import { NavLink } from "react-router-dom";

const Collections = ({title, description, collections}) => {
  
  return (
      <div id="museum_collections" className='z-30 bg-white flex flex-col items-center py-5 relative px-2 mb-8'>
        <p className="text-4xl font-bold mb-8">{title}</p>
        <p className="mb-12 font-semibold px-4 text-stone-400 text-center">{description}</p>

        <div className="w-full relative flex flex-col items-center " style={{height: '468px'}}>
          <Swiper
            breakpoints={{640: { slidesPerView: 1.5, spaceBetween: 30,}, 768: { slidesPerView: 2.5, spaceBetween: 30,}, 1024: {slidesPerView: 3.3, spaceBetween: 30,},}}
            freeMode={true}
            speed={1200}
            loop={true}
            autoplay={{ delay: 7000, disableOnInteraction: false,}}
            navigation={true}
            modules={[FreeMode, Navigation, Autoplay]}
            style={{color: '#000000b3'}}
            className="mySwiper h-full	w-full"
          >
            {collections.map((item) => (
              <SwiperSlide key={item.id}>
                
              <div className="flex flex-col orange-500 w-full h-full rounded">

                <div className="zoom w-full h-1/2 whitespace-normal truncate rounded-t-lg">
                  <img className='h-full w-full object-cover' src={item.thubmnail} alt='museum_collections'/>
                </div>

                <div className="flex flex-col items-start gap-3 h-1/2 w-full p-8">
                  <p className="font-bold flex text-orange-500 text-xl w-full gap-2 justify-start items-center">
                    <span><img className="h-[2rem] object-cover " src={item.icon} alt="collections_icon"/></span>
                    <span className="">{item.title}</span>
                    </p>
                  <p className="px-0 w-full text-xs text-ellipsis overflow-hidden ... leading-relaxed">{item.details}</p>
                  <div><HoverButton text="Learn More"/></div>
                  
                </div>

              </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
        <div className="mt-4">
        <NavLink to='/museum/collections'>
          <HoverButton text="See All"/>
          </NavLink>
        </div>
      </div>
  )
}

export default Collections;