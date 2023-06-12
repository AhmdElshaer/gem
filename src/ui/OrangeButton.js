

const OrangeButton = ({text}) => {
  return(
  <div className="orangeButton relative md:w-36 lg:w-36 bg-orange-500 h-10 rounded font-base text-sm">
    <button className="z-20 text-white hover:text-orange-500 hover:border hover:border-orange-500 w-full h-full">{text}</button>
  </div>
  )
}

export default OrangeButton;