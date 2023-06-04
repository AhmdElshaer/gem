import { useLoaderData } from "react-router-dom";
import CollBanner from "../components/museum/collections/CollBanner";
import CollProgressBar from "../components/museum/collections/CollProgressBar";
import MuseumItems from "../components/museum/collections/MuseumItems";


const MuseumCollections = () => {
  const museumCollections = useLoaderData();
  // console.log(museumCollections.data);
  return(
    <>
      <CollBanner 
      image={museumCollections.data.banner_image}
      title={museumCollections.data.banner_title}
      description={museumCollections.data.banner_description}
      />

      <CollProgressBar collections={museumCollections.data.collections}/>

      <MuseumItems props={museumCollections.data.collections} />
    </>
  )
}

export default MuseumCollections;