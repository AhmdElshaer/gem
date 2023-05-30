import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [open, setIsOpen] = useState(false);

  return(
    <header className='container mx-auto py-3 px-4 flex flex-col justify-between text-stone-600 z-40'>
      <div className='flex justify-between items-center'>
        <img className='h-24 w-24' src={require('../imgs/Group 13642.png')} alt='logo'/>
        <div onClick={() => setIsOpen(!open)} className='cursor-pointer font-bold text-3xl lg:hidden border rounded border-4 p-1'><RxHamburgerMenu /></div>
        <div className='hidden lg:block flex items-end'>
        <Navbar />
        </div>
      </div>

      { open && <Navbar />}
    </header>
  )
}

export default Header;