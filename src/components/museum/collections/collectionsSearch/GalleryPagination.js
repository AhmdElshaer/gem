import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const GalleryPagination = ({data}) => {
  const [currentdata, setCurrentdata] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [dataOffset, setdataOffset] = useState(0);
  
  useEffect(() => {
    const endOffset = dataOffset + 20;
    setCurrentdata(data.slice(dataOffset, endOffset));
    setPageCount(Math.ceil(data.length / 20));
  }, [data, dataOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % data.length;
    setdataOffset(newOffset);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  };

  return (
    <div className="container mx-auto flex flex-col w-full justify-center items-center px-2">
      <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-start justify-items-center">
        {currentdata && currentdata.map((item)=> (<div key={item?.id} className="relative rounded-xl aspect-square truncate">
              <img className='w-full h-full rounded-xl object-cover' src={item.thumbnail} alt='collections'/>

              <div className="h-[120%] w-full flex justify-end absolute bottom-[-22%] md:bottom-[-20%]  lg:bottom-[-20%] hover:bottom-[0px] ease-in duration-300 text-white ">
                <div className="flex flex-col p-4 w-full gap-4 justify-end items-center bg-gradient-to-b from-transparent via-transparent to-stone-500">
                  <p className="font-bold">{item?.title}</p>
                  <p>{item.period?.title}</p>
                  <NavLink to={`/museum/collections/collections-search/${item?.id}`}><p className="underline underline-offset-3 text-sm">See More Details</p></NavLink>
                </div>
              </div>
            </div>))}
      </div>
      <div className="pagination w-full text-lg my-14 md:h-[70px] flex justify-center items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<FaArrowRight/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<FaArrowLeft/>}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
  </div>
  )
  
}

export default GalleryPagination;
