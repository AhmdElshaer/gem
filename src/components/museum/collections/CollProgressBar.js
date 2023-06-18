import { useState, useEffect } from "react";
import { Progress } from "@material-tailwind/react";

const CollProgressBar = ({collections}) => {
  const [scroll, setScroll] = useState(0);
  
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
    <div id="progressBar" className={`sticky top-0 bg-white z-50 w-full flex flex-col justify-center items-center`}>

      <div className="w-full md:w-3/4 lg:w-3/4 flex flex-wrap justify-center items-center text-stone-400 text-sm md:text-base lg:text-lg py-4 px-1 museumBanner">

        {collections.map((item) => (
          <a href={`#${item?.title.trim()}`} key={item?.id} className="hover:text-stone-700 mr-8">{item?.title}</a>
        ))}

      </div>

      <div className="w-full z-30 bg-stone-200 flex justify-center items-center truncate" style={{height: '3px'}}>
        <Progress value={+scroll} color="orange"/>
      </div>
  </div>
  )
}

export default CollProgressBar;