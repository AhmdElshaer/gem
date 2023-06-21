import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../ui/ScrollToTop";


const RootLayout = () => {
  return(
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
  )
}

export default RootLayout;