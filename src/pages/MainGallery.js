import { useLoaderData } from "react-router-dom";
import GalleryPagination from "../components/museum/collections/collectionsSearch/GalleryPagination";


const MainGallery = () => {
  const mainGalleryData = useLoaderData();
  console.log(mainGalleryData);
  return(
    <div className="flex flex-col ">
      <div className="flex relative justify-center items-center mb-4">
        <img className="w-screen h-[15vh]" src={require("../imgs/shutterstock_1955215519.png")} alt="collection_item"/>
        <div className="absolute text-white z-30 text-3xl font-bold">Main Galleries Collections</div>
      </div>

      <div>
        <GalleryPagination data={mainGalleryData.data}/>
      </div>
    </div>
  )
}

export default MainGallery;