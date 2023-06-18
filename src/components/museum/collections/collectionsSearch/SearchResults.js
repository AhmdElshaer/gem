import { useEffect, useState } from "react";
import { useSearchParams, NavLink, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";


const SearchResults = () => {
  
  const [collectionsSearch, setCollectionsSearch] = useState([]);
  const [hasError, setIsError] = useState(false);
  const error = useRouteError();

  let [searchParams] = useSearchParams();
  
  useEffect(()=>{

    let keyword = searchParams.get("keyword");
    let theme = searchParams.get('theme_id');
    let period = searchParams.get('period_id');
    let material = searchParams.get('material_id');
    let category = searchParams.get('category_id');
    let provenance = searchParams.get('provenance_id');
    let gallery = searchParams.get('gallery_id');

    async function collectionSearch () {

      // const response = await fetch(`https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections/filter?keyword=${keyword}&theme_id=${theme}&period_id=${period}&material_id=${material}&category_id=${category}&provenance_id=${provenance}&gallery_id=${gallery}`);

      const response = await fetch(`https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections/filter?${keyword ? `keyword=${keyword}` : ''}${theme ? `&theme_id=${theme}` : ''}${period ? `&period_id=${period}` : ''}${material ? `&material_id=${material}` : ''}${category ? `&category_id=${category}` : ''}${provenance ? `&provenance_id=${provenance}` : ''}${gallery ? `&gallery_id=${gallery}` : ''}`);
      if (!response.ok) {
        setIsError(true);
      } else {
        setIsError(false);
        const resData = await response.json();
        setCollectionsSearch(resData.data);
      }}
    collectionSearch()
  },[searchParams]);
  
  return (
    <div className="highlights w-full flex flex-col justify-center items-start px-2 container mx-auto my-4">
        <p className="text-lg mb-8 font-semibold text-stone-700">
          Explore the glory of Ancient Egypt through an extensive collection dating from Prehistoric times to the Roman Period, each revealing a unique aspect of the ancient Egyptian civilisation.
          </p>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-start justify-items-center">

          {collectionsSearch.length === 0 || hasError || isRouteErrorResponse(error) ? (<p className="absolute font-bold left-1/2 translate-x-[-50%] text-xl w-[200px]">There Is No Collections</p>) 
          : collectionsSearch.map((item) => (
            <div key={item?.id} className="relative aspect-square rounded-lg truncate">
              <img className='w-full h-full rounded-lg object-cover' src={item.thumbnail} alt='collections'/>

              <div className="h-[120%] w-full flex justify-end absolute bottom-[-23%]  lg:bottom-[-22%] hover:bottom-[0px] ease-in duration-300 text-white ">
                <div className="flex flex-col p-4 w-full gap-4 justify-end items-center bg-gradient-to-b from-transparent via-transparent to-stone-500">
                  <p className="font-bold">{item?.title}</p>
                  <p>{item.period?.title}</p>
                  <Link preventScrollReset={false} to={`/museum/collections/collections-search/${item?.id}`}><p className="underline underline-offset-3 text-sm">See More Details</p></Link>
                </div>
              </div>
            </div>
        ))}
          
        </div>
        <p className="font-bold text-md w-full text-center my-10 underline hover:text-orange-500 ease-in duration-300"><NavLink to={'/museum/collections/main-galleries'}>See More Collections</NavLink></p>
      </div>
  )
}

export default SearchResults;