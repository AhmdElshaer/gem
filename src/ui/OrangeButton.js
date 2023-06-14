

const OrangeButton = ({text}) => {
  return(
  <div className="orangeButton relative w-32 md:w-36 bg-orange-500 h-10 md:h-12 rounded font-light md:font-normal text-sm md:text-md">
    <button className="z-20 text-white hover:text-orange-500 hover:border hover:border-orange-500 w-full h-full">{text}</button>
  </div>
  )
}

export default OrangeButton;