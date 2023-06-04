

const HoverButton = ({text}) => {
  return(
    <div className="hoverButton relative">
      <button className='w-36 h-10 text-orange-500 font-semibold font-orange-500 rounded hover:text-white border border-orange-500'>{text}</button>
    </div>
  )
}

export default HoverButton;