

const HoverButton = ({text}) => {
  return(
    <div className="hoverButton relative">
      <button className='w-36 h-10 md:w-48 md:h-11 text-orange-500 font-normal md:font-normal text-sm md:text-md lg:text-lg rounded hover:text-white border border-orange-500'>{text}</button>
    </div>
  )
}

export default HoverButton;