import Highlights from "../components/home/Highlights";
import Panner from "../components/home/Panner"
import OrangeButton from "../ui/Button";


const Home = () => {
  return(
    <>
    <Panner />
    <div className='fixed'>
    <OrangeButton />
    </div>
    <Highlights />
    </>
  )
}

export default Home;