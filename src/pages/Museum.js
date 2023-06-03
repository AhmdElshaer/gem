import { useLoaderData } from "react-router-dom";
import Banner from "../components/museum/Banner";
import Collections from "../components/museum/Collections";
import ChildMuseum from "../components/museum/ChildMuseum";
import Conservation from "../components/museum/Conservation";
import ProgressBar from "../components/museum/ProgressBar";


const Museum = () => {
  const museum = useLoaderData();
  const leftSectionChildMuseum = {title: museum.data.children_title_1, details: museum.data.children_description_1, image: museum.data.children_image_1};
  const rightSectionChildMuseum = [{id: 2, title: museum.data.children_title_2, details: museum.data.children_description_2, image: museum.data.children_image_2}, {id: 3, title: museum.data.children_title_3, details: museum.data.children_description_3, image: museum.data.children_image_3}];

  return(
    <div className="flex flex-col">
      <Banner 
        image={museum.data.banner_image}
        title={museum.data.banner_title}
        description={museum.data.banner_description}
      />

      <ProgressBar />

      <Collections 
      title={museum.data.collections_title}
      description={museum.data.collections_description}
      collections={museum.data.collections}
      />

      <ChildMuseum 
      title={museum.data.children_title}
      description={museum.data.children_description}
      left={leftSectionChildMuseum}
      right={rightSectionChildMuseum}
      />

      <Conservation 
      title={museum.data.conservation_title}
      description={museum.data.conservation_description}
      image={museum.data.conservation_image}
      />
    </div>
  )
}

export default Museum;