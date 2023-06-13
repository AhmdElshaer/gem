import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const HighlightsDetails = () => {

  const navigate = useNavigate();
  const highlightItemData = useLoaderData();

  return(
    <div className="container mx-auto flex flex-col text-stone-700 flex-wrab gap-10 justify-center items-start p-4 mb-16">

      <div className="breadCrumb w-full flex flex-wrab w-full justify-start items-center text-xl gap-3 font-medium">
        <span onClick={()=> navigate(-1)} className="hover:bg-orange-500 hover:text-white ease-in duration-150 rounded w-9 h-9 flex justify-center items-center text-xl "><FaArrowLeft /></span>
        <span><NavLink to='/museum' className='p-2'>Museum</NavLink>/</span>
        <span><NavLink to='/museum/collections' className='p-2'>Collections</NavLink>/</span>
        <span><NavLink to={`/museum/collections/${highlightItemData.data.collection.id}`} className='p-2'>{highlightItemData.data.collection.title}</NavLink>/</span>
        <span>{highlightItemData.data.title}</span>
      </div>

      <div className="font-bold text-4xl my-2">{highlightItemData.data.title}</div>

      <div className="w-full md:h-[650px] flex flex-col md:flex-row gap-10">

        <div className="left-section w-full md:w-1/2 h-[650px] md:h-full">
          <img src={highlightItemData.data.thumbnail} alt={highlightItemData.data.title} className="h-[90%] mb-3 rounded-lg object-cover"/>
          {highlightItemData.data.slides.length === 0 ? (<img className="h-[10%] rounded-lg ml-3" src={highlightItemData.data.if_no_slides['0'].image} alt='thumbnail' />)
          : (<div>{highlightItemData.data.slides.map((item)=>(<img className="h-[10%] rounded-lg ml-3" src={item.image} alt='thumbnail'/>))}</div>)}
        </div>

        <div className="right-section flex flex-col gap-4 md:h-full p-8">
          <p>
            <span className="text-md font-bold text-orange-500 mr-3">GEM Number:</span>
            <span className="font-base text-sm">{highlightItemData.data.gem_number}</span>
            </p>
          <p>
            <span className="text-md font-bold text-orange-500 mr-3">collection:</span>
            <span className="font-base text-sm">{highlightItemData.data.collection.title}</span>
            </p>
          <p>
            <span className="text-md font-bold text-orange-500 mr-3">Materials:</span>
            <span className="font-base text-sm">{highlightItemData.data.materials.map((item)=> (<span className="mr-2" key={item.id}>{item.title}</span>))}</span>
            </p>
          <p>
            <span className="text-md font-bold text-orange-500 mr-3">Period:</span>
            <span className="font-base text-sm">{highlightItemData.data.period.title}</span>
            </p>
        </div>
      </div>

      <div className="flex flex-col ">
        <p className="text-3xl my-6 text-orange-500 font-bold">Description</p>
        <p className="font-base text-stone-600 text-lg leading-loose">{highlightItemData.data.description}</p>
      </div>

      <div className="flex flex-col ">
        <p className="text-3xl my-6 text-orange-500 font-bold">Dimensions</p>
        <div className="flex flex-col gap-3">
          <p className="font-base"><span>Height</span><span className="text-stone-500 ml-3">{highlightItemData.data.height} cm</span></p>
          <p className="font-base"><span>Width</span><span className="text-stone-500 ml-3">{highlightItemData.data.width} cm</span></p>
          <p className="font-base"><span>Length</span><span className="text-stone-500 ml-3">{highlightItemData.data.length} cm</span></p>
        </div>
      </div>

      <div id="relatedArtfacts" className="highlights w-full flex flex-col justify-center items-start px-2">
        <p className="text-4xl font-bold mb-8 text-stone-700">Related Artefacts</p>
        <div className="grid relative gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-start justify-items-center">
          {highlightItemData.data.related_artfacts.map((item) => (
            <div key={item.id} className="relative aspect-square truncate">
              <img className='w-full h-full rounded-lg object-cover' src={item.thumbnail} alt='collections'/>

              <div className="h-[110%] w-full p-4 absolute bottom-[-9%] hover:bottom-[0px] ease-in duration-300 text-white flex flex-col gap-4 justify-end items-center bg-gradient-to-b from-transparent via-transparent to-stone-500">
                <p className="font-bold">{item.title}</p>
                <NavLink to={`/museum/collections/collections-search/${item.id}`}><p className="underline underline-offset-3 text-sm">See More Details</p></NavLink>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default HighlightsDetails;