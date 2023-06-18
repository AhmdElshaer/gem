import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import OrangeButton from "../../ui/OrangeButton";

const Banner = (props) => {

  return(
    <div className="banner relative text-white mx-1 z-30" style={{height: 'calc(100vh - 130px)'}}>

      <Swiper loop={true} speed={2900} navigation={true} 
      autoplay={{delay: 4000, disableOnInteraction: false,}} 
      pagination={{clickable: true,}} modules={[Navigation, Autoplay, Pagination]} className="relative mySwiper h-full">
        {props.props.map((item) => (
          <SwiperSlide key={item?.id} className="h-full w-full flex justify-center items-center relative">
            <img className='h-full w-full object-cover' src={item.image} alt='panner'/>
            <div className="container absolute z-40 flex flex-col px-4 justify-start items-start top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <p className="md:text-5xl text-4xl pt-10 mb-10 font-bold">{item?.title}</p>
              <p className="mb-8 md:text-lg lg:text-xl text-md md:w-1/2">{item.description}</p>
              <OrangeButton text={item.btn_link}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner;