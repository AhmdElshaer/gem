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
    <div>
      <div className="flex flex-row w-full">
        <div id="left" className=" w-1/2 flex flex-col items-center">
          <div className='w-full flex justify-center items-center mb-2'>
            <img className='h-36 w-36 object-cover' src={require('../imgs/Group 13642.png')} alt='logo'/>
          </div>
          <div className='w-4/5 flex flex-col justify-center gap-2 p-4 border-t-2 font-bold text-stone-600'>
            <p>FOLLOW US</p>
            <p className='flex flex-row gap-2 text-2xl'>
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
            <div className='text-xs flex items-center gap-2 w-full justify-between'>
              <input placeholder='Your Email' className='px-1 border rounded border-stone-500 h-10 w-48'/>
              <OrangeButton text='Subscribe'/>
            </div>
          </div>
        </div>

        <div id="right" className="text-stone-700 w-1/2 bg-stone-100 flex flex-col px-14 justify-center">
          <div className='mb-4 flex flex-row justify-between items-start'>
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>About The GEM</p>
              <ul className='text-stone-600 text-xs font-bold flex flex-col gap-4'>
                <li>The GEM Story</li>
                <li>Mission and Vision</li>
                <li>Partners</li>
                <li>Board Of Trustees</li>
                <li>Board Of Directors</li>
              </ul>
            </div>
            <div className='font-bold'>
              <ul className='flex flex-col gap-3'>
                <li>Contact Us</li>
                <li>Membership</li>
                <li>Host An Event</li>
                <li>News And Press</li>
                <li>Media</li>
              </ul>
            </div>
          </div>
          <div className='pt-4 border-t-2 flex justify-center items-center text-xs font-bold'>
            <p>Near by Experience Egypt web</p>
          </div>
          </div>
      </div>

      <div className='copy-rights px-4 text-xs'>
        <div className='flex flex-row justify-between items-center'>
          <div >
            <ul className='flex flex-row gap-4 px-4'>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Terms of use</li>
              <li>Code for Conduct</li>
              <li>FAQs</li>
              <li>Copyrights</li>
            </ul>
          </div>
          <div>&copy; 2022 Grand Egyptian Museum</div>
        </div>

        <div className='flex justify-center items-center bg-stone-100'>
          Designed and Developed by <span className='ml-2'>
            <img src={require('../imgs/icon-creations-logo.png')} alt='iconLogo'/>
          </span>
        </div>
      </div>
    </div>

  )
}

export default Footer;