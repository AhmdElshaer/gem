import { useLoaderData } from "react-router-dom";


const SearchCollections = () => {
  const searchItem = useLoaderData();
  console.log(searchItem);

  return(
    <div className="flex flex-col h-[85vh] items-center">
      <p className="font-bold text-xl">Collections Search</p>
      <form>
        
      </form>
    </div>
  )
}

export default SearchCollections;