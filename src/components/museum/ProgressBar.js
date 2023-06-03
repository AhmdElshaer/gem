import { useState, useEffect, useRef } from "react";
import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const [progFixed, setProgFixed] = useState('');

  const ref = useRef();
  
  const totalScroll = document.documentElement.scrollTop;

  useEffect(() => {
    const element = document.getElementById('progressBar');
    let progressBarPosition = element.offsetTop;
    if (totalScroll > progressBarPosition) {
      setProgFixed('fixed');
      console.log('fixed');
    } if (totalScroll < progressBarPosition) {
      setProgFixed('')
    }
  }, [progFixed, totalScroll])



useEffect(() => {
    let progressBarHandler = () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${(totalScroll / windowHeight) * 100}`;
        setScroll(scroll);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
},[scroll, totalScroll]);
  return(
    <div ref={ref} id="progressBar" className={`sticky top-0 bg-white z-50 w-full flex flex-col`}>
      <div className="w-full flex flex-row justify-center items-center gap-8 text-stone-400 font-bold md:text-xl lg:text-xl p-4 museumBanner">
        <a href="#museum_collections" className={`${({isActive}) => isActive ? "active" : ''} hover:text-orange-500`}>
          Collections
        </a>
        <a href="#child_museum" className={`${({isActive}) => isActive ? "active" : ''} hover:text-orange-500`}>
          Children's Museum
        </a>
        <a href="#conservation" className={`${({isActive}) => isActive ? "active" : ''} hover:text-orange-500`}>
          Conservation Centre
          </a>
      </div>
      <div className="w-full z-30 bg-stone-200 flex justify-center items-center truncate" style={{height: '3px'}}>
        <Progress value={+scroll} color="orange"/>
      </div>
  </div>
  )
}

export default ProgressBar;