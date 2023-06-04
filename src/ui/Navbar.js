import { CiSearch } from 'react-icons/ci';
import { GrLanguage } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [visitIsShown, setVisitIsShown] = useState(false);
  const [museumIsShown, setMuseumIsShown] = useState(false);
  const [expIsShown, setExpIsShown] = useState(false);
  const [whatIsShown, setWhatIsShown] = useState(false);

  return(
    <div className='flex flex-col-reverse md:flex-col lg:flex-col items-center md:items-end lg:items-end justify-center'>
        <div className='flex items-center justify-end mt-2'>
          <p className='hover:text-orange-500'><CiSearch/></p>
          <p className='pl-4 hover:text-orange-500'><GrLanguage/></p>
          <p className='pl-4 hover:text-orange-500'><BsPerson/></p>
        </div>
        <div className='flex flex-col gap-3 md:flex-row lg:flex-row items-center justify-center md:justify-end lg:justify-end mt-4 font-bold text-sm w-full px-2'>

          <div onMouseEnter={() => setVisitIsShown(true)} onMouseLeave={() => setVisitIsShown(false)} className='relative flex flex-col md:justify-center lg:justify-center items-center w-full md:w-auto'>
            
            <div className='flex justify-between items-center w-full'>
              <span className='mr-2'>VISIT</span>
              <MdKeyboardArrowDown/>
            </div>

            <ul className={`md:absolute lg:absolute md:left-1/2 lg:left-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 md:-bottom-32 lg:-bottom-32 z-40 bg-white md:w-40 lg:w-40 w-full py-2 mt-2 rounded-lg shadow-xl ${visitIsShown ? "block" : "hidden"}`}>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Opening Hours
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Tickets
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Visitor Guide
              </li>
          </ul>
          </div>

          
            <div 
            onMouseEnter={() => setMuseumIsShown(true)} 
            onMouseLeave={() => setMuseumIsShown(false)}
            className='w-full md:w-auto relative flex flex-col md:justify-center lg:justify-center items-center w-full md:w-auto'>

              <div className='flex justify-between items-center w-full'>
                <NavLink to='/museum' className='mr-2'>Museum</NavLink>
                <MdKeyboardArrowDown/>
              </div>
              <ul className={`md:absolute lg:absolute md:left-1/2 lg:left-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 md:-bottom-32 lg:-bottom-32 z-40 bg-white md:w-40 lg:w-40 w-full py-2 mt-2 rounded-lg shadow-xl ${museumIsShown ? "block" : "hidden"}`}>
                <li className="flex w-full items-center px-3 py-2 text-sm">
                <NavLink to='/museum/collections'>
                  Collections
                </NavLink>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm">
                  Children's Museum
                </li>
                <li className="flex w-full items-center px-3 py-2 text-sm">
                  Conservation Centre
                </li>
            </ul>
          </div>

          <div onMouseEnter={() => setExpIsShown(true)} onMouseLeave={() => setExpIsShown(false)} className='relative flex flex-col md:justify-center lg:justify-center items-center w-full md:w-auto'>
            <div className='flex justify-between items-center w-full'>
              <span className='mr-2'>THE GEM EXPERIENCE</span>
              <MdKeyboardArrowDown/>
            </div>
            <ul className={`md:absolute lg:absolute md:left-1/2 lg:left-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 md:-bottom-48 lg:-bottom-48 z-40 bg-white md:w-40 lg:w-40 w-full py-2 mt-2 rounded-lg shadow-xl ${expIsShown ? "block" : "hidden"}`}>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Dine
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Shop
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Play
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Learn
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Work
              </li>
          </ul>
          </div>

          <div onMouseEnter={() => setWhatIsShown(true)} onMouseLeave={() => setWhatIsShown(false)} className='relative flex flex-col md:justify-center lg:justify-center items-center w-full md:w-auto'>
            <div className='flex justify-between items-center w-full'>
              <span className='mr-2' >WHAT'S ON</span>
              <MdKeyboardArrowDown/>
            </div>
            <ul className={`md:absolute lg:absolute md:left-1/2 lg:left-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 md:-bottom-20 lg:-bottom-20 z-40 bg-white md:w-40 lg:w-40 w-full py-1 mt-2 rounded-lg shadow-xl ${whatIsShown ? "block" : "hidden"}`}>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Calender
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm">
                Events
              </li>
          </ul>
          </div>
        </div>
      </div>
  )
}

export default Navbar;