import { CiSearch } from 'react-icons/ci';
import { GrLanguage } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return(
    <header className='container mx-auto py-3 flex justify-between h-28'>
      <div>
      <img className='h-24' src={require('../imgs/Group 13642.png')} alt='logo'/>
      </div>
      <div className='flex flex-col items-end justify-center'>
        <div className='flex items-center justify-center'>
          <p ><CiSearch/></p>
          <p className='pl-4'><GrLanguage/></p>
          <p className='pl-4'><BsPerson/></p>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className='flex items-center justify-center'>
            <span className='mr-2'>VISIT</span>
            <MdKeyboardArrowDown/>
          </div>
          <div className='flex items-center justify-center ml-5'>
            <span className='mr-2'>MUSEUM</span>
            <MdKeyboardArrowDown/>
          </div>
          <div className='flex items-center justify-center ml-5'>
            <span className='mr-2'>THE GEM EXPERIENCE</span>
            <MdKeyboardArrowDown/>
          </div>
          <div className='flex items-center justify-center ml-5'>
            <span className='mr-2' >WHAT'S ON</span>
            <MdKeyboardArrowDown/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;