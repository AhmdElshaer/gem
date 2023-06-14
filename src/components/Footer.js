import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { TiSocialTwitter } from 'react-icons/ti';
import OrangeButton from '../ui/OrangeButton';


const Footer = () => {
  return(
    <footer className='relative container mx-auto w-full z-40 bg-white'>
      <div className="flex flex-col md:flex-row lg:flex-row w-full mb-12">

        <div id="left" className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">

          <div className='w-full flex justify-center py-4 items-center mb-2'>
            <img className='w-[145px] h-fit object-cover' src={require('../imgs/Group 13642.png')} alt='logo'/>
          </div>

          <div className='flex flex-col justify-center gap-5 md:gap-6 pb-4 border-t-2 font-normal text-2xl text-stone-600'>
            <p>FOLLOW US</p>
            <p className='flex flex-row gap-2 text-3xl'>
              <AiOutlineInstagram className='hover:text-orange-500'/>
              <FaFacebookF className='hover:text-orange-500'/>
              <TiSocialTwitter className='hover:text-orange-500'/>
              <FaWhatsapp className='hover:text-orange-500'/>
              <FaYoutube className='hover:text-orange-500'/>
              <GrLinkedinOption className='hover:text-orange-500'/>
              <FaTripadvisor className='hover:text-orange-500'/>
              <FaTiktok className='hover:text-orange-500'/>
            </p>
            <p>JOIN OUR NEWSLETTER</p>
            <div className='flex items-center gap-2 md:gap-4 w-full justify-between'>
              <input placeholder='Your Email' className='px-4 text-xs md:text-base border rounded-lg border-stone-500 h-10 md:h-12 w-48'/>
              <OrangeButton text='Subscribe'/>
            </div>
          </div>
        </div>

        <div id="right" className="nav text-stone-700 w-full md:w-1/2 bg-stone-100 flex flex-col md:gap-6 pt-8 px-4 justify-center">
          <div className='mb-4 flex flex-row justify-between md:justify-center md:gap-12 items-start'>

            <div className='flex flex-col gap-4'>
              <p className='about md:text-2xl text-xl font-normal'>About GEM</p>
              <ul className='relative text-stone-500 text-sm md:text-base font-normal flex flex-col gap-4'>
                <li>Mission and Vision</li>
                <li>GEM Story</li>
                <li>Partners</li>
                <li>Board Of Trustees</li>
                <li>Board Of Directors</li>
              </ul>
            </div>
            
            <div className=''>
              <ul className='flex flex-col text-xl font-normal gap-5'>
                <li>Contact Us</li>
                <li>Rate Your Visit!</li>
                <li>Membership</li>
                <li>Host An Event</li>
                <li>News And Press</li>
              </ul>
            </div>
          </div>
          <div className='pt-4 border-t-2 flex justify-center text-stone-500 items-center text-xs font-bold'>
            <p>Go to Experience Egypt</p>
          </div>
          </div>
      </div>

      <div className='copy-rights px-2 text-xs '>
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>
          <div >
            <ul className='flex flex-row gap-4 text-stone-500 mb-2 md:text-sm lg:text-sm'>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Terms of use</li>
              <li>Code for Conduct</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className='text-stone-500'>&copy; 2023 Grand Egyptian Museum</div>
        </div>

        <div className='flex justify-center text-stone-500 items-center bg-stone-100'>
          Designed and Developed by <span className='ml-2'>
            <img src={require('../imgs/icon-creations-logo.png')} alt='iconLogo'/>
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer;