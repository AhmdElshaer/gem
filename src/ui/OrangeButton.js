

const OrangeButton = ({text}) => {
  return(
  <div className="orangeButton relative md:w-36 lg:w-36 bg-orange-500 h-10 rounded font-bold text-xs">
    <button className="z-20 text-white hover:text-orange-500 hover:border hover:border-orange-500 w-full h-full">{text}</button>
  </div>
    // <button className="orangeButton relative md:w-36 lg:w-36 text-white bg-orange-500 h-10 hover:text-orange-500 rounded font-bold text-xs">{text}</button>
  )
}

export default OrangeButton;