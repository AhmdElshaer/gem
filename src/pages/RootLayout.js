import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import OrangeButton from "../ui/OrangeButton";
import ScrollTopButton from "../ui/ScrollTopButton";
import Footer from "../components/Footer";


const RootLayout = () => {
  return(
    <>
      <Header />
      <div className='fixed flex justify-end items-end px-4 text-center bottom-0 z-20 mx-0 w-full py-8 bg-gradient-to-t from-white' style={{transform: 'translate: (-50%, 0)', gap: 'calc(50% - 120px)'}}>
        <OrangeButton text='BUY TICKETS'/>
        <ScrollTopButton />
    </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout;