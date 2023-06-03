import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import OrangeButton from "../../ui/OrangeButton";

const Banner = (props) => {

  return(
    <div className="relative text-white mx-1 z-30" style={{height: 'calc(100vh - 130px)'}}>

      <Swiper loop={true} navigation={true} autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}} modules={[Navigation, Autoplay, Pagination]} className="relative mySwiper h-full">
        {props.props.map((item) => (
          <SwiperSlide key={item.id}>
            <img className='h-full w-full object-cover' src={item.image} alt='panner'/>
            <div className="absolute z-40 flex flex-col justify-start items-start top-1/4 left-10 w-4/5">
              <p className="text-4xl mb-12 font-bold">{item.title}</p>
              <p className="mb-12">{item.description}</p>
              <OrangeButton text={item.btn_link}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner;