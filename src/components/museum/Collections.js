import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper";
import HoverButton from "../../ui/HoverButton";
import { Link, NavLink } from "react-router-dom";

const Collections = ({title, description, collections}) => {
  
  return (
      <div id="museum_collections" className='collections z-30 bg-white flex flex-col items-center py-6 relative px-2 mb-8'>
        <p className="md:text-4xl text-3xl font-bold mb-6 md:mb-8 text-stone-600">{title}</p>
        <p className="mb-4 md:mb-12 font-normal md:w-[80%] md:text-xl text-base text-stone-500 text-center">{description}</p>

        <Swiper
          className="mySwiper h-[500px] md:h-[50vh] lg:h-[90vh] 2xl:h-[75vh] relative flex flex-col items-center w-full py-2"
          breakpoints={{640: { slidesPerView: 1, spaceBetween: 30,}, 768: { slidesPerView: 2.5, spaceBetween: 30,}, 1024: {slidesPerView: 3.3, spaceBetween: 30,},}}
          freeMode={true}
          speed={1200}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false,}}
          navigation={true}
          modules={[FreeMode, Navigation, Autoplay]}
          style={{color: '#000000b3'}}
        >
          {collections.map((item) => (
            <SwiperSlide key={item?.id}>
              
            <div className="flex flex-col orange-500 w-full h-full rounded shadow-xl py-4">

              <div className="zoom w-full h-1/2 whitespace-normal truncate rounded-t-lg">
                <img className='h-full w-full object-cover' src={item.thubmnail} alt='museum_collections'/>
              </div>

              <div className="flex flex-col items-start gap-3 h-1/2 w-full p-4 lg:p-8">
                <p className="font-bold flex text-orange-500 text-xl md:text-2xl w-full gap-2 justify-start items-center">
                  <span><img className="h-[2rem] object-cover " src={item.icon} alt="collections_icon"/></span>
                  <span className="">{item?.title}</span>
                  </p>
                <p className="px-0 h-[40%] w-full text-xs md:text-base text-stone-400 truncate whitespace-pre-line leading-relaxed">{item.details}</p>
                <div><Link to={`/museum/collections/${item?.id}`}><HoverButton text="Learn More"/></Link></div>
                
              </div>

            </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4">
        <NavLink to='/museum/collections'>
          <HoverButton text="See All"/>
          </NavLink>
        </div>
      </div>
  )
}

export default Collections;