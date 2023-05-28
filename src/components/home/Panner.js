import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import OrangeButton from "../../ui/OrangeButton";

const Panner = () => {
  return(
    <div className="mt-2 relative text-white mx-1 z-30" style={{height: 'calc(100vh - 130px)'}}>
      <div className="absolute z-40 flex flex-col justify-start items-start top-1/3 left-20 w-3/5">
        <p className="text-4xl mb-12 font-bold">Opening Soon</p>
        <p className="mb-12">The wait is finally over, Grand Egyptian musuem will open its door to the public this month..</p>
        <OrangeButton text='BUY TICKETS'/>
      </div>
      <Swiper loop={true} navigation={true} autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}} modules={[Navigation, Autoplay, Pagination]} className="mySwiper h-full">
        <SwiperSlide>
          <img className='h-full w-full object-cover' src={require('../../imgs/20220129-DSC_0717-Edit.png')} alt='panner'/>
          </SwiperSlide>
        <SwiperSlide>
          <img className='h-full w-full object-cover' src={require('../../imgs/_MG_8955.png')} alt='panner'/>
          </SwiperSlide>
        <SwiperSlide>
          <img className='h-full w-full object-cover' src={require('../../imgs/20220129-DSC_0690-Edit.png')} alt='panner'/>
          </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Panner;