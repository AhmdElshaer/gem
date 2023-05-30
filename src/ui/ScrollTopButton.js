import { BiUpArrowAlt } from 'react-icons/bi';

const ScrollTopButton = () => {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  return(
    <div className='rounded-full text-stone-600 flex justify-center items-center text-3xl shadow-[1.0px_4.0px_4.0px_rgba(0,0,0,0.38)] bg-white w-12 h-12 transition ease-in-out delay-150 hover:scale-110 duration-300'>
    <button onClick={goToTop} ><BiUpArrowAlt /></button>
    </div>
  )
}

export default ScrollTopButton;