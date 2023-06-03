import { useLoaderData } from "react-router-dom";
import Collections from "../components/home/Collections";
import Experiences from "../components/home/Experiences";
import Highlights from "../components/home/Highlights";
import Landing from "../components/home/Landing";
import DoubleCards from "../ui/DoubleCards";
import Banner from "../components/home/Banner";


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
    </>
  )
}

export default Home;

