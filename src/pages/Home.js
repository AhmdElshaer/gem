import { useLoaderData } from "react-router-dom";
import Collections from "../components/home/Collections";
import Experiences from "../components/home/Experiences";
import Highlights from "../components/home/Highlights";
import Landing from "../components/home/Landing";
import DoubleCards from "../ui/DoubleCards";
import Banner from "../components/home/Banner";
import OrangeButton from "../ui/OrangeButton";
import ScrollTopButton from "../ui/ScrollTopButton";


const Home = () => {
  const home = useLoaderData();

  return(
    <>
    <Banner props={home.data.banners} />
    <Highlights props={home.data.highlights} />
    <Collections props={home.data.collections}/>
    <Landing props={home.data.behind_the_scenes}/>
    <Experiences left={home.data.experiences_left} right={home.data.experiences_right}/>
    <DoubleCards 
      props={home.data.home_sections}
      />
    <div className='fixed flex justify-end items-end px-4 text-center bottom-0 z-20 mx-0 w-full py-8 bg-gradient-to-t from-white' style={{transform: 'translate: (-50%, 0)', gap: 'calc(50% - 120px)'}}>
      <OrangeButton text='BUY TICKETS'/>
      <ScrollTopButton />
  </div>
    </>
  )
}

export default Home;

