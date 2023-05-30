

const HoverButton = ({text}) => {
  return(
    <div>
      <button className='w-36 text-black bg-white h-10 rounded hover:bg-orange-600 hover:text-white border border-orange-600'>{text}</button>
    </div>
  )
}

export default HoverButton;