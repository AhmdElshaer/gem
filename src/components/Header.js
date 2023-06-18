import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import Navbar from '../ui/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setIsOpen] = useState(false);

  return(
    <header className='container mx-auto py-2 flex flex-col justify-between text-stone-600 z-40'>
      <div className='flex justify-between items-center'>
        <NavLink to='/' preventScrollReset={false}>
          <img className='h-24 w-24' src={require('../imgs/Group 13642.png')} alt='logo'/>
          </NavLink>
        <div onClick={() => setIsOpen(!open)} className='cursor-pointer font-bold text-3xl lg:hidden text-stone-500 border rounded border p-1'><RxHamburgerMenu /></div>
        <div className='hidden lg:block flex items-end'>
          <Navbar />
        </div>
      </div>

      { open && <div className='lg:hidden'><Navbar /></div>}
    </header>
  )
}

export default Header;