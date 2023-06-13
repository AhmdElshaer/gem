import { NavLink } from "react-router-dom";
import OrangeButton from "../../../ui/OrangeButton";

const MuseumItems = (props) => {
  return(
    <div className='container mx-auto flex flex-col gap-8 my-6 px-3 '>
      {props.props.map((item, index) => (
        
      <div id={item.title.trim()} key={item.id} className=' flex relative flex-col odd:md:flex-row even:md:flex-row-reverse w-full h-100vh truncate whitespace-normal' >

        <div className="md:h-full lg:h-full w-full md:w-2/3 truncate">
          <img className='md:h-full lg:h-full w-full object-cover' src={item.thubmnail} alt='gempic'/>
        </div>

        <div key={item.id} className={`${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:absolute md:top-1/2 md:-translate-y-1/2 flex flex-col items-start gap-3 h-[60%] w-full md:w-[40%] py-8 px-5 bg-white`}>
          <p className="font-bold flex text-orange-500 text-3xl w-full gap-2 justify-start items-center">
            <img className="h-[2rem] object-cover " src={item.icon} alt="collections_icon"/>
            <span className="">{item.title}</span>
            </p>
          <p className="px-0 mt-4 w-full text-stone-500 font-base text-sm md:text-lg md:leading-relaxed text-ellipsis overflow-hidden ... leading-relaxed">{item.description}</p>
          <NavLink to={`${item.id}`}>
            <OrangeButton text="Discover More" />
          </NavLink>
          </div>

      </div>
      ))}
    </div>
  )
}

export default MuseumItems;