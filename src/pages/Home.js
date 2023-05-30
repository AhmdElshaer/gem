import Footer from "../components/Footer";
import Collections from "../components/home/Collections";
import Experiences from "../components/home/Experiences";
import Highlights from "../components/home/Highlights";
import Landing from "../components/home/Landing";
import Panner from "../components/home/Panner"
import DoubleCards from "../ui/DoubleCards";


const Home = () => {
  const content1S1 = 'GEM has so much to offer kids and their families. Have fun together at the museum and online.';
  const linkContent1S1 = 'Learn more about all the kids activities at GEM';
  const title2S1 = 'Contribute to our future';
  const content2S1 = 'Support our mission in a new way. Become a member.';
  const linkContent2S1 = 'Learn More';

  const title1S2 = 'Ancient Egyptian Jewellery Making Workshop (One Day Programme)';
  const content1S2 = 'From precious stones to quality design, join in a high quality, hands-on workshop on ancient Egyptian Jewellery. Discover the grandeur of the ancient Egyptian civilisation by creating a custom piece of jewellery to take home using traditional methods with guidance from GEM experts.';
  const linkContent1S2 = 'Browse Arts & Crafts Center programs';
  const title2S2 = 'Women`s History Month';
  const content2S2 = 'Celebrating women this March through art, talks, exhibitions, and more.';
  const linkContent2S2 = 'Check March events here';


  return(
    <div>
    <Panner />
    <Highlights />
    <Collections />
    <Landing />
    <Experiences />
    <DoubleCards 
      Img1={require('../imgs/Path2243.png')}
      Title1='#GEM Kids'
      Content1={content1S1}
      LinkText1={linkContent1S1}
      Link1='#'
      Img2={require('../imgs/9.png')}
      Title2={title2S1}
      Content2={content2S1}
      LinkText2={linkContent2S1}
      Link2='#'
      />
    <DoubleCards 
      Img1={require('../imgs/Component15.png')}
      Title1={title1S2}
      Content1={content1S2}
      LinkText1={linkContent1S2}
      Link1='#'
      Img2={require('../imgs/20220129-DSC_0728-Edit.png')}
      Title2={title2S2}
      Content2={content2S2}
      LinkText2={linkContent2S2}
      Link2='#'
      />
      <Footer />
    </div>
  )
}

export default Home;