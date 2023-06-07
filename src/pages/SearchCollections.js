import { useLoaderData } from "react-router-dom";
import SearchBanner from "../components/museum/collections/collectionsSearch/SearchBanner";


const SearchCollections = () => {
  const searchItem = useLoaderData();
  console.log(searchItem);

  return(
    <SearchBanner />
  )
}

export default SearchCollections;