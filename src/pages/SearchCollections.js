import { useLoaderData } from "react-router-dom";
import SearchBanner from "../components/museum/collections/collectionsSearch/SearchBanner";
import SearchResults from "../components/museum/collections/collectionsSearch/SearchResults";


const SearchCollections = () => {
  const { catFilter, ThemesFilter, PeriodsFilter, MatFilter, ProvFilter, galFilter } = useLoaderData();
  // console.log(collectionsSearch);

  return(
    <>
      <SearchBanner 
      catFilter={catFilter.data}
      ThemesFilter={ThemesFilter.data}
      PeriodsFilter={PeriodsFilter.data}
      MatFilter={MatFilter.data}
      ProvFilter={ProvFilter.data}
      galFilter={galFilter.data}
      
      />
      <SearchResults/>
    </>
  )
}

export default SearchCollections;