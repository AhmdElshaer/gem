import { useState, useEffect } from "react";
import { Progress } from "@material-tailwind/react";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  // const [progFixed, setProgFixed] = useState('');

  // const ref = useRef();
  
  const totalScroll = document.documentElement.scrollTop;

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
    <div id="progressBar" className={`sticky top-0 bg-white z-50 w-full flex flex-col`}>
      <div className="w-full flex flex-row justify-center items-center gap-4 md:gap-8 text-stone-500 font-normal text-[0.8rem] md:text-xl p-4 museumBanner">
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
      <div className="w-full z-30 bg-stone-200 flex justify-center items-center truncate h-[3.3px]">
        <Progress value={+scroll} color="orange"/>
      </div>
  </div>
  )
}

export default ProgressBar;